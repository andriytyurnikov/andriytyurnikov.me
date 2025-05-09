<script>
	import { base } from '$app/paths';
	let cohort = $state('median');

	// let APS = $state(0.3);
	// let APS = 0.3;

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
		studiodisplay27: {
			name: 'Studio Display 27"', //@ 700mm
			cssapd: 58.5,
			apd: 117
		}
		// imac24: {
		//   name: 'iMac 24"',
		//   cssapd: 41,
		//   apd: 82.6
		// },
	};

	let fontFamilies = {
		'atkinson-hyperlegible': {
			name: 'Atkinson Hyperlegible',
			unitsPerEm: 1000,
			xHeight: 496
		},
		'berkeley-mono': {
			name: 'Berkeley Mono',
			unitsPerEm: 1000,
			xHeight: 522
		},
		'courier-prime': {
			name: 'Courier Prime',
			unitsPerEm: 2048,
			xHeight: 924
		},
		'e-ukraine': {
			name: 'e-Ukraine',
			unitsPerEm: 512,
			xHeight: 300
		},
		'ibm-plex': {
			name: 'IBM Plex',
			unitsPerEm: 1000,
			xHeight: 523
		},
		'helvetica-neue': {
			name: 'Helvetica Neue',
			unitsPerEm: 1000,
			xHeight: 536
		},
		montserrat: {
			name: 'Montserrat',
			unitsPerEm: 1000,
			xHeight: 525
		},
		'noto-sans': {
			name: 'Noto Sans Display',
			unitsPerEm: 1000,
			xHeight: 536
		},
		playfair: {
			name: 'Playfair Display',
			unitsPerEm: 1000,
			xHeight: 531
		},
		prata: {
			name: 'Prata',
			unitsPerEm: 1000,
			xHeight: 533
		},
		roboto: {
			name: 'Roboto',
			unitsPerEm: 2048,
			xHeight: 1092
		},
		'space-mono': {
			name: 'Space Mono',
			unitsPerEm: 1000,
			xHeight: 496
		},
		urbanist: {
			name: 'Urbanist',
			unitsPerEm: 2000,
			xHeight: 1050
		},
		verdana: {
			name: 'Verdana',
			unitsPerEm: 2048,
			xHeight: 1117
		}
	};

	let selectedFontFamilyKey = $state('atkinson-hyperlegible');

	function truncate_float(length, number) {
		let base = Math.pow(10, length);
		return Math.round(base * number) / base;
	}

	function pad_float(precision, width = 4, number) {
		let base = Math.pow(10, precision);
		let truncated_float = Math.round(base * number) / base;

		let string_representation = truncated_float.toString();
		if (string_representation.indexOf('.') == -1) {
			string_representation = string_representation + '.0';
		}

		return string_representation.padEnd(width, '0');
	}

	let selectedFontFamily = $derived.by(() => {
		return fontFamilies[selectedFontFamilyKey];
	});

	let selectedFontFamilySizeFactor = $derived.by(() => {
		return selectedFontFamily.unitsPerEm / selectedFontFamily.xHeight;
	});

	let APS = $derived.by(() => {
		let value = 0.3;
		switch (cohort) {
			case 'kids':
				value = 0.42;
				break;
			case 'peak':
				value = 0.2;
				break;
			case 'median':
				value = 0.3;
				break;
			case 'elders':
				value = 0.42;
				break;
			default:
				value = 0.3;
		}
		return value;
	});
</script>

<article
	class="
    text-slate-300
    bg-slate-900
    w-full
    "
