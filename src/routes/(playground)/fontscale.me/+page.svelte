<script>
	import '../../../styles/default.css';
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
		// macbookpro16: {
		// 	name: 'MacBook Pro 16"',
		// 	cssapd: 46,
		// 	apd: 92
		// },
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

	let selectedFontFamilyKey = 'atkinson-hyperlegible';

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

	let selectedFontFamily = $derived.by(() => {
		return fontFamilies[selectedFontFamilyKey];
	});

	let selectedFontFamilySizeFactor = $derived.by(() => {
		return selectedFontFamily.unitsPerEm / selectedFontFamily.xHeight;
	});

	let labelAPS = $derived.by(() => {
		if (APS <= 0.19) {
			return 'degradation cliff';
		} else if (APS == 0.2) {
			return 'normal vision';
		} else if (APS <= 0.3) {
			return 'broadly inclusive';
		} else if (APS < 0.42) {
			return 'inclusive';
		} else if (APS == 0.42) {
			return 'children and eldery';
		} else if (APS > 0.42 && APS <= 0.5) {
			return 'very inclusive';
		} else if (APS > 0.5 && APS < 1) {
			return 'watch your headings!';
		} else if (APS == 1.0) {
			return 'slight discomfort for normal vision';
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
		rel="stylesheet"
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div
	class="font-serif h-dvh mx-auto w-dvw bg-linear-to-r/oklch from-right-steel-blue via-17% via-macula to-right-steel-blue text-eigengrau overflow-y-scroll tracking-wider"
>
	<div class="mx-auto max-w-[40rem] bg-macula-100">
		<div class="px-4 pt-4">
			<h1 class="text-[2.25rem] laptop:text-[4rem] leading-16 text-center">fontscale.me</h1>
			<hr class="mt-4" />
		</div>

		<div class="pt-4 px-4 text-base">
			<fieldset aria-label="Choose a font" class="mb-6">
				<h2 class="text-[1.5rem] mb-2">Choose a font</h2>
				<input
					class="w-full border text-[1.5rem] h-12 px-4
					      bg-macula-200
								inset-ring-eigengrau
								ring-eigengrau
								active:shadow-none

								outline-solid outline-transparent

								focus:ring-eigengrau
								focus:ring-offset-eigengrau
								focus:inset-ring-eigengrau

								focus-visible:ring-eigengrau
								focus-visible:ring-offset-eigengrau
								focus-visible:inset-ring-eigengrau
								focus-visible:outline-eigengrau

								rounded-sm"
					type="text"
				/>
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
						      outline-transparent
						      has-active:ring-2 has-active:ring-eigengrau has-active:ring-offset-2
                  has-checked:ring-0 has-checked:bg-eigengrau has-checked:text-macula has-checked:hover:bg-eigengrau"
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
						      outline-transparent
						      has-active:ring-2 has-active:ring-eigengrau has-active:ring-offset-2
                  has-checked:ring-0 has-checked:bg-eigengrau has-checked:text-macula has-checked:hover:bg-eigengrau"
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
                  outline-transparent
                  has-active:transition-transform has-active:ring-2 has-active:ring-eigengrau has-active:ring-offset-2
                  has-checked:transition-transform has-checked:ring-0 has-checked:bg-eigengrau has-checked:text-macula has-checked:hover:bg-eigengrau"
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

									has-active:transition-transform has-active:ring-2 has-active:ring-eigengrau has-active:ring-offset-2
			            has-checked:transition-transform has-checked:ring-0 has-checked:bg-eigengrau has-checked:text-macula has-checked:hover:bg-eigengrau"
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

			<table class="table-auto border-collapse w-full">
				<!-- <caption>
            Optimal values of font size per platform
        </caption> -->
				<tbody>
					<tr class="border">
						<th scope="col" class="w-6/12 px-2 border text-left">Device</th>
						<th scope="col" class="hidden w-4/12 px-2 border text-right">OS font size, px</th>
						<th scope="col" class="w-6/12 px-2 border text-right">
							<span class="whitespace-wrap break-keep"> font-size </span>, CSS px
						</th>
					</tr>
					{#each Object.entries(devices) as [key, properties], index (key)}
						<tr class="border">
							<td class="px-2 border">
								{properties.name}
							</td>
							<td class="hidden px-2 border text-right">
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
	</div>
</div>
