<script>
  import "./../../styles/tokenmaker.pcss";

  import { onMount } from 'svelte';
  import { assets, base } from '$app/paths';

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

<Shell
  class="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
  <NavBar 
    slot="navbar"
    class="
    bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950
    ">

  <ul>
    <li>
      <a href="{base}/tokenmaker">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="{base}/tokenmaker">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </a>
    </li>

    <li>
      <a href="{base}/tokenmaker">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg>
      </a>
    </li>

    <li>
      <ThemeToggle/>
    </li>
    
    <li>
      <a href="{base}/tokenmaker">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      </a>
    </li>
  </ul>

  </NavBar>

  <div class="contents canon metrica-font-berkeley-mono">
    <slot/>
  </div>
  
</Shell>
