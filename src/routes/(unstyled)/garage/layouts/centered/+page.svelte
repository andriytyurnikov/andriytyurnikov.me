<script>
	import { base } from '$app/paths';
</script>

<article class="p-4 ui-el-cover">
	<div>optional Heading area - hard to reach on mobile</div>
	<section class="ui-el-cover-hero">
		<div class="ui-el-center">
			<h2 class="text-[2.25rem]">Centered Composition</h2>
			<p>
				Both axies (if needed).
				<br />
				<a href="{base}/garage/layouts" rel="me">back to layouts</a>
			</p>
		</div>
	</section>
	<div>optional Footer area - easy to reach on mobile</div>
</article>

<style>
	@reference "../../../../../styles/unstyled.css";

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
