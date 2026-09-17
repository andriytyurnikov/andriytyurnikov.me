<script>
	let { children } = $props();
</script>

<article class="bg-burger min-h-full w-full p-4 flex items-center justify-center">
	{@render children()}
</article>
