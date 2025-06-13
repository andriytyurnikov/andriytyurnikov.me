<script>
	import '../../../styles/default.css';
	let { children } = $props();
</script>

<div class="font-mono lt-cover h-dvh w-dvw text-cold-gray-100 bg-cold-gray-700">
	<div
		class="lt-cover-main
	          w-full px-4 mx-auto
						max-w-[40rem]
						tracking-wider overflow-y-scroll pt-4"
	>
		{@render children()}
	</div>
</div>

<style>
	@reference "../../../styles/default.css";

	:global(p) {
		@apply mb-6;
	}

	:global(input, button, select) {
		@apply px-2 h-7 inline-block align-middle leading-6 outline-none
		focus:ring-1
		focus:ring-cold-gray-100
		focus:ring-offset-2
		focus:ring-offset-cold-gray-800;
	}
	:global(input[type='checkbox'], input[type='radio']) {
		@apply align-middle;
	}
</style>
