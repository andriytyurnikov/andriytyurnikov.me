<script>
  import '../styles/index.pcss'
  import { assets, base } from '$app/paths'
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

<main class="index-main">
  <article class="grid
  portrait:grid-cols-1 portrait:grid-rows-2 landscape:grid-cols-2 landscape:grid-rows-1">
    <header class="contents">
      <div class="responsive-grid-split-cell self-center justify-self-center z-40 grow flex flex-row justify-center avatar h-avatar sticky top-0 py-2 min-w-80 w-full">
        <div class="mr-3">
          <img src="{base}/images/me.png" alt="Me" class="h-16 w-16 avatar-squircle-3"/>
        </div>

        <div class="flex flex-col text-left pt-2">
          <div class="mb-6 font-extralight metrica-capsize-rem-[3/4] metrica-leading-rem-[3/4] metrica-trim">
            Andriy Tyurnikov
          </div>

          <div class="font-extralight metrica-capsize-rem-[3/4] metrica-leading-rem-[3/4] metrica-trim">
            Web Developer
          </div>
        </div>
      </div>

      <p class="relative responsive-grid-split-cell w-auto z-30 pt-4/1r landscape:h-screen portrait:h-[50vh]">
        Web enthusiast<br/>
        Generalist<br/>
        Tweaker<br/>


        <a href="{base}#about" class="inline-block absolute motion-safe:animate-bounce bottom-8 right-8">
          <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </a>
      </p>
    </header>

    <section class="contents">
      <h1 class="responsive-grid-split-cell z-50 top-5/1r bg-blue-700">
        <a href="{base}#about">About</a>
      </h1>
      <p id="about" class="responsive-grid-split-cell portrait:pt-9/1r landscape:pt-4/1r bg-gradient-to-b from-blue-700 via-blue-700 to-blue-600">
        In Kyiv, Ukraine<br/>
        Programming since 1996<br/>
        <br/>
        Interested in Web, Typography, Interfaces, Systems.
      </p>
    </section>

    <section class="contents">
      <h1 class="top-8/1r bg-blue-600">
        <a href="{base}#contacts">Contacts</a>
      </h1>
      <p id="contacts" class="portrait:pt-12/1r landscape:pt-16 bg-gradient-to-b from-blue-600 via-blue-600 via-blue-600 to-blue-500">
        <a
          class="after:content-['_↗']"
          href="https://github.com/andriytyurnikov"
          target="_blank">
          Github
        </a>,
        <a
          class="after:content-['_↗']"
          href="https://www.linkedin.com/in/andriy-tyurnikov-05672176/"
          target="_blank">
          LinkedIn
        </a>,
        <br/>
        <a
          class="after:content-['_↗']"
          href="https://medium.com/@andriytyurnikov"
          target="_blank">
          Medium
        </a>,
        <a
          class="after:content-['_↗']"
          href="https://twitter.com/AndriyTyurnikov"
          target="_blank">
          Twitter
        </a>,
        <br/>
        <a
          class="after:content-['_↗']"
          href="https://www.instagram.com/andriytyurnikov/"
          target="_blank">
          Instagram
        </a>,
        <a
          class="after:content-['_↗']"
          href="https://t.me/AndriyTyurnikov/"
          target="_blank">
          Telegram
        </a>,
        <br/>
        <a
          class="after:content-['_↗']"
          href="skype:andriy.tyurnikov?chat"
          target="_blank">
          Skype
        </a>,
        <a
          class="after:content-['_↗']"
          href="tel:+380671061026"
          target="_blank">
          Phone
        </a>,
        <br/>
        <a
          class="after:content-['_↗']"
          href="mailto:andriy.tyurnikov@gmail.com">
          e-mail
        </a>
      </p>
    </section>

    <section class="contents">
      <h1 class="top-11/1r bg-blue-500">
        <a href="{base}#hire">Hire</a>
      </h1>
      <p id="hire" class="portrait:pt-15/1r landscape:pt-4/1r bg-gradient-to-b from-blue-500 via-blue-500 via-blue-500 via-blue-500 to-blue-600">
        Keywords for HR ;)<br/><br/>
        <small class="inline-block">
          Heroku, AWS, Docker,
          Rails, Node.js, SvelteKit,
          Svelte, React, Bootstrap, Tailwind,
          Ruby, JavaScript, TypeScript,
          MySQL, PostgreSQL, Redis, ElasticSearch,
          REST API, GraphQL
        </small>
      </p>
    </section>

    <section class="contents">
      <h1 class="top-14/1r bg-blue-800">
        <a href="{base}#garage">Garage</a>
      </h1>
      <div
        id="garage"
        class="portrait:pt-18/1r landscape:pt-4/1r bg-blue-800
      metrica-capsize-rem-[4/4]
      metrica-leading-rem-[8/4]
      metrica-trim">
        <div class="block font-light mt-6 mb-2 pt-2 pb-2 px-4 bg-blue-700 border-l-4">
          Work with the garage door up
        </div>

        Well... sure <br/>
        Here is my
        <a
          href="{base}/garage"
          class="px-2 py-1 bg-vt320-amber text-black"
          >
          GARAGE →
        </a>, feel free to check it out.
      </div>
    </section>
  </article>
</main>
