<script>
	import '../../../../../styles/home.css';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	let { children } = $props();

	/** @type {import('$lib/types').TransitionRules } */
	const rules = [
		{
			withType: 'enter',
			toRouteId: '/(default)/garage/glowing-ice/by-type/enter',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'form',
			toRouteId: '/(default)/garage/glowing-ice/by-type/form',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'goto',
			toRouteId: '/(default)/garage/glowing-ice/by-type/goto',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'leave',
			toRouteId: '/(default)/garage/glowing-ice/by-type/leave',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/by-type/link',
			transition: {
				function: blur,
				params: { duration: 1500, amount: '64px', easing: linear }
			}
		},
		{
			withType: 'popstate',
			toRouteId: '/(default)/garage/glowing-ice/by-type/popstate',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(default)/garage/glowing-ice/effects/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(default)/garage/glowing-ice/effects/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
			}
		}
	];
</script>

<article class="h-dvh flex flex-col flex-1">
	<!-- <header>
		<h1 class="text-center text-[3rem] font-bold mb-4">Glowing Ice</h1>
		<p class="text-center">animated page transitions for SvelteKit</p>
	</header>

	<main class="flex flex-col flex-1 grow mx-auto w-full laptop:w-[40rem]"> -->
	<GlowingIce {rules}>
		<div class="flex flex-col flex-1 grow min-h-full h-full">
			<!-- <ul class="leading-16 grid grid-cols-2">
				<li><a href="{base}/garage/glowing-ice/by-effect">By Effect</a></li>
				<li><a href="{base}/garage/glowing-ice/by-type">By NavigationType</a></li>
			</ul> -->

			{@render children()}
		</div>
	</GlowingIce>
	<!-- </main> -->
</article>

<style>
	@reference "../../../../../styles/home.css";

	article {
		@apply bg-ice;
	}
</style>
