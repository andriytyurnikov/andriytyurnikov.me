<script>
	import { base } from '$app/paths';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title="Long Side Thirds"
	description="Content layout divided into vertical thirds."
	path="/garage/mobile-first-layouts/long-side-thirds"
/>

<article class="flex flex-col justify-stretch items-center h-full w-full">
	<div class="p-4 justify-self-start place-self-start">
		optional Heading area - hard to reach on mobile
	</div>

	<section class="my-auto max-w-[40rem] mx-auto">
		<h2 class="text-[2.25rem]">Centered Composition</h2>
		<p>
			Both axes (if needed).
			<br />
			<a href="{base}/garage/mobile-first-layouts" rel="me">back to layouts</a>
		</p>
	</section>

	<div class="p-4 justify-self-end place-self-end text-right">
		optional Footer area - easy to reach on mobile
	</div>
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
