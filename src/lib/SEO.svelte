<script>
	const BASE_URL = 'https://andriytyurnikov.me';

	let { title = '', description = '', path = '' } = $props();

	const fullTitle = $derived(
		title ? `${title} | Andriy Tyurnikov` : 'Andriy Tyurnikov — Web Developer'
	);
	const canonicalUrl = $derived(`${BASE_URL}${path}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{BASE_URL}/images/og.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
