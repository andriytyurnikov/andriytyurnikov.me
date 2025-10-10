import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { threlteStudio } from '@threlte/studio/vite';

export default defineConfig({
	plugins: [threlteStudio(), tailwindcss(), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
