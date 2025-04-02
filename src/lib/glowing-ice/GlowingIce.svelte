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

	// Derived state
	// const reactive_transition = $derived(
	// 	before_navigate_fired || after_navigate_fired ? bindTransition : bindTransition
	// );
	const derivedIntro = $derived.by(() => {
		// before_navigate_fired || after_navigate_fired ? bindIntro : bindIntro;
		const rule = getActiveRule();
		return rule?.intro?.function || rule?.transition?.function || noop;
	});

	const derivedIntroParams = $derived.by(() => {
		// before_navigate_fired || after_navigate_fired ? bindIntro : bindIntro;
		const rule = getActiveRule();
		return rule?.intro?.params || rule?.transition?.params || {};
	});

	const derivedOutro = $derived.by(() => {
		// before_navigate_fired || after_navigate_fired ? bindOutro : bindOutro
		const rule = getActiveRule();
		return rule?.outro?.function || rule?.transition?.function || noop;
	});

	const derivedOutroParams = $derived.by(() => {
		// before_navigate_fired || after_navigate_fired ? bindIntro : bindIntro;
		const rule = getActiveRule();
		return rule?.outro?.params || rule?.transition?.params || {};
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

	function getActiveRule() {
		return navigating_matching_rules[0] || {};
	}

	// Event handlers
	function onoutroend(e) {
		console.log(e);
	}
	function onoutrostart(e) {
		console.log(e);
	}
	function onintrostart(e) {
		console.log(e);
	}
	function onintroend(e) {
		console.log(e);
	}

	function bindIntro(node, params, options) {
		console.log('bindIntro');
		console.log('Rules total:', rules.length);

		if (navigating_matching_rules.length === 0) {
			return noop.bind(node, params, options);
		} else {
			const rule = getActiveRule();
			console.log('Rule matched:', rule);

			if (rule.intro) {
				return rule.intro.function.bind(null, node, rule?.intro?.params || {}, options);
			} else {
				return (rule?.transition?.function || noop).bind(
					null,
					node,
					rule?.transition?.params || {},
					options
				);
			}
		}
	}

	function bindOutro(node, params, options) {
		console.log('bindOutro');
		console.log('Rules total:', rules.length);

		if (navigating_matching_rules.length === 0) {
			return noop.bind(node, params, options);
		} else {
			const rule = getActiveRule();
			console.log('Rule matched:', navigating_matching_rules[0]);

			if (rule.outro) {
				return (rule?.outro?.function || noop).bind(null, node, rule?.outro?.params || {}, options);
			} else {
				return (rule?.transition?.function || noop).bind(
					null,
					node,
					rule?.transition?.params || {},
					options
				);
			}
		}
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

	function getIntroParams() {
		return getActiveRule()?.intro?.params || getActiveRule()?.transition?.params || {};
	}

	function getOutroParams() {
		return getActiveRule()?.outro?.params || getActiveRule()?.transition?.params || {};
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
