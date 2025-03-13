<script>
	let { children } = $props();
</script>

<div class="flex grow flex-1 flex-col bg-blue-300 p-4">
	<h1 class="mb-4">Animation by Effect</h1>
	{@render children()}
</div>
