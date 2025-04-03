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
	let reactiveNavigation = $state(null);
	let ready = $state(false);

	const derivedMatchingRules = $derived.by(() => {
		if (!reactiveNavigation) return [];

		return rules.filter((rule) => {
			if (!rule) return false;

			// Check navigation type first
			if (Object.hasOwn(rule, 'withType')) {
				const withType = rule.withType;
				const navType = reactiveNavigation.type;
				if (Array.isArray(withType) ? !withType.includes(navType) : withType !== navType)
					return false;
			}

			// Special case: 'enter' navigation has null .from
			if (reactiveNavigation.type === 'enter') {
				return !Object.hasOwn(rule, 'fromRouteId');
			}

			// Normal navigation checks
			if (Object.hasOwn(rule, 'fromRouteId')) {
				if (rule.fromRouteId !== reactiveNavigation.from?.route?.id) {
					return false;
				}
			}

			if (Object.hasOwn(rule, 'toRouteId')) {
				if (rule.toRouteId !== reactiveNavigation.to?.route?.id) {
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
		reactiveNavigation = navigation;
	});

	afterNavigate((navigation) => {
		if (debug) console.log('Navigation completed:', navigation.type, navigation);
		if (!browser) return;

		reactiveNavigation = navigation;
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
</script>

<!-- glowing-ice -->
<div
	style="position: relative; min-width: 100%; min-height: 100%; height: 100%; display: flex; flex-direction: column; flex: 1; justify-content: stretch;"
>
	{#key page.url}
		{#if ready}
			<div
				style="position: absolute; top: 0; bottom:0 left: 0; right: 0; min-width: 100%; min-height: 100%; display: flex; flex-direction: column; flex: 1; justify-content: stretch;"
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
			<div
				style="position: absolute; inset: 0; display: flex; flex-direction: column; flex: 1; justify-content: stretch;"
			></div>
		{/if}
	{/key}
</div>
