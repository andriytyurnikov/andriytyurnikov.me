/*
 * PAGE METADATA
 * =============
 *
 * One entry per route id, resolved in the root +layout.svelte.
 *
 * Keeping every title and description here — rather than in a <svelte:head>
 * per page — means the document head is rendered exactly once, so there is no
 * risk of two layouts emitting a competing <title> or duplicate og: tags.
 */

export const SITE_URL = 'https://andriytyurnikov.me';
export const SITE_NAME = 'Andriy Tyurnikov';
export const OG_IMAGE = '/images/og.png';

/** Used for any route without its own entry below. */
export const DEFAULT_METADATA = {
	title: 'Andriy Tyurnikov — Web Developer',
	description:
		'Web developer in Kyiv, Ukraine. Experiments in typography, interfaces and ergonomic layouts for the web.'
};

/** @type {Record<string, { title: string, description: string }>} */
export const METADATA = {
	'/(home)': {
		title: 'Andriy Tyurnikov — Web Developer in Kyiv, Ukraine',
		description:
			'Web developer in Kyiv, Ukraine. Generalist and tweaker interested in typography, interfaces and systems.'
	},
	'/(home)/(navbar)/about': {
		title: 'About — Andriy Tyurnikov',
		description:
			'Web enthusiast, generalist, tweaker. Interested in the web, typography, interfaces and systems.'
	},
	'/(home)/(navbar)/friends': {
		title: 'Friends in Craft — Andriy Tyurnikov',
		description:
			'Developers and designers I work alongside, across radial UIs, AR/VR, Web3 and Ruby on Rails.'
	},
	'/(home)/(navbar)/garage': {
		title: 'Garage — Andriy Tyurnikov',
		description:
			'Work with the garage door up: experiments in field-of-view mapping, ergonomic typography, mobile-first layouts and page transitions.'
	},
	'/(home)/(navbar)/garage/ergonomic-typography': {
		title: 'Ergonomic Typography — Andriy Tyurnikov',
		description:
			'Sizing type by the angle it subtends at the eye rather than by pixels, so text stays comfortable at any viewing distance.'
	},
	'/(home)/(navbar)/garage/glowing-ice': {
		title: 'Glowing Ice — Animated Page Transitions for SvelteKit',
		description:
			'A rule-driven page transition layer for SvelteKit: per-route rules, nested layouts, Svelte transitions and prefers-reduced-motion support.'
	},
	'/(home)/(navbar)/garage/mobile-first-layouts': {
		title: 'Mobile-first Layouts — Andriy Tyurnikov',
		description:
			'Responsive layouts that start from hard constraints: distinct device categories and the limits of finger reach.'
	},
	'/(home)/(navbar)/garage/no-more-top-hamburger': {
		title: 'No More Top Hamburger — Andriy Tyurnikov',
		description:
			'The hamburger menu at the top of a mobile screen is bad design. A bottom navigation bar is easier to reach and immediately visible.'
	},
	'/(home)/(fullscreen)/garage/fov-map': {
		title: 'Field of View Map — Andriy Tyurnikov',
		description: 'Zoning and composition through a map of visual acuity across the field of view.'
	},
	'/(home)/(fullscreen)/ergonomic-web': {
		title: 'The Ergonomic Web — Andriy Tyurnikov',
		description:
			'Designing for the eye and the hand: field of view, device form factors, typography and thumb reach.'
	},
	'/(home)/(fullscreen)/garage/mobile-first-layouts/cover': {
		title: 'Cover Layout — Mobile-first Layouts',
		description: 'A full-viewport cover layout, mostly for landing pages.'
	},
	'/(home)/(fullscreen)/garage/mobile-first-layouts/long-side-thirds': {
		title: 'Long-side Thirds — Mobile-first Layouts',
		description: 'Splitting the long side of the viewport into thirds.'
	},
	'/(home)/(fullscreen)/garage/mobile-first-layouts/portrait-feed': {
		title: 'Portrait Feed — Mobile-first Layouts',
		description: 'A portrait-oriented feed layout, often image or video driven.'
	},
	'/(home)/(fullscreen)/garage/mobile-first-layouts/responsive-navbar': {
		title: 'Responsive NavBar — Mobile-first Layouts',
		description: 'A navigation bar that moves to the bottom of the screen within thumb reach.'
	},
	'/(playground)/3d': {
		title: '3D Point of View — Playground',
		description:
			'A Threlte scene whose camera field of view is matched to the angular size of the physical display.'
	},
	'/(playground)/canon': {
		title: 'Typographic Canon — Playground',
		description: 'A reference page exercising every element the typographic scale has to handle.'
	},
	'/(playground)/colors': {
		title: 'Colour Scales — Playground',
		description: 'Perceptual colour scales: eigengrau, inferno, magma, plasma and viridis.'
	},
	'/(playground)/display-horizon': {
		title: 'Display Horizon — Playground',
		description: 'Where screens sit within the field of view.'
	},
	'/(playground)/fontscale.me': {
		title: 'Font Scale — Playground',
		description: 'A modular type scale explored at reading size.'
	},
	'/(playground)/vt': {
		title: 'View Transitions — Playground',
		description: 'Experiments with the browser View Transitions API.'
	},
	'/(playground)/vt/container-transform': {
		title: 'Container Transform — View Transitions',
		description: 'A container transform built on the View Transitions API.'
	},
	'/(playground)/vt/fade-through': {
		title: 'Fade Through — View Transitions',
		description: 'A fade-through transition built on the View Transitions API.'
	},
	'/(playground)/zoned-layouts': {
		title: 'Zoned Layouts — Playground',
		description: 'Layouts divided into zones by how easily each part of the screen is reached.'
	}
};

/**
 * Resolve the metadata for a route id, falling back to the site defaults.
 * @param {string | null | undefined} routeId
 */
export function metadataFor(routeId) {
	return (routeId && METADATA[routeId]) || DEFAULT_METADATA;
}
