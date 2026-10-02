import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import tailwindcss from '@tailwindcss/vite';
import { threlteStudio } from '@threlte/studio/vite';
import { mdsvex } from 'mdsvex';

export default defineConfig(({ command }) => ({
	plugins: [
		// The Studio plugin backs the in-browser editor, which only runs in dev.
		...(command === 'serve' ? [threlteStudio()] : []),
		tailwindcss(),
		sveltekit({
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
			},
			preprocess: [mdsvex()],
			extensions: ['.svelte', '.svx']
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}));
