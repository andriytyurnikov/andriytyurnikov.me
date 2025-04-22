<script>
	let { children } = $props();
	import '../../../../../styles/home.css';
</script>

<div class="h-dvh w-dvw flex flex-col items-center justify-center">
	{@render children()}
</div>
