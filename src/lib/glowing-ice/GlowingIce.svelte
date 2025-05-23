<script>
	import { browser } from '$app/environment';
	import { MediaQuery } from 'svelte/reactivity';
	import { navigating, page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { tick } from 'svelte';

	// import { noop } from './transition.js';
	const noop = () => {};

	let {
		children,
		debug = true,
		enableViewTransitions = false, // Flag for future granular control
		enableSvelteTransitions = true, // Flag for future granular control
		rules = []
	} = $props();

	// Reactive state
	let prefersReducedMotionMediaQuery = new MediaQuery('prefers-reduced-motion: reduce');
	let viewTransitionsSupported = $state(false);
	let instanceId = $state(42);

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

	let derivedKey = $derived.by(() => {
		if (!browser) return false;

		return page.url.pathname + instanceId;

		// return 0 == derivedMatchingRules.length
		// 	? page.url.pathname + instanceId
		// 	: page.url.pathname + instanceId;
	});

	const derivedMatchingRules = $derived.by(() => {
		if (!navigating) return [];

		return rules.filter((rule) => {
			if (!rule) return false;

			// Check navigation type first
			if (Object.hasOwn(rule, 'withType')) {
				const withType = rule.withType;
				const navType = navigating?.type;
				if (Array.isArray(withType) ? !withType.includes(navType) : withType !== navType)
					return false;
			}

			// Special case: 'enter' navigation has null .from
			if (navigating?.type === 'enter') {
				return !Object.hasOwn(rule, 'fromRouteId');
			}

			// Normal navigation checks
			if (Object.hasOwn(rule, 'fromRouteId')) {
				if (rule.fromRouteId !== navigating?.from?.route?.id) {
					return false;
				}
			}

			if (Object.hasOwn(rule, 'toRouteId')) {
				if (rule.toRouteId !== navigating?.to?.route?.id) {
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
			viewTransitionsSupported = 'startViewTransition' in document;
			if (debug) console.log('View Transitions API supported:', viewTransitionsSupported);
			if (debug) console.log('View Transitions enabled:', enableViewTransitions);
			instanceId = Math.random().toString(36).slice(2, 11);
			viewTransitionsActive = viewTransitionsSupported && enableViewTransitions;
			svelteTransitionsActive = enableSvelteTransitions && !viewTransitionsActive;

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
		if (debug) console.log('Navigation starting:', navigation.type);
		if (!browser) return;
		// navigating is faster

		if (prefersReducedMotionMediaQuery.current) return;

		if (!derivedUseViewTransitions) return;
		// use ViewTransition API
		return new Promise((resolve) => {
			const viewTransition = document.startViewTransition(async () => {
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

<style>
	@keyframes -global-slide-in {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-out {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	@keyframes -global-fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes -global-fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
