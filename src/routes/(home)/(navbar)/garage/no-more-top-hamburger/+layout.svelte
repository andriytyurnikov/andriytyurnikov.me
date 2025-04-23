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
		@apply bg-black bg-center bg-cover;

		background-image:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),
			url('/images/burger-with-knife-in-it.jpg');
	}
</style>
