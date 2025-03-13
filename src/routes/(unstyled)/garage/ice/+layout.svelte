<script>
	import '../../../../styles/unstyled.css';

	import { base } from '$app/paths';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	let { children } = $props();

	/** @type {import('$lib/types').TransitionRules } */
	const rules = [
		{
			withType: 'enter',
			toRouteId: '/(unstyled)/garage/ice/by-type/enter',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'form',
			toRouteId: '/(unstyled)/garage/ice/by-type/form',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'goto',
			toRouteId: '/(unstyled)/garage/ice/by-type/goto',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'leave',
			toRouteId: '/(unstyled)/garage/ice/by-type/leave',
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
			withType: 'popstate',
			toRouteId: '/(unstyled)/garage/ice/by-type/popstate',
			transition: { function: blur, params: { duration: 150, amount: '64px', easing: linear } }
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/blur',
			transition: {
				function: blur,
				params: { duration: 450, amount: '32px', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/fade',
			transition: {
				function: fade,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/fly',
			transition: {
				function: fly,
				params: { duration: 450, x: '100%', y: '-50%', easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/slide',
			transition: {
				function: slide,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/scale',
			transition: {
				function: scale,
				params: { duration: 450, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/contrast',
			transition: {
				function: filterContrast,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/invert',
			transition: {
				function: filterInvert,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			toRouteId: '/(unstyled)/garage/ice/by-effect/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
			}
		},
		{
			withType: 'link',
			fromRouteId: '/(unstyled)/garage/ice/by-effect/hue-rotate',
			transition: {
				function: filterHueRotate,
				params: { duration: 1000, easing: linear }
			}
		}
	];
</script>

<article class="h-dvh p-4 bg-blue-200 flex flex-col flex-1">
	<header>
		<h1 class="text-center text-4xl font-bold mb-4">
			Glowing Ice <br />
			animated transitions
		</h1>
	</header>

	<main class="flex flex-col flex-1 grow">
		<GlowingIce {rules}>
			<div class="flex flex-col flex-1 grow min-h-full h-full">
				<ul class="leading-16 grid grid-cols-2">
					<li><a href="{base}/garage/ice/by-effect">By Effect</a></li>
					<!-- <li><a href="{base}/garage/ice/by-type">By NavigationType</a></li> -->
				</ul>

				{@render children()}
			</div>
		</GlowingIce>
	</main>
</article>

<style>
	:global(section) {
		padding: 1rem;
	}
</style>
