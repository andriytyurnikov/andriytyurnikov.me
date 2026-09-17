import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs24.x'
		}),
		prerender: {
			// The playground routes are static but unlinked, so the crawler never
			// reaches them. Listing them here keeps them prerendered rather than
			// served by a serverless function on every request.
			entries: [
				'*',
				'/3d',
				'/canon',
				'/colors',
				'/display-horizon',
				'/vt',
				'/vt/container-transform',
				'/vt/fade-through',
				'/zoned-layouts'
			]
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
