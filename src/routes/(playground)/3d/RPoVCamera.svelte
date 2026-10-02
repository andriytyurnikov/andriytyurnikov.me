<script>
	import { T } from '@threlte/core';
	import { Spring } from 'svelte/motion';
	import {
		detectBreakpoint,
		SCREEN_SIZE_CM,
		toDegrees,
		VIEWING_DISTANCE_CM,
		viewportHeightCm
	} from './rpov-utils.js';

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
		/** Physical screen size in centimeters per breakpoint (landscape orientation) */
		screenSize = SCREEN_SIZE_CM,
		/** Eye-to-screen distance in centimeters per breakpoint */
		viewingDistance = VIEWING_DISTANCE_CM,
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

	// Start from a full-screen phone in portrait, whose height is its landscape width
	const fovSpring = new Spring(calculateFov(screenSize.mobile.width, viewingDistance.mobile), {
		stiffness: 0.1,
		damping: 0.8
	});
	const distanceSpring = new Spring(viewingDistance.mobile * distanceScale, {
		stiffness: 0.1,
		damping: 0.8
	});

	function updateCamera() {
		if (typeof window === 'undefined') return;

		const breakpoint = detectBreakpoint();
		const distance = viewingDistance[breakpoint];

		const viewportPhysicalHeight = viewportHeightCm(screenSize[breakpoint], window.screen, {
			width: window.innerWidth,
			height: window.innerHeight
		});

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
