<article class="min-h-full flex flex-col grow canon metrica-font-berkeley-mono">
  <section class="max-w-para mx-auto">
    <h2>
      <svg class="w-7 h-7 inline-flex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
      </svg>
      Ring Buoy
    </h2>
    <h3>Primitives for circular UIs</h3>
    <p>
      Circles are easy - those are just squares with rounded corners.
    </p>
    <p>
      To move further, we'll introduce concept of orbits &mdash; 
      offsets from the center of current scene. And, sure &mdash; angular position on the orbit.
    </p>
    <div class="relative items-stretch mx-auto orbit-full blob-4 min-h-[28rem] w-full flex grow self-stretch content-center items-center justify-center">
      <div class="planet h-28 w-28 orbit-28 arc-0/24 bg-white">1</div>
      <div class="planet h-24 w-24 orbit-24 arc-3/24 bg-blue-200">2</div>
      <div class="planet h-20 w-20 orbit-20 arc-6/24 bg-blue-300">3</div>
      <div class="planet h-16 w-16 orbit-16 arc-9/24 bg-blue-400">4</div>
      <div class="planet h-12 w-12 orbit-16 arc-12/24 bg-blue-500">5</div>
      <div class="planet h-8 w-8 orbit-0 arc-15/24 bg-blue-600">6</div>
    </div>
    <p>
      But, there is more. Donuts & Sectors!
    </p>
    <div class="relative items-stretch mx-auto orbit-full blob-4 min-h-[28rem] w-full flex grow self-stretch content-center items-center justify-center">
      <div class="planet h-28 w-28 orbit-28 arc-0/24 sector sector-size-10/12 sector-shift-1/12 sector-hole-1/6 bg-white"></div>
      <div class="planet h-24 w-24 orbit-24 arc-3/24 sector sector-size-8/12 sector-shift-3/12 sector-hole-2/6 bg-blue-200"></div>
      <div class="planet h-20 w-20 orbit-20 arc-6/24 sector sector-size-5/12 sector-shift-5/12 sector-hole-3/6 bg-blue-300"></div>
      <div class="planet h-16 w-16 orbit-16 arc-9/24 sector sector-size-7/12 sector-shift-7/12 sector-hole-4/6 bg-blue-400"></div>
      <div class="planet h-12 w-12 orbit-16 arc-12/24 sector sector-size-9/12 sector-shift-9/12 sector-hole-5/6 bg-blue-500"></div>
      <div class="planet h-8 w-8 orbit-0 arc-15/24 sector sector-size-10/12 bg-blue-600"></div>
    </div>
    
    <p>
      CSS is fine and dandy, but what about JS interoperability?
    </p>

    <div class="relative items-stretch mx-auto orbit-full blob-4 min-h-[28rem] w-full flex grow self-stretch content-center items-center justify-center">
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-0/12 sector-hole-2/6 bg-blue-500"></div>
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-2/12 sector-hole-2/6 bg-blue-700"></div>
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-4/12 sector-hole-2/6 bg-blue-900"></div>
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-6/12 sector-hole-2/6 bg-blue-600"></div>
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-8/12 sector-hole-2/6 bg-blue-400"></div>
      <div class="planet h-64 w-64 orbit-0 arc-0/24 sector sector-size-2/12 sector-shift-10/12 sector-hole-2/6 bg-blue-300"></div>
    </div>
  </section>
</article>