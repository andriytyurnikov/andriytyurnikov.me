<script>
  import { getContext, hasContext, onMount } from 'svelte'
  import { assets, base } from '$app/paths'

  let klass = null;
  export { klass as class };

  export let duration = '300ms';
  export let tolerance = 0;
  export let scrollOpacity = true;
  export let additionalClasses = [];

  let bar, opaque = false;

  let scrollInProgress = getContext('ScrollInProgress')
  let scrollDeltaY = getContext('ScrollDeltaY')
  let scrollTop = getContext('ScrollTop')
  
  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: if($scrollInProgress && ($scrollDeltaY > 0 )) {
    opaque = true && scrollOpacity;
    // scrollingDownClass = 'NavBar--ScrolligDown';
  } else if ($scrollInProgress && ($scrollDeltaY < 0 )) {
    opaque = false && scrollOpacity;
    // scrollingDownClass = '';
  } else if ($scrollInProgress && ($scrollDeltaY < 0 )) {
    opaque = true && scrollOpacity;
  }
</script>

<nav 
  use:setTransitionDuration
  class={["fundatio-navbar", klass].filter(c => c).join(' ')}
  class:opaque
  bind:this={bar}>
  <div class="fundatio-navbar-width-limiter">
    <slot/>
  </div>
</nav>