<script>
	import { base } from '$app/paths';
</script>

<article class="p-4 ui-el-cover">
	<div>optional Heading area - hard to reach on mobile</div>

	<section class="ui-el-cover-hero max-w-[40rem] mx-auto">
		<h2 class="text-[2.25rem]">Centered Composition</h2>
		<p>
			Both axes (if needed).
			<br />
			<a href="{base}/mobile-layouts" rel="me">back to layouts</a>
		</p>
	</section>

	<div class="text-right">optional Footer area - easy to reach on mobile</div>
</article>

<style>
	@reference "../../../../styles/default.css";

	:global(html) {
		background-color: theme(--color-black);
	}

	:global(body) {
		color: theme(--color-white);
	}

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/center.jpg');
		@apply bg-center bg-cover;
	}

	p {
		@apply mb-6;
	}
</style>
