<script>
  import "./../../app.pcss";
  import "./../../styles/lib/elementa/elementa.pcss";

  import { assets, base } from '$app/paths'

  import Shell from '$lib/elementa/Shell.svelte';
  import NavBar from '$lib/elementa/NavBar.svelte';
  import ThemeToggle from '$lib/elementa/ThemeToggle.svelte';
</script>

<div 
  class="scena-screen
  bg-neutral-50 dark:bg-neutral-950
  text-neutral-950 dark:text-neutral-50"
  >
  <Shell>
    <NavBar 
      slot="navbar"
      class="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50"
    >
      <ul>
        <li>
          <a href="{base}/elementa">
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
          </a>
        </li>
  
        <li class="invisible">
          <button>
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </li>

        <li class="invisible">
          <button>
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </li>

        <li class="invisible">
          <button>
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </li>
  
        <li>
          <ThemeToggle/>
        </li>
      </ul>
    </NavBar>
    
    <slot></slot>
  </Shell>
</div>