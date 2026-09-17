import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { threlteStudio } from '@threlte/studio/vite';

export default defineConfig(({ command }) => ({
	// The Studio plugin backs the in-browser editor, which only runs in dev.
	plugins: [...(command === 'serve' ? [threlteStudio()] : []), tailwindcss(), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}));
