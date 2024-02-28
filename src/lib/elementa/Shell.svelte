<script>
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { assets, base } from '$app/paths'

  let klass = null;
  export { klass as class };
  
  let scrollInProgress = writable(false)
	setContext('ScrollInProgress', scrollInProgress)

  let scrollTop = writable(0)
	setContext('ScrollTop', scrollTop)

  let scrollDeltaY = writable(0)
	setContext('ScrollDeltaY', scrollDeltaY)

  function handleLoad(event) {
    // Do nothing - scroll is started
    if(window.scrollY !== 0) return;
    
    // Hide the address bar!
    setTimeout( 
      function() { 
        window.scrollTo(0, 1) 
      }, 
      0
    )
  }

  function handleOrientation(event) {
    // document.body.height = window.innerHeight;
    // document.body.width = window.innerWidth;
  }

  function handleResize(event) {
    // document.body.height = window.innerHeight;
    // document.body.width = window.innerWidth;
  }

  function handleScroll(event) {
    $scrollInProgress = true
    $scrollDeltaY = event.target.scrollTop - $scrollTop
    $scrollTop = event.target.scrollTop
  }

  function handleScrollEnd(event) {
    $scrollInProgress = false
  }
  
</script>

<svelte:head>
  <!-- Top bar will be removed, if app is added to springboard -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
  
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320"/>
</svelte:head>

<svelte:window 
  on:load={handleLoad}
  on:resize={handleResize} 
  on:orientation={handleOrientation}
/>

<div
  class={["elementa-shell", klass].filter(c => c).join(' ')}
  on:scroll={handleScroll} on:scrollend={handleScrollEnd} >
  <!-- modal overlay -->

  <!-- toast notifications container -->

  <!-- search overlay -->

  <header class="elementa-shell-navbar-slot">
    <slot name="navbar"/>
  </header>

  <main class="elementa-shell-main-slot">
    <slot></slot>
  </main>
</div>