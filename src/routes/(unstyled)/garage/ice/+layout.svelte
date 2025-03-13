<script>
	import '../../../../styles/unstyled.css';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { noop, transpect } from '$lib/glowing-ice/transition';

	import { browser, dev, building, version } from '$app/environment';
	import { page, navigating } from '$app/stores';

	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		invalidateAll,
		onNavigate,
		preloadCode,
		preloadData
	} from '$app/navigation';

	import { blur, fade } from 'svelte/transition';
	import { filterContrast, filterInvert, filterHueRotate } from '$lib/glowing-ice/transition';
	import { linear, backIn, circInOut, cubicIn, cubicOut } from 'svelte/easing';

	/** @type { App.PageData } */
	let { children, data } = $props();

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
			transition: { function: blur, params: { duration: 1500, amount: '64px', easing: linear } }
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
	<GlowingIce {data} {rules}>
		{@render children()}
	</GlowingIce>
</main>
