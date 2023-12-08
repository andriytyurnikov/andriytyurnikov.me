import { env } from '$env/dynamic/public';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { page } from '$app/stores';

inject({ mode: dev ? 'development' : 'production' });

// let analyticsId = env.VERCEL_ANALYTICS_ID;

// $: if (browser && analyticsId) {
//   webVitals({
//     path: $page.url.pathname,
//     params: $page.params,
//     analyticsId
//   })
// }