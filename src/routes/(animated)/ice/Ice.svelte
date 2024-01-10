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

  import { flip } from 'svelte/animate';
  import { linear } from 'svelte/easing';
  import { blur } from 'svelte/transition';

  /** @type { App.PageData } */
  export let data;

  /** @type {import('$lib/types').TransitionRules } */
  export let rules;

  let loaded = false;

  onMount(() => {
		loaded = true
	})

  beforeNavigate((navigation) => {
    console.log("beforeNavigate")
    console.log(navigation)
    // this is not a transition of type 'enter' !

  })

  onNavigate((navigation) => {
    console.log("onNavigate")
    console.log(navigation)
  })

  afterNavigate((navigation) => {
    console.log("afterNavigate")
    console.log(navigation)
    //when type == 'enter',
    //this would be the only navigation callback to fire
  })

  function handleOutroStart(e)  { console.log(e) }
  function handleOutroEnd(e)    { console.log(e) }

  function handleIntroStart(e)  { console.log(e) }
  function handleIntroEnd(e)    { console.log(e) }

  /**
   * @param {Element} node
   * @param {object} params
   */
  function outro_proxy(node, params) { 
    console.log('outro_proxy invoked')
    console.log(params)
    return blur(node, {duration: 1000, amount: '1rem'})
  }

  /**
   * @param {Element} node
   * @param {object} params
   */
  function intro_proxy(node, params) { 
    console.log('intro_proxy invoked')
    console.log(params)
    return blur(node, {duration: 1000, amount: '1rem'})
  }

  function nop(
    node,
    config = { delay: 0, duration: 250, easing: linear },
    direction_config = { direction: 'both' }
  ) {
    return {
      delay,
      duration,
      easing,
      css: (t, u) => {}
    }

  }
</script>

<small class="absolute top-0 left-0 small">
  SvelteKit { version }
  data: { JSON.stringify(data) }
  page: { JSON.stringify($page) }
  navigating: { JSON.stringify($navigating) }
</small>

<div style="position:relative; min-width: 100%; min-height: 100%;">
  {#key data.url}
    <!-- import { OnMount } from 'fractils' to enable intro transitions -->
    {#if loaded}
      <div
        style="position:absolute; top:0; left:0; min-width: 100%; min-height: 100%;"
        out:outro_proxy|global
        in:intro_proxy|global
        
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