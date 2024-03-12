<script>
  import { assets, base } from '$app/paths'

  let APS = 0.3;
  let labelAPS = '';

  let devices = {
    iphoneSE3: {
      name: 'iPhone SE',
      cssapd: 28.45,
      apd: 56.9
    },
    iphone15: {
      name: 'iPhone 15',
      cssapd: 27.43,
      apd: 82.3
    },
    ipadmini: {
      name: 'iPad mini',
      cssapd: 43.5,
      apd: 87.0
    },
    ipadair: {
      name: 'iPad Air',
      cssapd: 34.45,
      apd: 68.9
    },
    macbookair13: {
      name: 'MacBook Air 13"',
      cssapd: 40.2,
      apd: 80.4
    },
    macbookpro15: {
      name: 'MacBook Pro 15"',
      cssapd: 38.5,
      apd: 77.0
    },
    macbookpro16: {
      name: 'MacBook Pro 16"',
      cssapd: 46,
      apd: 92
    },
    // imac24: {
    //   name: 'iMac 24"',
    //   cssapd: 41,
    //   apd: 82.6
    // },
  }

  let fontFamilies = {
    'atkinson-hyperlegible': {
      name: 'Atkinson Hyperlegible',
      unitsPerEm: 1000,
      xHeight: 496,
    },
    'berkeley-mono': {
      name: 'Berkeley Mono',
      unitsPerEm: 1000,
      xHeight: 522,
    },
    'e-ukraine': {
      name: 'e-Ukraine',
      unitsPerEm: 512,
      xHeight: 300,
    },
    'ibm-plex': {
      name: 'IBM Plex',
      unitsPerEm: 1000,
      xHeight: 523,
    },
    'helvetica-neue':{
      name: 'Helvetica Neue',
      unitsPerEm: 1000,
      xHeight: 536,
    },
    'montserrat':{
      name: 'Montserrat',
      unitsPerEm: 1000,
      xHeight: 525,
    },
    'noto-sans': {
      name: 'Noto Sans Display',
      unitsPerEm: 1000,
      xHeight: 536,
    },
    'playfair':{
      name: 'Playfair Display',
      unitsPerEm: 1000,
      xHeight: 531,
    },
    'prata':{
      name: 'Prata',
      unitsPerEm: 1000,
      xHeight: 533,
    },
    'roboto':{
      name: 'Roboto',
      unitsPerEm: 2048,
      xHeight: 1092,
    },
    'space-mono':{
      name: 'Space Mono',
      unitsPerEm: 1000,
      xHeight: 496
    },
    'urbanist':{
      name: 'Urbanist',
      unitsPerEm: 2000,
      xHeight: 1050,
    },
    'verdana':{
      name: 'Verdana',
      unitsPerEm: 2048,
      xHeight: 1117,
    },
  }

  let selectedFontFamilyKey = 'atkinson-hyperlegible';

  function truncate_float(length, number) {
		let base = Math.pow(10, length)
		return Math.round(base * number)/base;
	}

  function pad_float(precision, width=4, number) {
    let base = Math.pow(10, precision)
		let truncated_float = Math.round(base * number)/base

    let string_representation = truncated_float.toString()
    if(string_representation.indexOf('.') == -1) {
      string_representation = string_representation + '.0'
    }

    return string_representation.padEnd(width, '0')
  }

  $: selectedFontFamily = fontFamilies[selectedFontFamilyKey];
  $: selectedFontFamilySizeFactor = selectedFontFamily.unitsPerEm / selectedFontFamily.xHeight;

  $: if(APS <= 0.19) {
    labelAPS = 'degradation cliff'
  } else if(APS == 0.2) {
    labelAPS = 'normal vision'
  } else if(APS <= 0.3) {
    labelAPS = 'broadly inclusive'
  } else if(APS < 0.42) {
    labelAPS = 'inclusive'
  } else if(APS == 0.42) {
    labelAPS = 'children-friendly'
  } else if(APS > 0.42 && APS <= 0.5) {
    labelAPS = 'very inclusive'
  } else if(APS > 0.5 && APS < 1) {
    labelAPS = 'watch your headings!'
  } else if(APS == 1.0) {
    labelAPS = 'slight discomfort for normal vision'
  }
</script>

