<script>
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { assets, base } from '$app/paths'
  
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
  }

  function handleResize(event) {
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<svelte:window 
  on:load={handleLoad}
  on:resize={handleResize} 
  on:orientation={handleOrientation}
/>

<div 
  class="fundatio-shell" 
  on:scroll={handleScroll} on:scrollend={handleScrollEnd} >
  <!-- modal overlay -->
  <div></div>

  <!-- toast notifications container -->
  <div></div>

  <!-- search overlay -->
  <div></div>

  <header class="contents">
    <slot name="navbar"/>
  </header>

  <main class="fundatio-main">
    <div class="fundatio-navbar-aware-wrapper">
      <slot></slot>
    </div>
  </main>
</div>