<script>
  export let data;

  let stage;
  
  import "./../../app.pcss";
  import "./../../styles/lib/elementa/elementa.pcss";

  import { onMount } from 'svelte';
  import { assets, base } from '$app/paths';

  import { fly, slide, crossfade, scale } from 'svelte/transition';
  import { cubicInOut, quadInOut, backInOut, linear } from 'svelte/easing';
  

  import Shell from '$lib/elementa/Shell.svelte';
  import NavBar from '$lib/elementa/NavBar.svelte';
  import ThemeToggle from '$lib/elementa/ThemeToggle.svelte';

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
  // navigating object:
  // from, to, type
  // from
  // to: NavigationTarget
  // NavigationTarget: params, route, url


  onNavigate((navigation) => {
    console.log("onNavigate")
    console.log(navigation)
  })

  function handleIntroStart(e) {
    // wrapper.classList.add('page-transition-wrapper--activated')
    // e.target.classList.add('page-transition-container--activated')
  }

  function handleIntroEnd(e) {
    // stage.classList.remove('transitus-stage--animated')
  }

  function handleOutroStart(e) {
    // stage.classList.add('transitus-stage--animated')
  }

  function handleOutroEnd(e) {
    // e.target.classList.remove('page-transition-container--activated')
  } 

  
</script>

<div class="scena-screen">
  <div class="transitus-stage" bind:this={stage}>
    {#key data.url}
      <div 
        class="transitus-actor"
        out:fly|global={{ x: -400, duration: 250}}
        in:fly|global={{ x: 400, duration: 250, delay: 250}}
        
        on:introstart={handleIntroStart}
        on:introend={handleIntroEnd}
        
        on:outrostart={handleOutroStart}
        on:outroend={handleOutroEnd}
        >
        <slot/>
      </div>
    {/key}
  </div>
</div>