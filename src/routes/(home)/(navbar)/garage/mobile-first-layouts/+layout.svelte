<script>
	let { children } = $props();
	import '../../../../../styles/default.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{@render children()}
