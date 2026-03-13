import { linear } from 'svelte/easing';
import { fade } from 'svelte/transition';

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
