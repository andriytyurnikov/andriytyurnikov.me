import { TransitionConfig } from "svelte/transition"

export type TransitionWithParams = {
  function: function,
  params? : object
}

export type TransitionRule = {
  fromRouteId? : string | string[],
  toRouteId?   : string | string[],
  withType?    : NavigationType | NavigationType[],
  transition?  : TransitionWithParams | TransitionWithParams[],
  in?          : TransitionWithParams | TransitionWithParams[],
  out?         : TransitionWithParams | TransitionWithParams[],
}

export type TransitionRules = TransitionRule[]