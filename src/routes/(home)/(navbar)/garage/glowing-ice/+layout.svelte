<script>
	import '../../../../../styles/home.css';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';

	let { children } = $props();
</script>

<article class="h-full flex flex-col flex-1">
	<GlowingIce>
		<div class="flex flex-col flex-1 grow min-h-full h-full">
			{@render children()}
		</div>
	</GlowingIce>
</article>

<style>
	@reference "../../../../../styles/home.css";

	article {
		@apply bg-ice;
	}
</style>
