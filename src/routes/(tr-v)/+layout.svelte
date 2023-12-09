<script>
  import "./../../app.pcss";
  import "./../../styles/lib/canon/canon.pcss";
  import "./../../styles/lib/fundatio/fundatio.pcss";
  import "./../../styles/tr-v.pcss";

  import { onMount } from 'svelte';
  import { assets, base } from '$app/paths';

  import Shell from '$lib/fundatio/Shell.svelte';
  import NavBar from '$lib/fundatio/NavBar.svelte';
  import ThemeSwitch from '$lib/fundatio/ThemeSwitch.svelte';

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

  onNavigate(() => {
    // view transitions are not supported
    if(!document.startViewTransition) return;

    return new Promise((fulfil) => {
      // snapshot old DOM
      document.startViewTransition( () => { 
        // DOM update
        // snapshot new DOM
        new Promise(fulfil) 
      } )
    })
  })
</script>

<Shell>
  <NavBar 
    slot="navbar"
    class="bg-blue-950 text-blue-50"
  >

  <ul>
    <li>
      <a href="{base}/">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>      
      </a>
    </li>
    <li>
      <a href="{base}/tr-v">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>        
      </a>
    </li>

    <li>
      <a href="{base}/tr-v/one" class="invisible">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="{base}/tr-v/two" class="invisible">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
      </a>
    </li>
    
    <li>
      <ThemeSwitch/>
    </li>

    <li>
      <button>
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      </button>
    </li>
  </ul>

  </NavBar>

  <div class="contents canon metrica-font-berkeley-mono">
    <slot/>
  </div>
  
</Shell>
