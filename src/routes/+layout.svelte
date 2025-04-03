<script>
	import '../styles/app.css';

	let { children } = $props();

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';

	import { linear, quadIn } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	/** @type {import('$lib/types').TransitionRules } */
	const rules = [
		{
			withType: 'enter',
			toRouteId: '/',
			transition: { function: fade, params: { duration: 250, easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/',
			intro: {
				function: fly,
				params: { duration: 450, easing: linear, y: '-100%', opacity: 1 }
			},
			outro: {
				function: fade,
				params: { delay: 0, duration: 450, easing: quadIn }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/',
			toRouteId: '/(navbar)/garage',
			outro: {
				function: fly,
				params: { duration: 450, easing: linear, y: '-100%' }
			},
			intro: {
				function: blur,
				params: { delay: 150, duration: 300, easing: quadIn, opacity: null }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(navbar)/garage',
			toRouteId: '/(unstyled)/garage/fov-map',
			transition: {
				function: blur,
				params: { duration: 450, easing: linear, amount: '16px' }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/fov-map',
			toRouteId: '/(navbar)/garage',
			transition: {
				function: blur,
				params: { duration: 450, easing: linear, amount: '16px' }
			}
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<GlowingIce {rules}>
	<div class="flex flex-col flex-1 grow min-h-full h-full align-center justify-center">
		{@render children()}
	</div>
</GlowingIce>
