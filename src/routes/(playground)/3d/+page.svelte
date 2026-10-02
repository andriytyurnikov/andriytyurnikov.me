<script>
	import { Canvas } from '@threlte/core';
	import { dev } from '$app/env';
	import { page } from '$app/state';

	import Scene from './Scene.svelte';

	// Threlte Studio is opt-in: open /3d?studio in dev. Its editor takes over the
	// camera and clicks, and it saves edits back into the .svelte source - just
	// selecting the moving ball once replaced `ballZ` in its position with a number.
	//
	// @threlte/studio's <Studio> has no `enabled` prop, so passing one does not
	// keep the editor out of production - it has to not be rendered at all.
	// `dev` is replaced at build time, so the dynamic import below is dead code
	// eliminated and Studio is never loaded in production.
	//
	// The import lives here rather than in an {#await} block: mounting <Studio>
	// inside {#await} throws effect_update_depth_exceeded.
	const studio = dev && page.url.searchParams.has('studio');
	let Studio = $state();
	if (studio) import('@threlte/studio').then((m) => (Studio = m.Studio));
</script>

<Canvas>
	{#if studio}
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
