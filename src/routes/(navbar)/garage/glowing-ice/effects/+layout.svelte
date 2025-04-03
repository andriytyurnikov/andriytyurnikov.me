<script>
	let { children } = $props();
</script>

<div class="flex grow flex-1 flex-col bg-cyan-200/50 p-4">
	{@render children()}
</div>
