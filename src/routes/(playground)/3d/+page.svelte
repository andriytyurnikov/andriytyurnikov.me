<script>
	import '../../../styles/default.css';

	import { Canvas } from '@threlte/core';
	import { Studio } from '@threlte/studio';

	import Scene from './Scene.svelte';

	import { dev } from '$app/environment';

	let gazeAngle = $state(0);
</script>

<Canvas>
	<Studio enabled={dev}>
		<Scene bind:gazeAngle />
	</Studio>
</Canvas>

{#if dev}
	<div class="controls">
		<label>
			Gaze Angle: {gazeAngle}°
			<input type="range" min="-90" max="90" step="1" bind:value={gazeAngle} />
		</label>
	</div>
{/if}

<style>
	@reference "../../../styles/default.css";

	:global(body) {
		@apply bg-[#16161d];
	}

	.controls {
		position: fixed;
		bottom: 20px;
		left: 20px;
		background: rgba(0, 0, 0, 0.7);
		padding: 12px 16px;
		border-radius: 8px;
		color: white;
		font-family: monospace;
		font-size: 14px;
		z-index: 100;
	}

	.controls label {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.controls input[type='range'] {
		width: 200px;
	}
</style>
