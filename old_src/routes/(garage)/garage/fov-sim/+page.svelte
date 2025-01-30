<script>
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	
	import DeviceRectangle from './DeviceRectangle.svelte';
	
	const DEVICES = {
		'iphone-se' : { 
			'deviceWidthMM' : 58.59, 
			'deviceHeightMM' : 104.21, 
			'deviceDistanceMM' : 250
		},
		'iphone-14' : { 
			'deviceWidthMM' : 64.58,
			'deviceHeightMM' : 139.76, 
			'deviceDistanceMM' : 250
		},
		'ipad-9' : { 
			'deviceWidthMM' : 155.76,
			'deviceHeightMM' : 207.69, 
			'deviceDistanceMM' : 380
		},
		'macbook-air' : { 
			'deviceWidthMM' : 290.90,
			'deviceHeightMM' : 189.09, 
			'deviceDistanceMM' : 510
		},
		'imac-24' : { 
			'deviceWidthMM' : 520.93,
			'deviceHeightMM' : 293.02,  
			'deviceDistanceMM' : 635 //510 //635, 890
		},
	};
	
	// angular diameters
	// 0.2 - 0.4
	// 1-1.2 (2-3)
	// 1.5 ?
	// 3-5 (2-3)
	// 15-18 (3-6) -- 15 degrees diameter
	// 30 (1.5-2)
	// 1/16 - 1/8 - 1/4r - 1/2 - 1
  // 30   - 14  - 6   - 2  - 0.6
	//
	// 1-3-3-4-2
	// 1-3-3-3-3
	// 1-4-4-4-1.5
	// 1.5-5-8
	// 1-3-3-3-2-2
	// (0.4 - 1.2 - 1.5) - 4 - 12 - 28 - 60 (accuity halving diameters)
  //             1 - 1/2 - 1/4r - 1/8 - 1/16
  //             1   2X    4X    8X    16X
	//plasma  #f0f921 - #f9dc24 - #fca636 - #d35171 - #0d0887
	//viridis #fde725 - #1f948c - #23888e - #481a6c - #440154
	// 60 degrees diameter = 30 degrees exentricity = 1/16 of foveal accuity
	let zoomFactor = 1.0;
	let deviceAngle = 0;
	
	function selectDevice(name) {
		
		let selectedDevice = DEVICES[name]
		
		deviceWidthMM = selectedDevice['deviceWidthMM']
		tweenedDeviceWidthMM.set(selectedDevice['deviceWidthMM'])

		deviceHeightMM = selectedDevice['deviceHeightMM']
		tweenedDeviceHeightMM.set(selectedDevice['deviceHeightMM'])
		
		deviceDistanceMM = selectedDevice['deviceDistanceMM']
		tweenedDeviceDistanceMM.set(selectedDevice['deviceDistanceMM'])
		
		tweenedDeviceAngle.set(0)
		deviceAngle = 0;
	}
	
	function rotateDevice() {
		if(deviceAngle == 0) {
			tweenedDeviceAngle.set(deviceAngle + 90 )
			deviceAngle = deviceAngle + 90
		} else {
			tweenedDeviceAngle.set(deviceAngle - 90)
			deviceAngle = deviceAngle - 90
		}
		
		let tmp = deviceWidthMM
	 	deviceWidthMM = deviceHeightMM
		deviceHeightMM = tmp
	}
	
	function truncate_float(length, number) {
		let base = Math.pow(10, length)
		return Math.round(base * number)/base;
	}
	
	function derive_angular_size_in_degrees(phisical_size, viewing_distance) {
		return 57.3 * phisical_size / viewing_distance;
	}
		
	let deviceWidthMM = 58.59;
	let deviceHeightMM = 104.21;
	let deviceDistanceMM = 250;
	
	const tweenedDeviceWidthMM = tweened(deviceWidthMM, {
		duration: 150,
		easing: linear
	});
	
	const tweenedDeviceHeightMM = tweened(deviceHeightMM, {
		duration: 150,
		easing: linear
	});
	
	const tweenedDeviceDistanceMM = tweened(deviceDistanceMM, {
		duration: 150,
		easing: linear
	});
	
	const tweenedDeviceAngle = tweened(deviceAngle, {
		duration: 250,
		easing: linear
	});
	
	$: angularDeviceWidth = derive_angular_size_in_degrees($tweenedDeviceWidthMM, $tweenedDeviceDistanceMM);
	$: angularDeviceHeight = derive_angular_size_in_degrees($tweenedDeviceHeightMM, $tweenedDeviceDistanceMM);

