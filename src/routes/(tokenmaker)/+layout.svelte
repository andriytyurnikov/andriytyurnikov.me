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

<Shell>
  <NavBar 
    slot="navbar"
    class="bg-slate-950 text-slate-50 
    border-t border-current landscape:border-t-0 landscape:border-l
    xl:border-t-0 landscape:xl:border-l-0 xl:border-r-0 xl:border-b
    ">

  <ul>
    <li>
      <a href="{base}/">
        <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>        
      </a>
    </li>

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
