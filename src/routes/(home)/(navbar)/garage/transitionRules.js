import { linear, quadIn, quintIn, quintOut } from 'svelte/easing';
import { blur, fade, fly, scale, slide } from 'svelte/transition';
import { noop, filterHueRotate, filterInvert, filterContrast } from '$lib/glowing-ice/transition';

export default [
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage',
		toRouteId: '/(home)/(navbar)/garage/friends',
		intro: {
			function: fade,
			params: { duration: 450, easing: linear }
		}
	},
	{
		withType: 'link',
		fromRouteId: '/(home)/(navbar)/garage/friends',
		toRouteId: '/(home)/(navbar)/garage',
		intro: {
			function: fade,
			params: { duration: 450, easing: linear }
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
	}
];
