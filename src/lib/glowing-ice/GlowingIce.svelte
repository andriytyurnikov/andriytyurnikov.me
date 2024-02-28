<script>
  import { browser, dev, building, version } from '$app/environment';
  import { page, navigating } from '$app/stores';

  import {
    afterNavigate,
    beforeNavigate,
    disableScrollHandling,
    goto,
    invalidate,
    invalidateAll,
    onNavigate,
    preloadCode,
    preloadData
  } from '$app/navigation';

  import { onMount } from 'svelte';
  import { readonly, writable, derived } from 'svelte/store';

  import { flip } from 'svelte/animate';
  import { linear } from 'svelte/easing';
  import { blur } from 'svelte/transition';
  import { noop, transpect } from './transition.js';
	import { Result } from 'postcss';

  /** @type { App.PageData } */
  export let data;

  /** @type {import('$lib/types').TransitionRules } */
  export let rules = [];
  let navigating_matching_rules = [];

  let loaded = false;

  const before_navigate_fired = writable(false);
  const after_navigate_fired = writable(false);

  onMount(() => {
		loaded = true
	})

  beforeNavigate((navigation) => {
    console.log("beforeNavigate")
    console.log(navigation)

    navigating_matching_rules = 
      rules
        .filter( (rule) => rule != undefined )
        .filter( (rule) => rule != null )
        .filter( (rule) => !Object.hasOwn(rule, 'withType') || rule?.withType == navigation.type)
        .filter( (rule) => !Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId == navigation.from?.route?.id )
        .filter( (rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId == navigation.to?.route?.id )
      ;
    
    after_navigate_fired.set(false);
    before_navigate_fired.set(true);
  })

  afterNavigate((navigation) => {
    console.log("afterNavigate")
    console.log(navigation)
    
    navigating_matching_rules = 
      rules
        .filter( (rule) => rule != undefined )
        .filter( (rule) => rule != null )
        .filter( (rule) => !Object.hasOwn(rule, 'withType') || rule?.withType == navigation.type)
        .filter( (rule) => !Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId == navigation.from?.route?.id )
        .filter( (rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId == navigation.to?.route?.id )
      ;
    
    after_navigate_fired.set(true)
    before_navigate_fired.set(false)
  })

  function handleOutroStart(e)  { console.log(e) }
  function handleOutroEnd(e)    { console.log(e) }

  function handleIntroStart(e)  { console.log(e) }
  function handleIntroEnd(e)    { console.log(e) }

  /**
   * @param {Element} node
   * @param {object} params
   */
  function outro_proxy(node, params, options) {     
    return transition_proxy(node, params, options)
  }

  /**
   * @param {Element} node
   * @param {object} params
   */
  function intro_proxy(node, params, options) { 
    return transition_proxy(node, params, options)
  }

  /**
   * @param {Element} node
   * @param {object} params
   */
  function transition_proxy(node, params, options) {
    console.log('transition_proxy')
    return resolveTransition(node, params, options)
  }
  
  function resolveTransition(node, params, options) {
    console.log('resolveTransition')
    console.log("Rules total:", rules.length)
  
    if(0 == navigating_matching_rules.length) {
      return noop(node, params, options);
    } else {
      console.log("Rule matched:", navigating_matching_rules[0])
      let rule = navigating_matching_rules[0];

      return rule
              .transition
              .function
              .call(null, node, rule.transition.params, options)
    }
  }
  
  function resolveNavigatingTransition(node) {
    console.log('resolvePageTransition')
    console.log('node')
    console.log(node)
    let matchingRules = selectNavigatingMatchingRules()
    
    return composeTransitionFromMatchingRules(node, matchingRules)
  }

  function resolvePageTransition(node) {
    console.log('resolvePageTransition')
    console.log('node')
    console.log(node)
    let matchingRules = selectPageMatchingRules()
    
    return composeTransitionFromMatchingRules(node, matchingRules)
  }

  function selectNavigatingMatchingRules() {
    return [navigating_matching_rules]
      .filter( (rule) => rule !== null )
      .filter( (rule) => rule !== undefined )
      .flat()
      .filter( (rule) => rule != null )
      .filter( (rule) => rule != undefined )
      .flat()
      .filter( (rule) => !Object.hasOwn(rule, 'withType') || rule?.withType == $navigating?.type )
      .filter( (rule) => !Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId == $navigating?.from?.route?.id )
      .filter( (rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId == $navigating?.to?.route?.id )
      .flat
  };

  function composeTransitionFromMatchingRules(node, inputRules) {
    console.log("Rules matched:", inputRules.length)
    if(0 == inputRules.length) {
      return noop;
    } else {
      console.log('composeTransitionFromMatchingRules')
      let rule = inputRules[0];
      return function() {
        console.log('transition_builder')


        return rule
                .transition
                .function
                .call(null, node, rule.transition.params)
      }
    }
  }
  
  function getReactiveTransitionProxy(lastNav) {
    if(0 == reactive_matching_rules.length) {
      console.log('NOOOOOP')
      console.log('node')
      // console.log(node)
      console.log('params')
      // console.log(params)

      return noop;
    } else {
      console.log('OOOOOOP')
      console.log('composeTransitionFromMatchingRules')
      let rule = reactive_matching_rules[0];
      return function(node, params) {
        console.log('huh?')
        return rule
                .transition
                .function
                .call(null, node, params)
      }
    }
  }
  
  function getReactiveMatchingRules(lastNav) {
    reactive_matching_rules = navigating_matching_rules
      .filter( (rule) => rule !== null )
      .filter( (rule) => rule !== undefined )
      .flat()
      .filter( (rule) => rule != null )
      .filter( (rule) => rule != undefined )
      .flat()
      .filter( (rule) => !Object.hasOwn(rule, 'withType') || rule?.withType == lastNav?.type )
      .filter( (rule) => !Object.hasOwn(rule, 'fromRouteId') || rule?.fromRouteId == lastNav?.from?.route?.id )
      .filter( (rule) => !Object.hasOwn(rule, 'toRouteId') || rule?.toRouteId == lastNav?.to?.route?.id )
      .flat()

    return reactive_matching_rules;
  }

  function getInParams() {
    let params ={}
    if($before_navigate_fired || $after_navigate_fired) {
      params = navigating_matching_rules[0]?.params
    } else {
      params ={}
    }
    console.log(params)
    
    return params
  }
  
  function getOutParams() {
    let params ={}
    if($before_navigate_fired || $after_navigate_fired) {
      params = navigating_matching_rules[0]?.params
    } else {
      params ={}
    }
    console.log(params)

    return params
  }

  $: reactive_transition = ($before_navigate_fired && $after_navigate_fired) ? resolveTransition : resolveTransition;
</script>

<!-- glowing-ice -->
<div style="position:relative; min-width: 100%; min-height: 100%;">
  {#key data.url}
    <!-- ??? import { OnMount } from 'fractils' to enable intro transitions -->

    <!-- this is how we have all cases covered -->
    {#if loaded && ($before_navigate_fired || $after_navigate_fired)}
      <div
        style="position: absolute; top: 0px; left: 0px; min-width: 100%; min-height: 100%;"
        out:reactive_transition|global={ getOutParams() }
        in:reactive_transition|global={ getInParams() }
        
        on:introstart={handleIntroStart}
        on:introend={handleIntroEnd}
        
        on:outrostart={handleOutroStart}
        on:outroend={handleOutroEnd}
        >
        <slot/>
      </div>
    {/if}
  {/key}
</div>