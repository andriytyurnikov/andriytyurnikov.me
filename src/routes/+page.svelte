<script>
  import { assets, base } from '$app/paths'
</script>

<div class="ui-container h-card flex flex-grow flex-col h-full w-full content-center justify-center items-center self-center">
  <!-- Profile photo (optional) -->
  <img class="ui-photo u-photo" src="{base}/images/me.png" alt="Andriy Tyurnikov">

  <!-- Name + Homepage link combined -->
  <a class="p-name u-url" href="https://andriytyurnikov.me">Andriy Tyurnikov</a>
  <br/>

  <!-- Role/Job title -->
  <p class="p-job-title">Web<sup>1,2,3</sup> Developer</p>
  <br/>

  <!-- Location (can be as specific as you want) -->
  <p class="p-locality">Kyiv</p>
  <p class="p-country-name">Ukraine</p>
  <br/>


  <!-- Organization (keep hidden) -->
  <p class="p-org hidden">Rubakas</p>

  <a class="u-url px-2 bg-amber-500 !text-black after:content-['_→']" href="{base}/garage" rel="me">MY GARAGE</a>
  <br/>

  <!-- Social profiles -->
  <a class="ui-link--out u-url" href="https://github.com/andriytyurnikov" rel="me" target="_blank">GitHub</a>
  <a class="ui-link--out u-url" href="https://www.linkedin.com/in/andriy-tyurnikov-05672176/" rel="me" target="_blank">LinkedIn</a>
  <a class="ui-link--out u-url" href="https://x.com/AndriyTyurnikov" rel="me" target="_blank">Twitter/X</a>
  <a class="ui-link--out u-url" href="https://t.me/AndriyTyurnikov/" rel="me" target="_blank">Telegram</a>
  <br/>

  <!-- Contact methods -->
  <a class="u-email" href="mailto:Andriy.Tyurnikov@gmail.com">Andriy.Tyurnikov@gmail.com</a>
  <a class="u-tel" href="tel:+380-67-106-10-26">+380-67-106-10-26</a>
</div>

<style>
  @reference "../styles/app.css";

  :global(html) {
    background-color: theme(--color-blue-800);
    color: theme(--color-white);
  }

  a {
    color: theme(--color-white);
  }
</style>