<script>
  import "./../../../app.pcss";
  import "./../../../styles/garage.pcss";

  import { assets, base } from '$app/paths';

  import Shell from '$lib/elementa/Shell.svelte';
  import NavBar from '$lib/elementa/NavBar.svelte';
</script>

<div style="height: 0; width: 0;">
  <svg height="0" width="0" version="1.1"
xmlns="http://www.w3.org/2000/svg">
    <defs>      
      <clipPath 
        clipPathUnits="objectBoundingBox"
        id="dyna-squircle">
        <path d="M 0, 0.5 
                Q 0,0 0.5,0 
                T 1, 0.5 0.5, 1 0,0.5"/>
      </clipPath>

      <clipPath 
        clipPathUnits="objectBoundingBox"
        id="dyna-squircle-2">
        <path d="M 0,.5 
                C 0,0  0,0  .5,0 
                S 1,0  1,.5  1,1 .5,1  0,1  0,.5"/>
      </clipPath>

      <clipPath 
        clipPathUnits="objectBoundingBox"
        id="dyna-squircle-3">
        <path d="M 0,.5 
                Q 0,0  0.5,0 
                T 1,.5 .5,1 0,.5"/>
      </clipPath>

      
      <filter id="gauss">
        <feGaussianBlur 
          in="SourceGraphic"
          stdDeviation="0" />
      </filter>
    </defs>    
  </svg>
</div>


<div class="scena-screen bg-blue-950 text-blue-50">

  <Shell>
    <NavBar 
      slot="navbar"
      class="bg-blue-950 text-blue-50"
    >
      <ul>
        <li>
          <a href="{base}/">
            <img src="{base}/images/me.png" alt="Me" class="h-10 w-10 avatar-squircle-3"/>
          </a>
        </li>

        <li>
          <a href="{base}/garage">
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
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

        <li class="invisible">
          <button>
            <svg class="w-navbar-icon h-navbar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </li>
      </ul>
    </NavBar>

    <slot/>
  </Shell>
</div>