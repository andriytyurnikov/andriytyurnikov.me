import { NavigationType } from '@sveltejs/kit';
import { TransitionConfig } from 'svelte/transition';

export type TransitionFunctionWithParams = {
	function: function;
	params?: object;
};

export type TransitionRule = {
	fromRouteId?: string | string[];
	toRouteId?: string | string[];
	withType?: NavigationType | NavigationType[];
	transition?: TransitionFunctionWithParams | TransitionFunctionWithParams[];
	intro?: TransitionFunctionWithParams | TransitionFunctionWithParams[];
	outro?: TransitionFunctionWithParams | TransitionFunctionWithParams[];
};

export type TransitionRules = TransitionRule[];
