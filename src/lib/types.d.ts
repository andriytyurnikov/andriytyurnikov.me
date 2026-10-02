import { NavigationType } from '$app/navigation';
import { TransitionConfig } from 'svelte/transition';

export type TransitionFunction = (node: Element, params?: object) => TransitionConfig;

export type TransitionFunctionWithParams = {
	function: TransitionFunction;
	params?: object;
};

export type TransitionRule = {
	fromRouteId?: string | string[];
	toRouteId?: string | string[];
	withType?: NavigationType | NavigationType[];
	transition?: TransitionFunctionWithParams;
	intro?: TransitionFunctionWithParams;
	outro?: TransitionFunctionWithParams;
	onintrostart?: (e: Event) => void;
	onintroend?: (e: Event) => void;
	onoutrostart?: (e: Event) => void;
	onoutroend?: (e: Event) => void;
};

export type TransitionRules = TransitionRule[];
