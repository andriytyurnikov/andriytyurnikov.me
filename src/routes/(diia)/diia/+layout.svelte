<script>

  import "./../../../styles/diia.pcss";

  import { assets, base } from '$app/paths'

  import Shell from '$lib/elementa/Shell.svelte';
  import NavBar from '$lib/elementa/NavBar.svelte';
  import ThemeToggle from '$lib/elementa/ThemeToggle.svelte';
</script>


<div class="scena-screen bg-neutral-950 text-neutral-50">
  <div class="scena-cover scena-cover--center">
    <div class="contents">
      <slot/>
    </div>
  </div>
</div>