</script>

<h1>Devices in the field of view:</h1>

<section>

<svg viewBox="0 0 100 60">
	<defs>
		<radialGradient id="retinaGradientExtendedViridis" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fde725" />
			<stop offset="1.388%" stop-color="#fde725" />
      <stop offset="4.1666%" stop-color="#1f948c" />
			<stop offset="12.5%" stop-color="#23888e" />
			<stop offset="29.16%" stop-color="#481a6c" />
			<stop offset="62.5%" stop-color="#440154" />
			<stop offset="100%" stop-color="#16161d" />
    </radialGradient>

		<radialGradient id="retinaGradientExtendedPlasma" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f0f921" />
			<stop offset="1.388%" stop-color="#f0f921" />
      <stop offset="4.1666%" stop-color="#c33d80" />
			<stop offset="12.5%" stop-color="#6a00a8" />
			<stop offset="29.16%" stop-color="#330597" />
			<stop offset="62.5%" stop-color="#0d0887" />
			<stop offset="100%" stop-color="#16161d" />
    </radialGradient>
		
		<radialGradient id="retinaGradientExtendedInferno" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fcffa4" />
			<stop offset="1.388%" stop-color="#fcffa4" />
      <stop offset="4.1666%" stop-color="#b43359" />
			<stop offset="12.5%" stop-color="#4c0c6b" />
			<stop offset="29.16%" stop-color="#150b37" />
			<stop offset="62.5%" stop-color="#040312" />
			<stop offset="100%" stop-color="#000004" />
    </radialGradient>
		
		<radialGradient id="retinaGradientExtendedPlasma" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f0f921" />
			<stop offset="1.388%" stop-color="#f0f921" />
      <stop offset="4.1666%" stop-color="#f9dc24" />
			<stop offset="12.5%" stop-color="#fca636" />
			<stop offset="29.16%" stop-color="#d35171" />
			<stop offset="62.5%" stop-color="#0d0887" />
			<stop offset="100%" stop-color="#16161d" />
    </radialGradient>
		
    <radialGradient id="retinaGradient" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fde725" />
			<stop offset="2.22%" stop-color="#d2e21b" />
			<stop offset="4.44%" stop-color="#a5db36" />
      <stop offset="6.6666%" stop-color="#7ad151" />
			<stop offset="20%" stop-color="#22a884" />
			<stop offset="46.6666%" stop-color="#2a788e" />
			<stop offset="100%" stop-color="#414487" />
			<stop offset="160%" stop-color="#440154" />
    </radialGradient>
		
		<radialGradient id="retinaGradientExtended" spreadMethod="pad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fde725" />
			<stop offset="1.388%" stop-color="#d2e21b" />
			<stop offset="2.777%" stop-color="#a5db36" />
      <stop offset="4.1666%" stop-color="#7ad151" />
			<stop offset="12.5%" stop-color="#22a884" />
			<stop offset="29.16%" stop-color="#2a788e" />
			<stop offset="62.5%" stop-color="#414487" />
			<stop offset="100%" stop-color="#440154" />
    </radialGradient>
  </defs>
	
	<rect 
		x="-{50* zoomFactor}" 
		y="-{50* zoomFactor}" 
		width="{100 * zoomFactor}" 
		height="{100* zoomFactor}" 
		fill="url('#retinaGradientExtendedInferno')" 
		transform="translate(50,30)" 
	/>
	
	<circle 
		stroke="#440154"
		stroke-dasharray="1,2"
		stroke-width="0.25" 
		cx="50%" 
		cy="50%" 
		r="{60 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#414487" 
		stroke-dasharray="1,2"
		stroke-width="0.125" 
		cx="50%" 
		cy="50%" 
		r="{28 /2 * zoomFactor}" 
		fill="none" 
	/>

	<circle 
		stroke="#2a788e"
		stroke-dasharray="1,6"
		stroke-width="0.125"
		cx="50%" 
		cy="50%" 
		r="{20 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#2a788e"
		stroke-dasharray="1,2"
		stroke-width="0.125" 
		cx="50%" 
		cy="50%" 
		r="{12 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#22a884"
		stroke-width="0.1" 
		cx="50%" 
		cy="50%" 
		r="{4 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#7ad151" 
		stroke-width="0.0125" 
		cx="50%" 
		cy="50%" 
		r="{1.5 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#a5db36" 
		stroke-width="0.0125" 
		cx="50%" 
		cy="50%" 
		r="{1.2 /2 * zoomFactor}" 
		fill="none" 
	/>
	
	<circle 
		stroke="#d2e21b" 
		stroke-width="0.0125" 
		cx="50%" 
		cy="50%" 
		r="{0.4 /2 * zoomFactor}" 
		fill="none" 
	/>

	<!-- square with 24.8136deg side -->
	<!-- <rect 
		stroke="#fcffa4"
		stroke-width="0.06125"
		transform="translate(50, 30) scale({zoomFactor})"
		x="-{24.8136/2}"
		y="-{24.8136/2}"
		width="{24.8136}"
		height="{24.8136}"
		fill="none" opacity="0.75" >
	</rect> -->

	<!-- square with 19.8deg side -->
	<!-- <rect 
		stroke="#fcffa4"
		stroke-width="0.06125"
		transform="translate(50, 30) scale({zoomFactor})"
		x="-{19.8/2}"
		y="-{19.8/2}"
		width="{19.8}"
		height="{19.8}"
		fill="none" opacity="0.75" >
	</rect> -->
		
	<rect 
		stroke="#fcffa4"
		stroke-width="0.06125" 
		transform="translate(50, 30) rotate( {$tweenedDeviceAngle} ) scale({zoomFactor})" 
		x="-{angularDeviceWidth/2}" 
		y="-{angularDeviceHeight/2}" 
		width="{angularDeviceWidth}" 
		height="{angularDeviceHeight}" 
		fill="none" opacity="0.75" >
	</rect>
