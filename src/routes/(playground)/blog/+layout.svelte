<script>
	import '../../../styles/default.css';

	let { children } = $props();
</script>

<main class="ui-el-center mx-auto">
	<div>
		<h1>BLOG:</h1>
		{@render children()}
	</div>
</main>

<style lang="postcss">
	@reference "../../../styles/default.css";

	:global(html, body) {
		@apply bg-eigengrau-950 text-slate-100;
	}

	@layer base {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply pb-8;
		}

		p {
			@apply mb-4;
		}
	}
</style>
