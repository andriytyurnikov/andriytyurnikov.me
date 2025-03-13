<script>
	import '../../../../styles/unstyled.css';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	let { children } = $props();

	/** @type {import('$lib/types').TransitionRules } */
	const rules = [
		{
			withType: 'popstate',
			toRouteId: '/(unstyled)/garage/ice/by-type/popstate',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'enter',
			toRouteId: '/(unstyled)/garage/ice/by-type/enter',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-type/link',
			transition: {
				function: blur,
				params: { duration: 1500, amount: '64px', easing: linear }
			}
		},
		{
			withType: 'goto',
			toRouteId: '/(unstyled)/garage/ice/by-type/goto',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'form',
			toRouteId: '/(unstyled)/garage/ice/by-type/form',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'leave',
			toRouteId: '/(unstyled)/garage/ice/by-type/leave',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		}
	];
</script>

<header>
	<h1>Glowing Ice - animated transitions</h1>
</header>

<main>
	<GlowingIce {rules}>
		{@render children()}
	</GlowingIce>
</main>
