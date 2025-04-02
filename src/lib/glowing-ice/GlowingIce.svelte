<script>
	// import { browser, dev, building, version } from '$app/environment';
	import { page } from '$app/state';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	import { noop } from './transition.js';

	let { children, rules } = $props();

	// Reactive state
	let loaded = $state(false);
	let navigating_matching_rules = $state([]);
	let before_navigate_fired = $state(false);
	let after_navigate_fired = $state(false);

	// Derived state
	// const reactive_transition = $derived(
	// 	before_navigate_fired || after_navigate_fired ? bindTransition : bindTransition
	// );
	const reactiveIntro = $derived(
		before_navigate_fired || after_navigate_fired ? bindIntro : bindIntro
	);

	const reactiveOutro = $derived(
		before_navigate_fired || after_navigate_fired ? bindOutro : bindOutro
	);

	// Effects
	$effect(() => {
		loaded = true;
	});

	// Navigation handlers
	beforeNavigate((navigation) => {
		console.log('beforeNavigate', navigation);

		navigating_matching_rules = rules
			.filter((rule) => rule != undefined && rule != null)
			.filter((rule) => !Object.hasOwn(rule, 'withType') || rule?.withType === navigation.type)
			.filter(
				(rule) =>
					!Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId === navigation.from?.route?.id
			)
			.filter(
				(rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId === navigation.to?.route?.id
			);

		after_navigate_fired = false;
		before_navigate_fired = true;
	});

	afterNavigate((navigation) => {
		console.log('afterNavigate', navigation);

		navigating_matching_rules = rules
			.filter((rule) => rule != undefined && rule != null)
			.filter((rule) => !Object.hasOwn(rule, 'withType') || rule?.withType === navigation.type)
			.filter(
				(rule) =>
					!Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId === navigation.from?.route?.id
			)
			.filter(
				(rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId === navigation.to?.route?.id
			);

		after_navigate_fired = true;
		before_navigate_fired = false;
	});

	// Event handlers
	function handleOutroStart(e) {
		console.log(e);
	}
	function handleOutroEnd(e) {
		console.log(e);
	}
	function handleIntroStart(e) {
		console.log(e);
	}
	function handleIntroEnd(e) {
		console.log(e);
	}

	// Transition logic
	// function bindTransition(node, params, options) {
	// 	console.log('bindTransition');
	// 	console.log('Rules total:', rules.length);

	// 	if (navigating_matching_rules.length === 0) {
	// 		return noop.bind(node, params, options);
	// 	} else {
	// 		console.log('Rule matched:', navigating_matching_rules[0]);
	// 		const rule = navigating_matching_rules[0];
	// 		return rule.transition.function.bind(null, node, rule.transition.params, options);
	// 	}
	// }

	function bindIntro(node, params, options) {
		console.log('bindIntro');
		console.log('Rules total:', rules.length);

		if (navigating_matching_rules.length === 0) {
			return noop.bind(node, params, options);
		} else {
			console.log('Rule matched:', navigating_matching_rules[0]);
			const rule = navigating_matching_rules[0];

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
			console.log('Rule matched:', navigating_matching_rules[0]);
			const rule = navigating_matching_rules[0];

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

	function getInParams() {
		const params =
			before_navigate_fired || after_navigate_fired ? navigating_matching_rules[0]?.params : {};
		return params;
	}

	function getOutParams() {
		const params =
			before_navigate_fired || after_navigate_fired ? navigating_matching_rules[0]?.params : {};
		return params;
	}
</script>

<!-- glowing-ice -->
<div style="position:relative; min-width: 100%; min-height: 100%;">
	{#key page.url}
		{#if loaded && (before_navigate_fired || after_navigate_fired)}
			<div
				style="position: absolute; top: 0px; left: 0px; min-width: 100%; min-height: 100%; display: flex; flex-direction: column;"
				out:reactiveOutro|global={getOutParams()}
				in:reactiveIntro|global={getInParams()}
				on:introstart={handleIntroStart}
				on:introend={handleIntroEnd}
				on:outrostart={handleOutroStart}
				on:outroend={handleOutroEnd}
			>
				{@render children()}
			</div>
		{/if}
	{/key}
</div>