</svg>

<label>
	Zoom: 
		<input type="number" min="1" max="6" step="0.01" bind:value={zoomFactor}/> 
		<input type="range"  min="1" max="6" step="0.01" bind:value={zoomFactor}/>
</label>

<button on:click={rotateDevice}>Rotate</button>

	<div>Presets:
		<button on:click={ (e) => selectDevice('iphone-se') }>iPhone SE</button>		
		<button on:click={ (e) => selectDevice('iphone-14') }>iPhone 14</button>		
		<button on:click={ (e) => selectDevice('ipad-9') }>iPad 9</button> 			
		<button on:click={ (e) => selectDevice('macbook-air') }>MacBook Air</button> 
		<button on:click={ (e) => selectDevice('imac-24') }>iMac 24</button>
	</div>

<fieldset>
	<legend>Device's screen</legend>
	<label>
		Width, mm: 
		<input type="number" min="1" max="1000" step="1" bind:value={$tweenedDeviceWidthMM} /> 
		<input type="range"  min="1" max="1000" step="0.1" bind:value={$tweenedDeviceWidthMM} />
		[{truncate_float(2, angularDeviceWidth)}&deg;]
	</label>
	<br/>
	<label>
		Height, mm: 
		<input type="number" min="1" max="1000" step="1" bind:value={$tweenedDeviceHeightMM}/> 
		<input type="range"  min="1" max="1000" step="1" bind:value={$tweenedDeviceHeightMM}/>
		[{truncate_float(2, angularDeviceHeight)}&deg;]
	</label>
	<br/>
	<label>
		Distance, mm: 
		<input type="number" min="10" max="1000" step="1" bind:value={$tweenedDeviceDistanceMM}/> 
		<input type="range"  min="10" max="1000" step="1" bind:value={$tweenedDeviceDistanceMM}/>
	</label>
</fieldset>

</section>


<style>
	h1 {
		text-align: center;
	}
	
	svg {
		width: 100%;
		height: auto;
	}
	
	section {
		margin: auto;
		width: 640px;
	}	
</style>