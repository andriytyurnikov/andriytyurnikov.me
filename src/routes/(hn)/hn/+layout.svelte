<script>
  import "./../../../styles/hn.pcss";

  import { assets, base } from '$app/paths';

  import Shell from '$lib/elementa/Shell.svelte';
  import NavBar from '$lib/elementa/NavBar.svelte';
</script>

<svelte:head>
  <meta name="theme-color" content="#172554" />
</svelte:head>

<Shell>
  <NavBar
    slot="navbar"
    class="bg-amber-50 text-neutral-950"
  >
    <ul>
      <li class="bg-orange-600 text-amber-50 metrica-cap-size-rem-[8/4] text-center w-5">
        <a href="{base}/hn" class="h-full w-full border-r-2 font-bold">
          Y
        </a>
      </li>

      <li class="metrica-cap-size-rem-[5/4] font-bold">
        <a href="{base}/hn" class="text-left">
          HackerNews
        </a>
      </li>

      <li>
        <a href="{base}/#contacts">

        </a>
      </li>

      <li>
        <a href="{base}/garage">
          <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </a>
      </li>
    </ul>
  </NavBar>

  <slot></slot>
</Shell>