<article
  class="
    bg-blue-950
    text-blue-50
    w-full
    canon
    metrica-font-berkeley-mono
    ">
  <section
    class="
      max-w-para w-full
      px-2 lg:px-3
      m-8
      mx-auto
  ">
    <h3 class="text-center tracking-wider">
      Proportional Type
    </h3>
    <p class="text-center lead">
      Responsive font size calculator
    </p>
  </section>

  <hr class="mb-4 lg:mb-6"/>

  <section class="
    w-full max-w-lg
    px-2 lg:px-3
    mb-2 lg:mb-3
    mx-auto">

    <fieldset class="border
    border-blue-100

    max-w-2xl

    p-4 pt-2
    mb-4
    mx-auto">
      <legend>[Font family]</legend>
      <select
        class="p-2 w-full text-blue-950"
        bind:value={selectedFontFamilyKey}
        >
        {#each Object.entries(fontFamilies) as [key, properties], index(key) }
          <option value="{key}" selected={(key === selectedFontFamilyKey)} >{properties.name}</option>
        {/each}
      </select>
    </fieldset>

    <div class="mx-auto flex gap-4 lg:gap-6 flex-col 2xl:flex-row aligh-items-start items-center">
      <table class="table-auto border-collapse">
        <!-- <caption>
            Optimal values of font size per platform
        </caption> -->
        <tr class="border">
          <th scope="col" class="w-4/12 px-2 border text-left">Device</th>
          <th scope="col" class="w-4/12 px-2 border text-right">OS font size, px</th>
          <th scope="col" class="w-4/12 px-2 border text-right">CSS <span class="whitespace-wrap break-keep">font-size</span>, px</th>
        </tr>
        {#each Object.entries(devices) as [key, properties], index(key) }
        <tr class="border">
          <td class="px-2 border">
            {properties.name}
          </td>
          <td class="px-2 border text-right">
            {pad_float(2, 5, properties.apd * APS * selectedFontFamilySizeFactor)}
          </td>
          <td class="px-2 border text-right">
            {pad_float(2, 5, properties.cssapd * APS * selectedFontFamilySizeFactor)}
          </td>
        </tr>
        {/each}
      </table>

      <div id="advanced" class="basis-1/2 border p-2 w-full">
        <legend class="pb-3">[Advanced]</legend>

        <label>
          <span class="inline-block pb-4">Angular Print Size: <br/>
            <span class="text-blue-50">
              {pad_float(2, 4, APS)}°
            </span> {labelAPS}
            <br/>
          </span>
          <input
            bind:value={APS}
            class="w-full text-blue-100"
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            list="APS-markers"
            />
            <datalist id="APS-markers" class="w-full">
              <option value="0.1" label="0.1°"></option>
              <option value="0.2" label=".2°"></option>
              <option value="0.3" label=".3°"></option>
              <option value="0.4" label=".4°"></option>
              <option value="0.5" label=".5°"></option>
              <option value="0.6" label=".6°"></option>
              <option value="0.7" label=".7°"></option>
              <option value="0.8" label=".8°"></option>
              <option value="0.9" label=".9°"></option>
              <option value="1" label="1.0°"></option>
            </datalist>
        </label>

        <p class="pb-3 lg:pb-5">
          Notable values:<br/>
          <button
            href="{base}/garage/font-calc/#advanced"
            on:click={ (e) => { APS = 0.20 } }
            >
            0.20°
          </button> normal vision
          <br/>
          <button
            href="{base}/garage/font-calc/#advanced"
            on:click={ (e) => { APS = 0.30 } }
            >
            0.30°
          </button> broadly inclusive
          <br/>
          <button
            href="{base}/garage/font-calc/#advanced"
            on:click={ (e) => { APS = 0.42 } }
            >
            0.42°
          </button> children-friendly
        </p>
      </div>
    </div>

    <div class="container mx-auto p-6 pl-4 my-4 lg:pl-6 w-auto bg-blue-700 border-l-8 border-blue-200">
      <abbr>CPS</abbr> (Critical Print Size) &mdash;
      research backed angular size of <span class="whitespace-nowrap break-keep">x-height</span> at which maximal reading speed is maintained.
      <br/>
      <br/>
      TLDR;
      From phisical size of the device,
      viewing distance, font metrics and browser resolution on device,
      we may derive optimal font size value.
    </div>
  </section>

  <footer class="bg-blue-900
  text-blue-50
  block
  p-6">
    <div class="container max-w-lg mx-auto">

      <h4>Inspired and enlightnend by:</h4>

      <a
        class="whitespace-nowrap break-keep after:content-['_↗']"
        href="https://ia.net/topics/responsive-typography-the-basics"
        target="_blank"
        rel="noopener"
        >
        iA.net
      </a>,

      <a
        class="after:content-['_↗']"
        href="https://seek-oss.github.io/capsize/"
        target="_blank"
        rel="noopener"
        >
        Capsize
      </a>,

      <a
        class="whitespace-nowrap break-keep after:content-['_↗']"
        href="https://legge.psych.umn.edu/reading"
        target="_blank"
        rel="noopener"
        >
        Gordon Legge
      </a>,

      <a
        class="whitespace-nowrap break-keep after:content-['_↗']"
        href="https://en.wikipedia.org/wiki/Miles_Tinker"
        target="_blank"
        rel="noopener"
        >
        Miles Tinker
      </a>

      <ul class="my-4 lg:my-6 list-disc list-inside">
        Recommended reading:<br/>
        <li>
          <a
            class="after:content-['_↗']"
            href="https://pubmed.ncbi.nlm.nih.gov/21828237/"
            target="_blank"
            rel="noopener"
            >
            Does print size matter for reading? A review of findings from vision science and typography
          </a>
        </li>

        <li>
          <a
            class="after:content-['_↗']"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6629798/"
            target="_blank"
            rel="noopener"
            >
            Age factor affects reading acuity and reading speed in attaining text information
          </a>
        </li>

        <li>
          <a
            class="after:content-['_↗']"
            href="https://www.researchgate.net/figure/Critical-print-size-as-a-function-of-age-Points-show-the-mean-CPS-for-each-age-tested_fig4_305497434"
            target="_blank"
            rel="noopener"
            >
            Baseline MNREAD Measures for Normally Sighted Subjects From Childhood to Old Age
          </a>
        </li>

        <li>
          <a
            class="after:content-['_↗']"
            href="https://www.pnas.org/doi/10.1073/pnas.2007514117"
            target="_blank"
            rel="noopener"
            >
            Reconciling print-size and display-size constraints on reading
          </a>
        </li>

      </ul>

    </div>
  </footer>
</article>