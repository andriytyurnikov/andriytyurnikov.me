<script>
  import { assets, base } from '$app/paths'
</script>


<div 
  class="container-flex w-full min-h-full text-neutral-100 bg-neutral-950 p-4">
  <article class="canon metrica-font-berkeley-mono">
    <h1 class="hero text-center">
      Responsive Layouts<br/>
      <span class="italic">&amp;</span><br/> 
      Typography
    </h1>

    <hr class="my-8"/>

    <section class="scena-focus mx-auto py-h2">
      <h2 class="text-center">Narrow Column</h2>
      <p class="lead">
        Relevance of screen real estate is very contextual. 
      </p>
      <p>
        It is crucial to keep focus on viewers attention and 
        field of view is an essential tool.
        The whole purpose of <strong>Narrow Column</strong> is to keep vision 
        within narrow sector of the visual field, roughly 12°, 
        despite all the real estate of the bigger screens.
      </p>
      <p>
        <strong>Narrow Column</strong> is very instrumental in presenting introductory content,
        blockquotes, captions.
        Obviously, it is very restrictive format, 
        not fit for text of substantial length.
      </p>
      <p>
        Resrictive effect of the <strong>Narrow Column</strong>
        kicks in when screen is 1024px or wider.
      </p>
    </section>
    <hr class="my-8"/>
    <section class="block max-w-40/1 mx-auto py-h2">
      <img class="block mx-auto py-8" src="{base}/images/eyeballs.svg"/>
      <h2 class="text-center">Typographic Column</h2>
      <p class="lead text-justify">
        Yet, sometimes reading happens on the web. This is when Typographic Column may be used.
      </p>
      <p>
        Purpose of Typographic Column is to prowide comfortable 
        reading environment. 
        Blog posts, esseys and articles, press-releases, 
        or even books &mdash; demand a container, 
        which would provide line length comfortable for reading.
      </p>
      <p>
        Warning: to count length of 60ch browsers use 
        font-family and font-size of the current element.
      </p>
    </section>
  </article>
</div>
