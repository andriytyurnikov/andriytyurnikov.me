<script>
  import { assets, base } from '$app/paths'
</script>

<article class="bg-stone-800 canon metrica-font-berkeley-mono">
  <section class="h-screen w-full p-8 bg-gradient-to-b from-blue-800 to-violet-800">
    <div class="scena-focus mx-auto">
      <h3 class="text-center">
        <svg class="inline-block w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
        NavBar
      </h3>
      <p>
        Navbar is an old concept.
        However, mobile apps developed it further.
        And there is no reason, why web should ignore all the progress.
      </p>
      <p>
        Also, Navbar is a tightly integrated, and largerly autonomus subsystem.
        NavButton and NavMenu are strongly dependant on NavBar's context.
      </p>
    </div>
  </section>
  <section class="max-h-screen w-full p-8 bg-gradient-to-b from-violet-800 to-purple-800">
    Toggle navbar<br/>
    Activate drawer<br/>
    Toggle app-wide announce<br/>
    Toggle toast notification<br/>
    Activate modal dialog overlay<br/>
    Activate modal search overlay<br/>
  </section>
</article>