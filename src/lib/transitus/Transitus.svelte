<script>
  /** @type { App.PageData } */
  export let data;

  /** @type {import('$lib/types').GlowingIce } */
  /** @type { GlowingIce.TransitionRules } */
  export let rules;

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
  import { page, navigating } from '$app/stores';
  import TransitionMap from "."; 

  beforeNavigate((navigation) => {
    console.log("beforeNavigate")
    console.log(navigation)
  })

  onNavigate((navigation) => {
    console.log("onNavigate")
    console.log(navigation)
  })

  afterNavigate((navigation) => {
    console.log("afterNavigate")
    console.log(navigation)
  })

  const map = Object.freeze( new TransitionMap() );
  let transition_proxy = () => { console.log('transition proxy invoked') };
</script>

{#key data.url}
  <div 
    class="default_wrapper_class"

    out:transition_proxy|global
    in:transition_proxy|global

    on:outrostart={handleOutroStart}
    on:outroend={handleOutroEnd}
    
    on:introstart={handleIntroStart}
    on:introend={handleIntroEnd}
    >
      <slot/>
  </div>
{/key}

<style>
  .default_container_class {
    position: relative;
    overflow: hidden;

    /* without this, overflow:hidden won't take effect because the things
       we're trying to hide are on a separate accelerated
       context. Also, this prevents a tiny vertical jump when the
       content switches to accelerated.  */
    transform: translateY(0);
  }

  .default_wrapper_class {

  }
</style>