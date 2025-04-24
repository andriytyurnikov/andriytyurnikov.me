import { linear, quadIn, quintIn, quintOut } from 'svelte/easing';
import { blur, fade, fly, scale, slide } from 'svelte/transition';
import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

export default [
	{
		withType: 'link',
		toRouteId: '/(home)/(navbar)/friends',
		intro: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/friends',
		toRouteId: '/(home)/(navbar)/garage',
		intro: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		toRouteId: '/(home)/(navbar)/about',
		intro: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		toRouteId: '/(home)/(navbar)/garage/viewport-typography',
		intro: {
			function: fade,
			params: { duration: 250, easing: linear }
		},
		outro: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	},
	{
		withType: 'link',
		toRouteId: '/(home)/(navbar)/garage/glowing-ice',
		intro: { function: fade, params: { duration: 250 } }
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage/glowing-ice',
		intro: { function: fade, params: { duration: 250 } }
	},
	{
		withType: 'link',
		transition: {
			function: fade,
			params: { duration: 250, easing: linear }
		}
	}
];
