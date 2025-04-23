<script>
	import '../../../../../styles/home.css';

	import GlowingIce from '$lib/glowing-ice/GlowingIce.svelte';
	import { linear } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

	let { children } = $props();
</script>

<article class="h-full flex flex-col flex-1">
	<!-- <header>
		<h1 class="text-center text-[3rem] font-bold mb-4">Glowing Ice</h1>
		<p class="text-center">animated page transitions for SvelteKit</p>
	</header>

	<main class="flex flex-col flex-1 grow mx-auto w-full laptop:w-[40rem]"> -->
	<GlowingIce>
		<div class="flex flex-col flex-1 grow min-h-full h-full">
			<!-- <ul class="leading-16 grid grid-cols-2">
				<li><a href="{base}/garage/glowing-ice/by-effect">By Effect</a></li>
				<li><a href="{base}/garage/glowing-ice/by-type">By NavigationType</a></li>
			</ul> -->

			{@render children()}
		</div>
	</GlowingIce>
	<!-- </main> -->
</article>

<style>
	@reference "../../../../../styles/home.css";

	article {
		@apply bg-ice;
	}
</style>
