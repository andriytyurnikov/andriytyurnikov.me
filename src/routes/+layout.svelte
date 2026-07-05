<script>
	import { onMount } from 'svelte';
	import { initOrientationDetection } from '$lib/orientation/orientation.js';

	let { children } = $props();

	onMount(() => {
		return initOrientationDetection();
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
</svelte:head>

{@render children()}
