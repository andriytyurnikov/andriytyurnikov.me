<script>
	let { children } = $props();
	import '../../../../../styles/home.css';
</script>

<article class="min-h-full w-full p-4 flex items-center justify-center">
	{@render children()}
</article>

<style>
	@reference "../../../../../styles/home.css";

	article {
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/balance.jpg');
		@apply bg-center bg-cover;
	}
</style>
