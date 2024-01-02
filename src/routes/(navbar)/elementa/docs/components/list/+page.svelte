<script>
  import { assets, base } from '$app/paths'
  import List from '$lib/elementa/List.svelte'
</script>

<article class="h-full canon metrica-font-berkeley-mono">
  <section class="w-full h-full p-8 bg-gradient-to-b from-blue-800 to-violet-800">
    <div class="max-w-para mx-auto">
      <h1 class="hero text-center">
        <svg class="inline-block w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>        
        List
      </h1>
      <p>
        Initially, on the web, lists were a inspired by lists in print.<br/>
        Apps, on the contrary, deal with lists of interactive items.

      </p>
      <List></List>
    </div>
  </section>
</article>