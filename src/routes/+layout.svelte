<script>
	import '../styles/app.css';

	let { children } = $props();

	import transitionRules from './transitionRules';
	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
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
	{@render children()}
</GlowingIce>
