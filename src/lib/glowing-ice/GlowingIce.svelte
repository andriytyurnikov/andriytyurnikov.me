<script>
	// import { browser, dev, building, version } from '$app/environment';
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	// import { onMount } from 'svelte';
	// import { OnMount } from 'fractils';
	import { tick } from 'svelte';

	import { noop } from './transition.js';

	let { children, rules, debug = true } = $props();

	// Reactive state
	let ready = $state(false);
	let navigating_matching_rules = $state([]);

	const derivedActiveRule = $derived.by(() => {
		return navigating_matching_rules[0] || {};
	});

	const derivedIntro = $derived.by(() => {
		return derivedActiveRule?.intro?.function || derivedActiveRule?.transition?.function || noop;
	});

	const derivedIntroParams = $derived.by(() => {
		return derivedActiveRule?.intro?.params || derivedActiveRule?.transition?.params || {};
	});

	const derivedOutro = $derived.by(() => {
		return derivedActiveRule?.outro?.function || derivedActiveRule?.transition?.function || noop;
	});

	const derivedOutroParams = $derived.by(() => {
		return derivedActiveRule?.outro?.params || derivedActiveRule?.transition?.params || {};
	});

	// Effects
	$effect(() => {
		if (browser) {
			// First tick: component mounted
			// Second tick: all children rendered
			tick()
				.then(tick)
				.then(() => {
					ready = true;
					if (debug) console.log('Animations ready');
				});
		}
	});

	// Navigation handlers
	beforeNavigate((navigation) => {
		if (debug) console.log('Navigation starting:', navigation.type);
		if (!browser) return;

		navigating_matching_rules = getMatchingRules(navigation);
	});

	afterNavigate((navigation) => {
		if (debug) console.log('Navigation completed:', navigation.type, navigation);
		if (!browser) return;

		if (navigation.type === 'enter') {
			// For SSR hydration
			navigating_matching_rules = getMatchingRules(navigation);
		} else {
			// Normal navigation
			navigating_matching_rules = getMatchingRules(navigation);
		}
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

			// Check navigation type first
			if (Object.hasOwn(rule, 'withType')) {
				const withType = rule.withType;
				const navType = navigation.type;
				if (Array.isArray(withType) ? !withType.includes(navType) : withType !== navType)
					return false;
			}

			// Special case: 'enter' navigation has null .from
			if (navigation.type === 'enter') {
				// Only match rules that explicitly allow 'enter' type
				// and don't require a fromRouteId
				return !Object.hasOwn(rule, 'fromRouteId');
			}

			// Normal navigation checks
			if (Object.hasOwn(rule, 'fromRouteId')) {
				// navigation.from exists for non-enter types
				if (rule.fromRouteId !== navigation.from?.route?.id) {
					return false;
				}
			}

			if (Object.hasOwn(rule, 'toRouteId')) {
				if (rule.toRouteId !== navigation.to?.route?.id) {
					return false;
				}
			}

			return true;
		});
	}
</script>

<!-- glowing-ice -->
<div style="position:relative; min-width: 100%; min-height: 100%;">
	{#key page.url}
		{#if ready}
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
		{:else}
			<div style="position: absolute; inset: 0; background: white; z-index: 100;" />
		{/if}
	{/key}
</div>
