<script>
	import '../../../styles/default.css';
	let { children } = $props();
</script>

<div class="font-mono lt-cover h-dvh w-dvw text-eigengrau bg-weiss">
	<div
		class="lt-cover-main
	          w-full px-4 mx-auto
						max-w-[40rem]
						tracking-wider overflow-y-scroll border-x pt-4"
	>
		{@render children()}
	</div>
</div>

<style>
	@reference "../../../styles/default.css";

	:global(p) {
		@apply mb-6;
	}
</style>
