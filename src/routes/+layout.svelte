<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { initOrientationDetection } from '$lib/orientation/orientation.js';
	import { metadataFor, OG_IMAGE, SITE_NAME, SITE_URL } from '$lib/seo/metadata.js';

	let { children } = $props();

	const meta = $derived(metadataFor(page.route.id));
	const canonical = $derived(new URL(page.url.pathname, SITE_URL).href);
	const ogImage = $derived(new URL(OG_IMAGE, SITE_URL).href);

	onMount(() => {
		return initOrientationDetection();
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Andriy Tyurnikov — Web Developer" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@AndriyTyurnikov" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

{@render children()}
