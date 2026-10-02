<script>
	import { Canvas } from '@threlte/core';
	import { dev } from '$app/env';

	import Scene from './Scene.svelte';

	// @threlte/studio's <Studio> has no `enabled` prop, so passing one does not
	// keep the editor out of production - it has to not be rendered at all.
	// `dev` is replaced at build time, so the dynamic import below is dead code
	// eliminated and Studio is never loaded in production.
	//
	// The import lives here rather than in an {#await} block: mounting <Studio>
	// inside {#await} throws effect_update_depth_exceeded.
	let Studio = $state();
	if (dev) import('@threlte/studio').then((m) => (Studio = m.Studio));
</script>

<Canvas>
	{#if dev}
		{#if Studio}
			<Studio>
				<Scene />
			</Studio>
		{/if}
	{:else}
		<Scene />
	{/if}
</Canvas>

<style>
	@reference "../../../styles/default.css";

	:global(body) {
		@apply bg-[#16161d];
	}
</style>
