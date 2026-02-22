<script>
	import { T } from '@threlte/core';
	import { Spring } from 'svelte/motion';
	import { detectBreakpoint, toDegrees } from './rpov-utils.js';

	/**
	 * Responsive Point of View Camera
	 *
	 * Achieves accurate scale perception by matching camera FOV to the angular size
	 * of the physical display as seen from typical viewing distance.
	 *
	 * FOV = 2 × atan(screenHeight / (2 × viewingDistance))
	 *
	 * - Camera positioned at viewing distance from anchor point
	 * - FOV calculated from physical screen dimensions and viewing distance
	 */

	let {
		/** Physical screen height in centimeters per breakpoint (landscape orientation) */
		screenHeight = {
			mobile: 14, // ~6" phone in portrait (width becomes height in landscape)
			tablet: 18, // ~11" tablet
			laptop: 19, // ~14" laptop
			desktop: 34, // ~27" monitor
			desktop4k: 40 // ~32" monitor
		},
		/** Physical screen width in centimeters per breakpoint (landscape orientation) */
		screenWidth = {
			mobile: 7, // ~6" phone in portrait (height becomes width in landscape)
			tablet: 24, // ~11" tablet
			laptop: 30, // ~14" laptop
			desktop: 60, // ~27" monitor
			desktop4k: 70 // ~32" monitor
		},
		/** Eye-to-screen distance in centimeters per breakpoint */
		viewingDistance = {
			mobile: 30,
			tablet: 45,
			laptop: 54,
			desktop: 65,
			desktop4k: 70
		},
		/** The point the camera looks at */
		anchor = [0, 0, 0],
		/** Scale factor to convert distances (cm) to scene units */
		distanceScale = 0.01,
		...rest
	} = $props();

	/**
	 * Calculate FOV from physical screen dimension and viewing distance.
	 * FOV = 2 × atan(screenDimension / (2 × viewingDistance))
	 */
	function calculateFov(screenDimension, distance) {
		return toDegrees(2 * Math.atan(screenDimension / (2 * distance)));
	}

	const fovSpring = new Spring(calculateFov(screenHeight.mobile, viewingDistance.mobile), {
		stiffness: 0.1,
		damping: 0.8
	});
	const distanceSpring = new Spring(viewingDistance.mobile * distanceScale, {
		stiffness: 0.1,
		damping: 0.8
	});

	function updateCamera() {
		if (typeof window === 'undefined') return;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isLandscape = viewportWidth >= viewportHeight;

		const breakpoint = detectBreakpoint();
		const distance = viewingDistance[breakpoint];

		const physicalHeight = isLandscape ? screenHeight[breakpoint] : screenWidth[breakpoint];

		const screenPixelHeight = isLandscape
			? Math.min(window.screen.width, window.screen.height)
			: Math.max(window.screen.width, window.screen.height);
		const viewportPhysicalHeight = physicalHeight * (viewportHeight / screenPixelHeight);

		fovSpring.target = calculateFov(viewportPhysicalHeight, distance);
		distanceSpring.target = distance * distanceScale;
	}

	// Camera positioned at viewing distance from anchor, looking at anchor
	const position = $derived([anchor[0], anchor[1], anchor[2] - distanceSpring.current]);

	$effect(() => {
		updateCamera();
		window.addEventListener('resize', updateCamera);
		return () => window.removeEventListener('resize', updateCamera);
	});
</script>

<T.PerspectiveCamera
	makeDefault
	fov={fovSpring.current}
	{position}
	oncreate={(ref) => ref.lookAt(...anchor)}
	{...rest}
/>
