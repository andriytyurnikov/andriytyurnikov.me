<script>
	import '../styles/app.css';

	let { children } = $props();

	import transitionRules from './transitionRules';
	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';

	import { linear, quadIn, quintIn, quintOut } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import {
		translate,
		noop,
		filterHueRotate,
		filterInvert,
		filterContrast
	} from '$lib/glowing-ice/transition';
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

<GlowingIce rules={transitionRules}>
	<!-- <div class="flex flex-col flex-1 grow min-h-full h-full align-center justify-center"> -->
	{@render children()}
	<!-- </div> -->
</GlowingIce>
