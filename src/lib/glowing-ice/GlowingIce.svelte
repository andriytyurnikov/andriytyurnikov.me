<script>
	// import { browser, dev, building, version } from '$app/environment';
	import { page } from '$app/state';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	import { noop } from './transition.js';

	let { children, rules, debug = true } = $props();

	// Reactive state
	let loaded = $state(false);
	let navigating_matching_rules = $state([]);
	let before_navigate_fired = $state(false);
	let after_navigate_fired = $state(false);

	const derivedActiveRule = $derived.by(() => {
		return navigating_matching_rules[0] || {};
	});

	const derivedIntro = $derived.by(() => {
		return derivedActiveRule?.intro?.function || derivedActiveRule?.transition?.function || noop;
	});

	const derivedIntroParams = $derived.by(() => {
		return derivedActiveRule.intro?.params || derivedActiveRule.transition?.params || {};
	});

	const derivedOutro = $derived.by(() => {
		return derivedActiveRule?.outro?.function || derivedActiveRule?.transition?.function || noop;
	});

	const derivedOutroParams = $derived.by(() => {
		return derivedActiveRule?.outro?.params || derivedActiveRule?.transition?.params || {};
	});

	// Effects
	$effect(() => {
		loaded = true;
	});

	// Navigation handlers
	beforeNavigate((navigation) => {
		console.log('beforeNavigate', navigation);
		navigating_matching_rules = getMatchingRules(navigation);
		after_navigate_fired = false;
		before_navigate_fired = true;
	});

	afterNavigate((navigation) => {
		console.log('afterNavigate', navigation);
		navigating_matching_rules = getMatchingRules(navigation);
		after_navigate_fired = true;
		before_navigate_fired = false;
	});

	// Event handlers
	function onoutroend(e) {
		return derivedActiveRule?.onoutroend?.(e);
	}
	function onoutrostart(e) {
		return derivedActiveRule?.onoutrostart?.(e);
	}
	function onintrostart(e) {
		return derivedActiveRule?.onintrostart?.(e);
	}
	function onintroend(e) {
		return derivedActiveRule?.onintroend?.(e);
	}

	function getMatchingRules(navigation) {
		return rules.filter((rule) => {
			if (!rule) return false;

			// Check navigation type
			if (Object.hasOwn(rule, 'withType')) {
				const withType = rule.withType;
				if (
					Array.isArray(withType)
						? !withType.includes(navigation.type)
						: withType !== navigation.type
				) {
					return false;
				}
			}

			// Check route IDs
			if (Object.hasOwn(rule, 'fromRouteId') && rule.fromRouteId !== navigation.from?.route?.id) {
				return false;
			}

			if (Object.hasOwn(rule, 'toRouteId') && rule.toRouteId !== navigation.to?.route?.id) {
				return false;
			}

			return true;
		});
	}
</script>

<!-- glowing-ice -->
<div style="position:relative; min-width: 100%; min-height: 100%;">
	{#key page.url}
		{#if loaded && (before_navigate_fired || after_navigate_fired)}
			<div
				style="position: absolute; top: 0px; left: 0px; min-width: 100%; min-height: 100%; display: flex; flex-direction: column;"
				in:derivedIntro|global={derivedIntroParams}
				out:derivedOutro|global={derivedOutroParams}
				{onintrostart}
				{onintroend}
				{onoutrostart}
				{onoutroend}
			>
				{@render children()}
			</div>
		{/if}
	{/key}
</div>
