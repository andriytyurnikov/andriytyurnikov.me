import { linear, quadIn, quintIn, quintOut } from 'svelte/easing';
import { blur, fade, fly, scale, slide } from 'svelte/transition';
import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

export default [
	{
		withType: 'enter',
		toRouteId: '/',
		transition: { function: fade, params: { duration: 250, easing: linear } }
	},
	{
		withType: 'link',
		toRouteId: '/',
		intro: {
			function: fly,
			params: { duration: 450, easing: linear, y: '-100%', opacity: 1 }
		},
		onintrostart: (e) => (e.target.style.zIndex = '100'),
		outro: {
			function: noop,
			params: { duration: 450, easing: quintIn, opacity: 1 }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/',
		toRouteId: '/(navbar)/garage',
		outro: {
			function: fly,
			params: { duration: 450, easing: linear, y: '-100%', opacity: 1 }
		},
		onoutrostart: (e) => (e.target.style.zIndex = '100'),
		intro: {
			function: noop,
			params: { duration: 450, easing: linear }
		}
		// viewTransition: {
		// 	name: 'page-change',
		// 	style: {
		// 		old: {
		// 			'transform-origin': 'left center',
		// 			'animation-name': 'fade-out',
		// 			'animation-duration': '3s',
		// 			'animation-timing-function': 'linear',
		// 			'z-index': '2'
		// 		},
		// 		new: {
		// 			'transform-origin': 'left center',
		// 			'animation-name': 'fade-in',
		// 			'animation-duration': '3s',
		// 			'animation-timing-function': 'linear',
		// 			'z-index': '1'
		// 		}
		// 	}
		// }
	},
	{
		withType: 'link',
		fromRouteId: '/(navbar)/garage',
		toRouteId: '/(unstyled)/garage/fov-map',
		transition: {
			function: blur,
			params: { duration: 450, easing: linear, amount: '16px' }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(unstyled)/garage/fov-map',
		toRouteId: '/(navbar)/garage',
		transition: {
			function: blur,
			params: { duration: 450, easing: linear, amount: '6px' }
		}
	}
];
