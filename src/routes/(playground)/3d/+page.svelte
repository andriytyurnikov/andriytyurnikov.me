<script>
	import { Canvas } from '@threlte/core';
	import { dev } from '$app/environment';

	import Scene from './Scene.svelte';

	// @threlte/studio's <Studio> has no `enabled` prop, so passing one does not
	// keep the editor out of production - it has to not be rendered at all.
	// `dev` is replaced at build time, so the dynamic import below is dead code
	// eliminated and Studio never reaches the production bundle.
</script>

<Canvas>
	{#if dev}
		{#await import('@threlte/studio') then { Studio }}
			<Studio>
				<Scene />
			</Studio>
		{/await}
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
