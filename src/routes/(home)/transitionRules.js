import { linear, quadIn, quintIn, quintOut } from 'svelte/easing';
import { blur, fade, fly, scale, slide } from 'svelte/transition';
import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

export default [
	{
		withType: 'enter',
		toRouteId: '/(home)',
		transition: { function: fade, params: { duration: 250, easing: linear } }
	},
	{
		withType: 'link',
		toRouteId: '/(home)',
		intro: {
			function: fly,
			params: { duration: 450, easing: linear, y: '-100%', opacity: 1 }
		},
		onintrostart: (e) => (e.target.style.zIndex = '100'),
		outro: {
			function: fade,
			params: { duration: 450, easing: linear, opacity: 1 }
		},
		onoutrostart: (e) => (e.target.style.zIndex = '10')
	},
	{
		withType: 'link',
		fromRouteId: '/(home)',
		toRouteId: '/(home)/(navbar)/garage',
		outro: {
			function: fly,
			params: { duration: 450, easing: linear, y: '-100%', opacity: 1 }
		},
		onoutrostart: (e) => (e.target.style.zIndex = '100'),
		intro: {
			function: fade,
			params: { duration: 450, easing: linear }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage',
		toRouteId: '/(home)/(fullscreen)/garage/fov-map',
		transition: {
			function: blur,
			params: { duration: 450, easing: linear, amount: '16px' }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(fullscreen)/garage/fov-map',
		toRouteId: '/(home)/(navbar)/garage',
		transition: {
			function: blur,
			params: { duration: 450, easing: linear, amount: '16px' }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage',
		toRouteId: '/(home)/(navbar)/garage/mobile-first-layouts',
		transition: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage/mobile-first-layouts',
		toRouteId: '/(home)/(navbar)/garage',
		transition: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage',
		toRouteId: '/(home)/(navbar)/garage/no-more-top-hamburger',
		transition: { function: fade, params: { duration: 250, easing: linear } }
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage/no-more-top-hamburger',
		toRouteId: '/(home)/(navbar)/garage',
		transition: { function: fade, params: { duration: 250, easing: linear } }
	}
];
