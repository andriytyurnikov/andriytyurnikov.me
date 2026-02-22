<script>
	import { base } from '$app/paths';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title="Portrait Feed"
	description="Vertical scrolling feed layout optimized for portrait orientation."
	path="/garage/mobile-first-layouts/portrait-feed"
/>

<article
	class="lt-portrait-feed
	      min-h-dvh
				min-w-dvw"
>
	<nav
		class="lt-portrait-feed-nav

					bg-stone-600/75"
	>
		Navigation Slot (Sidebar in landscape orientation)
	</nav>
	<main
		class="lt-portrait-feed-main
					bg-stone-800/75"
	>
		<div class="flex flex-col h-full w-full justify-center items-center">
			<p>
				Main zone:
				<br />
				Content (images ans videos) section
				<br />
				<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
			</p>
		</div>
	</main>
	<aside
		class="lt-portrait-feed-aside

					bg-stone-400/75"
	>
		Optional Secondary zone
	</aside>
</article>

<style>
	@reference "../../../../../../styles/home.css";

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/balance.jpg');
		@apply bg-center bg-cover;
	}

	p {
		@apply mb-6;
	}
</style>
