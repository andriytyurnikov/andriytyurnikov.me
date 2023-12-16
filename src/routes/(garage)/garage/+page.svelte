<script>
  import { assets, base } from '$app/paths'
</script>

<svelte:head>
  <meta name="theme-color" content="#172554" />
</svelte:head>

<article 
  class="
    garage-article 
    canon 
    metrica-font-berkeley-mono
    tracking-wider
  ">
  <section
    class="
    w-full max-w-40/1
    px-4/4r
    ">
    <h1 class="metrica-trim mt-12 mb-8">
      <svg class="inline-block w-12 h-12 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>Garage
    </h1>
    
    <quote>
      "Work with the garage door up"
    </quote>

    <p>
      Warning: things are raw and unfinished.
    </p>

    <ul class="pl-0 list-disc list-inside small">
      Color legend:
      <li class="dark:text-blue-100 text-blue-900">Public work in progress</li>
      <li class="dark:text-blue-300 text-blue-600">Collaborations or announces (may be private)</li>
      <li class="dark:text-blue-500 text-blue-500">Ideation phase</li>
    </ul>
    
    <ul class="pl-0 list-inside mb-8">
      <h5>Components and styling:</h5>
      <li class="dark:text-blue-300 text-blue-900">
        <a href="{base}/fundatio">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
          Fundatio (&alpha;) &mdash; UI components for the Web<sup>(3)</sup>
        </a>
        <ul class="indent-8 !mb-0">
          <li class="dark:text-blue-300 text-blue-700">
            <a href="{base}/garage/canon">
              <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
              Canon Typographia (&alpha;) &mdash; defaults of typographic style
            </a>
            <ul class="indent-16 !mb-0">
              <li class="dark:text-blue-300 text-blue-700">
                <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                </svg>
                Scena Prospectus (&alpha;) &mdash; layout helpers
              </li>

              <li class="dark:text-blue-300 text-blue-700">
                <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
                Metrica Typus (&alpha;) &mdash; font sizing and trimming
              </li>
        
              <li class="dark:text-blue-100 text-blue-900">
                <a 
                  class="after:content-['_↗']"
                  href="https://www.npmjs.com/package/@rubakas/fractio-rem"
                  target="_blank" rel="noopener">
                  <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  Fractio Rem (&beta;) &mdash; fractional size scale
                </a>
              </li>

              <li class="dark:text-blue-100 text-blue-900">
                <a 
                  class="after:content-['_↗']"
                  href="https://www.npmjs.com/package/@rubakas/pro-rata-rem"
                  target="_blank" rel="noopener">
                  <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Pro Rata Rem (&beta;) &mdash; responsive root element
                </a>
              </li>
        
            </ul>
          </li>
        </ul>
      </li>

      <li class="dark:text-blue-300 text-blue-700">
        <a href="{base}/garage/ring-buoy">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
          </svg>          
          Ring Buoy (&alpha;) &mdash; utilities for Radial UIs
        </a>
        
        <ul class="indent-8 !mb-0">
          <li class="dark:text-blue-500 text-blue-500">
            <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            Radial Menu (&alpha;)
          </li>
        </ul>
      </li>
    </ul>

    <ul class="pl-0 list-inside">
      <h5>Widgets:</h5>
      <li class="dark:text-blue-100 text-blue-900">
        <a href="{base}/garage/font-calc">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
          </svg>          
          Proportional Type (&beta;) &mdash; formula of responsive typography
        </a>
      </li>

      <li class="dark:text-blue-100 text-blue-900">
        <a 
          class="after:content-['_↗']"
          href="https://svelte.dev/repl/c5ebdd2e6fc2493b94609fc4a927773e?version=4.2.1"
          target="_blank" rel="noopener">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Field of View accuity visualisation (&beta;)
        </a>
      </li>

      <li class="dark:text-blue-100 text-blue-900">
        <a 
          class="after:content-['_↗']"
          href="https://svelte.dev/repl/2319271d93c34981aafce411f8345be8?version=4.2.1"
          target="_blank" rel="noopener">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          Squircle SVG approximator (&beta;)
        </a>
      </li>
    </ul>

    <ul class="pl-0 list-inside mb-8">
      <h5>Apps & Systems:</h5>
      <li class="dark:text-blue-300 text-blue-700">
        <a 
          class="after:content-['_↗']"
          href="https://plugari.com"
          target="_blank" rel="noopener">
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Plugari (&alpha;) &mdash; agro-service marketplace
        </a>
      </li>

      <li class="dark:text-blue-500 text-blue-500">
        <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
        AR/VR Pinterest
      </li>

      <li class="dark:text-blue-300 text-blue-700">
        <a href="{base}/tokenmaker" >
          <svg class="inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ERC20 Token Maker (&alpha;)
        </a>
      </li>
    </ul>

  </section>
  
  <footer 
    class="
      bg-blue-100 dark:bg-blue-900
      text-blue-950 dark:text-blue-50
      block
      p-4
      text-left
    ">
    <div class="container max-w-40/1 mx-auto">
      <h5>Friends in craft:</h5>

      <ul class="pl-0 list-disc list-inside !mb-0 md:columns-2 md:gap-x-12">        
        RadialUIs and ZoomUIs:
        <li class="text-blue-900 dark:text-blue-100">
          <a class="after:content-['_↗']" 
            href="https://github.com/tinchox5"
            target="_blank" rel="noopener">
            Juan Martin
          </a>
        </li>
        <br/>

        Mobile & AR/VR:
        <li>
          <a class="after:content-['_↗']" 
            href="https://github.com/ALexanderLonsky"
            target="_blank" rel="noopener">
            Alexander Lonsky
          </a>
        </li>

        <li class="text-blue-900 dark:text-blue-100">
          <a class="after:content-['_↗']" 
            href="https://www.vilinskyy.com/"
            target="_blank" rel="noopener">
            Alexander Vilinskyy
          </a>
        </li>

        <li class="text-blue-900 dark:text-blue-100">
          <a class="after:content-['_↗']" 
            href="https://alamak.app/"
            target="_blank" rel="noopener">
            Alamak Oy
          </a>
        </li>
        <br/>

        Web & Ruby on Rails:
        <li class="text-blue-900 dark:text-blue-100">
          <a 
            class="after:content-['_↗']"
            href="https://verkligheten.github.io/"
            target="_blank" rel="noopener">
            Eugene Naumov
          </a>
        </li>
  
        <li class="text-blue-900 dark:text-blue-100">
          <a class="after:content-['_↗']" 
            href="https://vsnares.github.io/"
            target="_blank" rel="noopener">
            Markell Pohosov
          </a>
        </li>
  
        <li class="text-blue-100">
          <a class="after:content-['_↗']" 
            href="https://cupatea.github.io/"
            target="_blank" rel="noopener">
            Vladyslav Davydenko
          </a>
        </li>
        AKA 
        <a class="after:content-['_↗']" 
          href="https://rubakas.com"
          target="_blank" rel="noopener">
          Rubakas
        </a>
      </ul> 

    </div>
  </footer>
</article>