>
	<section
		class="w-full
      px-2 lg:px-3
      mx-auto
  "
	>
		<h1 class="pt-6 pb-2 text-[2.25rem] text-center tracking-wider">Ergonomic Typography</h1>
		<p class="text-center lead mb-2">
			Calculate optimal font size for font-family, medium and audience
		</p>
	</section>

	<hr class="mb-4 lg:mb-6" />

	<section
		class="
    w-full max-w-lg
    px-2 lg:px-3
    mb-2 lg:mb-3
    mx-auto"
	>
		<fieldset
			class="border
            border-slate-300

            max-w-2xl

            p-4 pt-2
            mb-4
            mx-auto"
		>
			<legend class="px-2">Font family</legend>
			<select class="p-2 w-full" bind:value={selectedFontFamilyKey}>
				{#each Object.entries(fontFamilies) as [key, properties], index (key)}
					<option value={key} selected={key === selectedFontFamilyKey}>
						{properties.name}
					</option>
				{/each}
			</select>
		</fieldset>

		<fieldset aria-label="Name your audience" class="mb-6">
			<h2 class="text-[1.5rem] mb-2">Name your audience</h2>
			<div class="grid grid-cols-4 gap-2">
				<!--
      In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
      Active: "ring-2 ring-indigo-600 ring-offset-2"
      Checked: "ring-0 bg-indigo-600 text-white hover:bg-indigo-500", Not Checked: "ring-1 ring-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      Not Active and not Checked: "ring-inset"
      Active and Checked: "ring-2"
    -->
				<label
					class="border peer/kids flex cursor-pointer items-center justify-center rounded-md px-3 py-3 font-semibold uppercase focus:outline-hidden sm:flex-1

			          has-active:ring-2 has-active:ring-slate-900 has-active:ring-offset-2
                has-checked:ring-0 has-checked:bg-slate-300 has-checked:text-slate-900 has-checked:hover:bg-slate-300"
				>
					<input
						type="radio"
						name="audience"
						value="kids"
						class="peer/kids sr-only"
						checked={'kids' === cohort}
						onclick={() => {
							cohort = 'kids';
						}}
					/>
					<span>Kids</span>
				</label>
				<!--
      In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
      Active: "ring-2 ring-indigo-600 ring-offset-2"
      Checked: "ring-0 bg-indigo-600 text-white hover:bg-indigo-500", Not Checked: "ring-1 ring-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      Not Active and not Checked: "ring-inset"
      Active and Checked: "ring-2"
    -->
				<label
					class="border peer/peak flex cursor-pointer items-center justify-center rounded-md px-3 py-3 font-semibold uppercase focus:outline-hidden sm:flex-1

     has-active:ring-2 has-active:ring-slate-900 has-active:ring-offset-2
                has-checked:ring-0 has-checked:bg-slate-300 has-checked:text-slate-900 has-checked:hover:bg-slate-300"
				>
					<input
						type="radio"
						name="audience"
						value="peak"
						class="peer/peak sr-only"
						checked={'peak' === cohort}
						onclick={() => {
							cohort = 'peak';
						}}
					/>
					<span>Peak</span>
				</label>
				<!--
      In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
      Active: "ring-2 ring-indigo-600 ring-offset-2"
      Checked: "ring-0 bg-indigo-600 text-white hover:bg-indigo-500", Not Checked: "ring-1 ring-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      Not Active and not Checked: "ring-inset"
      Active and Checked: "ring-2"
    -->
				<label
					class="border peer/median flex cursor-pointer items-center justify-center rounded-md px-3 py-3 font-semibold uppercase focus:outline-hidden sm:flex-1

					      has-active:ring-2 has-active:ring-slate-900 has-active:ring-offset-2
                has-checked:ring-0 has-checked:bg-slate-300 has-checked:text-slate-900 has-checked:hover:bg-slate-300"
				>
					<input
						type="radio"
						name="audience"
						value="median"
						class="peer/median sr-only"
						checked={'median' === cohort}
						onclick={() => {
							cohort = 'median';
						}}
					/>
					<span>Median</span>
				</label>
				<!--
      In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
      Active: "ring-2 ring-indigo-600 ring-offset-2"
      Checked: "ring-0 bg-indigo-600 text-white hover:bg-indigo-500", Not Checked: "ring-1 ring-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      Not Active and not Checked: "ring-inset"
      Active and Checked: "ring-2"
    -->
				<label
					class="border peer/elders flex cursor-pointer items-center justify-center rounded-md px-3 py-3 font-semibold uppercase focus:outline-hidden sm:flex-1

                has-active:ring-2 has-active:ring-slate-900 has-active:ring-offset-2
                has-checked:ring-0 has-checked:bg-slate-300 has-checked:text-slate-900 has-checked:hover:bg-slate-300"
				>
					<input
						type="radio"
						name="audience"
						value="elders"
						class="peer/elders sr-only"
						checked={'elders' === cohort}
						onclick={() => {
							cohort = 'elders';
						}}
					/>
					<span>Elders</span>
				</label>

				<div class="hidden peer-has-checked/kids:block col-span-4">
					Age: 5-16 years old.<br />
					Reading skill: underdeveloped.<br />
					Visual acuity: no degradation.
				</div>

				<div class="hidden peer-has-checked/peak:block col-span-4">
					Age: 16-28 years old.<br />
					Reading skill: developed.<br />
					Visual acuity: no degradation.
				</div>

				<div class="hidden peer-has-checked/median:block col-span-4">
					Age: 28-59 years old.<br />
					Reading skill: developed.<br />
					Visual acuity: median degradation.
				</div>

				<div class="hidden peer-has-checked/elders:block col-span-4">
					Age: 60+ years old.<br />
					Reading skill: developed.<br />
					Visual acuity: significant degradation.
				</div>
			</div>
		</fieldset>

		<div class="mx-auto flex gap-4 lg:gap-6 flex-col 2xl:flex-row aligh-items-start items-center">
			<table class="table-auto border-collapse">
				<!-- <caption>
            Optimal values of font size per platform
        </caption> -->
				<tbody>
					<tr class="border">
						<th scope="col" class="w-4/12 px-2 border text-left">Device</th>
						<th scope="col" class="w-4/12 px-2 border text-right">OS font size, px</th>
						<th scope="col" class="w-4/12 px-2 border text-right"
							>CSS <span class="whitespace-wrap break-keep">font-size</span>, px</th
						>
					</tr>
					{#each Object.entries(devices) as [key, properties], index (key)}
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
				</tbody>
			</table>
		</div>

		<div
			class="container mx-auto p-6 pl-4 my-4 lg:pl-6 w-auto bg-gray-700 border-l-8 border-gray-500 text-gray-100"
		>
			<abbr>CPS</abbr> (Critical Print Size) &mdash; research backed angular size of
			<span class="whitespace-nowrap break-keep">x-height</span>
			at which maximal reading speed is maintained.
			<br />
			<br />
			TLDR; From phisical size of the device, viewing distance, font metrics and browser resolution on
			device, we may derive optimal font size value.
		</div>
	</section>

	<footer
		class="bg-slate-800
          text-slate-200
          block
          p-6"
	>
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
				Recommended reading:<br />
				<li>
					<a
						class="after:content-['_↗']"
						href="https://pubmed.ncbi.nlm.nih.gov/21828237/"
						target="_blank"
						rel="noopener"
					>
						Does print size matter for reading? A review of findings from vision science and
						typography
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
