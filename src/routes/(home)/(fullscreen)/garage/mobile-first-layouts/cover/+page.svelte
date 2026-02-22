<script>
	import { base } from '$app/paths';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title="Cover Layout"
	description="Full-screen cover layout pattern for mobile-first design."
	path="/garage/mobile-first-layouts/cover"
/>

<article class="lt-cover h-dvh w-dvw">
	<div class="p-4 lt-cover-header">optional Heading area - hard to reach on mobile</div>

	<section class="lt-cover-main max-w-[40rem]">
		<h2 class="text-[2.25rem]">Cover</h2>
		<p>
			Both axes (if needed).
			<br />
			<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
		</p>
	</section>

	<div class="p-4 lt-cover-footer">optional Footer area - easy to reach on mobile</div>
</article>

<style>
	@reference "../../../../../../styles/home.css";

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/center.jpg');
		@apply bg-center bg-cover;
	}

	p {
		@apply mb-6;
	}
</style>
