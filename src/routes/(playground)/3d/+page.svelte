<script>
	import '../../../styles/default.css';

	import { Canvas } from '@threlte/core';
	import { Studio } from '@threlte/studio';

	import Scene from './Scene.svelte';

	import { dev } from '$app/environment';
</script>

<Canvas>
	<Studio enabled={dev}>
		<Scene />
	</Studio>
</Canvas>

<style>
	@reference "../../../styles/default.css";

	:global(body) {
		@apply bg-black;
	}
</style>
