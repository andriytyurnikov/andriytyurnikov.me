<script>
	let { children } = $props();

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear, quadIn } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	/** @type {import('$lib/types').TransitionRules } */
	const rules = [
		{
			withType: 'enter',
			toRouteId: '/',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/',
			intro: {
				function: slide,
				params: { duration: 250, easing: linear, axis: 'y' }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/',
			toRouteId: '/garage',
			outro: {
				function: fly,
				params: { duration: 450, easing: linear, y: '-100%' }
			},
			intro: { function: blur, params: { duration: 450, easing: quadIn } }
		},
		{
			withType: 'link',
			fromRouteId: '/garage',
			toRouteId: '/(unstyled)/garage/fov-map',
			transition: { function: fade, params: { duration: 250, easing: linear } }
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/fov-map',
			toRouteId: '/garage',
			transition: { function: fade, params: { duration: 1250, easing: linear } }
		},

		{
			withType: 'link',
			toRouteId: '/garage/no-more-top-hamburger',
			transition: { function: filterHueRotate, params: { duration: 1000, easing: linear } }
		},
		{
			withType: 'link',
			fromRouteId: '/garage/no-more-top-hamburger',
			toRouteId: '/garage',
			transition: { function: filterHueRotate, params: { duration: 1000, easing: linear } }
		},

		{
			withType: 'enter',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/enter',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'form',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/form',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'goto',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/goto',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'leave',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/leave',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/link',
			transition: {
				function: blur,
				params: { duration: 1500, amount: '64px', easing: linear }
			}
		},
		{
			withType: 'popstate',
			toRouteId: '/(unstyled)/garage/glowing-ice/by-type/popstate',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/glowing-ice/effects/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/glowing-ice/effects/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
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
