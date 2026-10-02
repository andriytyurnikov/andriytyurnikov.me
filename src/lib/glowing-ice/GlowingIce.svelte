<script>
	import { browser } from '$app/env';
	import { MediaQuery } from 'svelte/reactivity';
	import { navigating, page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { tick } from 'svelte';

	const noop = () => {};

	let {
		children,
		debug = false,
		enableViewTransitions = false, // Flag for future granular control
		enableSvelteTransitions = true, // Flag for future granular control
		rules = []
	} = $props();

	// Reactive state
	let prefersReducedMotionMediaQuery = new MediaQuery('prefers-reduced-motion: reduce');
	const viewTransitionsSupported = $derived(browser && 'startViewTransition' in document);

	let viewTransitionsActive = $derived.by(() => {
		if (!browser) return false;

		return (
			!prefersReducedMotionMediaQuery.current && viewTransitionsSupported && enableViewTransitions
		);
	});

	let svelteTransitionsActive = $derived.by(() => {
		if (!browser) return false;

		return (
			!viewTransitionsActive && !prefersReducedMotionMediaQuery.current && enableSvelteTransitions
		);
	});

	let derivedKey = $derived(page.url.pathname);

	const matchesRouteId = (expected, actual) =>
		Array.isArray(expected) ? expected.includes(actual) : expected === actual;

	const derivedMatchingRules = $derived.by(() => {
		// navigating from $app/state is always an object; its props are null when idle
		if (!navigating?.type) return [];

		return rules.filter((rule) => {
			if (!rule) return false;

			// Check navigation type first
			if (Object.hasOwn(rule, 'withType')) {
				const withType = rule.withType;
				const navType = navigating?.type;
				if (Array.isArray(withType) ? !withType.includes(navType) : withType !== navType)
					return false;
			}

			// 'enter' navigation has a null `.from`, so a rule that names one cannot match
			if (Object.hasOwn(rule, 'fromRouteId')) {
				if (navigating?.type === 'enter') return false;

				if (!matchesRouteId(rule.fromRouteId, navigating?.from?.route?.id)) {
					return false;
				}
			}

			if (Object.hasOwn(rule, 'toRouteId')) {
				if (!matchesRouteId(rule.toRouteId, navigating?.to?.route?.id)) {
					return false;
				}
			}

			return true;
		});
	});

	const derivedActiveRule = $derived.by(() => {
		return derivedMatchingRules[0] || {};
	});

	const derivedIntro = $derived.by(() => {
		return svelteTransitionsActive
			? derivedActiveRule?.intro?.function || derivedActiveRule?.transition?.function || noop
			: noop;
	});

	const derivedIntroParams = $derived.by(() => {
		return derivedActiveRule?.intro?.params || derivedActiveRule?.transition?.params || {};
	});

	const derivedOutro = $derived.by(() => {
		return svelteTransitionsActive
			? derivedActiveRule?.outro?.function || derivedActiveRule?.transition?.function || noop
			: noop;
	});

	const derivedOutroParams = $derived.by(() => {
		return derivedActiveRule?.outro?.params || derivedActiveRule?.transition?.params || {};
	});

	const derivedUseViewTransitions = $derived.by(() => {
		return viewTransitionsSupported && enableViewTransitions;
	});

	// Effects
	$effect(() => {
		if (browser) {
			if (debug) console.log('View Transitions API supported:', viewTransitionsSupported);
			if (debug) console.log('View Transitions enabled:', enableViewTransitions);

			// First tick: component mounted
			// Second tick: all children rendered
			tick()
				.then(tick)
				.then(() => {
					if (debug) console.log('Animations ready');
				});
		}
	});

	// placeholder for future implementation of ViewTransitions API support
	onNavigate((navigation) => {
		if (navigation.shallow) return;
		if (debug) console.log('Navigation starting:', navigation.type);
		if (!browser) return;
		// navigating is faster

		if (prefersReducedMotionMediaQuery.current) return;

		if (!derivedUseViewTransitions) return;
		// use ViewTransition API
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			// Wait until the new page has been created in the DOM.
			// viewTransition.ready.then(() => {
			// 	// Do something?
			// });
		});
	});

	// Event handlers
	function onoutrostart(e) {
		return derivedActiveRule?.onoutrostart?.(e);
	}

	function onoutroend(e) {
		return derivedActiveRule?.onoutroend?.(e);
	}

	function onintrostart(e) {
		return derivedActiveRule?.onintrostart?.(e);
	}

	function onintroend(e) {
		return derivedActiveRule?.onintroend?.(e);
	}
</script>

<!-- glowing-ice -->
<div
	style="position: relative; min-width: 100%; min-height: 100%; height: 100%; display: flex; flex-direction: column; flex: 1; justify-content: stretch;"
>
	{#key derivedKey}
		<div
			style="position: absolute;
				      top: 0; bottom: 0; left: 0; right: 0;
							min-width: 100%;
							min-height: 100%;
							display: flex;
							flex-direction: column;
							flex: 1;
							justify-content: stretch;"
			in:derivedIntro|global={derivedIntroParams}
			{onintrostart}
			{onintroend}
			out:derivedOutro|global={derivedOutroParams}
			{onoutrostart}
			{onoutroend}
		>
			{@render children()}
		</div>
	{/key}
</div>
