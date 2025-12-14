<script>
	import { onMount } from 'svelte';
	import { initOrientationDetection } from '$lib/orientation/orientation.js';

	let { children } = $props();

	onMount(() => {
		return initOrientationDetection();
	});
</script>

{@render children()}
