<script>
	import { T, useTask } from '@threlte/core';
	import { Spring } from 'svelte/motion';

	/**
	 * Responsive Point of View Camera
	 *
	 * Achieves accurate scale perception by matching camera FOV to the angular size
	 * of the physical display as seen from typical viewing distance.
	 *
	 * FOV = 2 × atan(screenHeight / (2 × viewingDistance))
	 *
	 * - Camera positioned at eye height (default 175cm) above floor
	 * - FOV calculated from physical screen dimensions and viewing distance
	 * - Gaze angle tilts view (tunable, default 0°)
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
		/** Gaze angle in degrees (negative = looking down, positive = looking up) */
		gazeAngle = $bindable(0),
		/** The point the camera looks at (X and Z; Y is derived from eyeHeight and gaze) */
		anchor = [0, 0, 0],
		/** Eye height above floor in centimeters */
		eyeHeight = 175,
		/** Scale factor to convert distances (cm) to scene units */
		distanceScale = 0.01,
		...rest
	} = $props();

	const BREAKPOINTS = {
		tablet: 507,
		laptop: 1200,
		desktop: 1537,
		desktop4k: 2049
	};

	// Initialize with mobile values
	const initialFov = calculateFov(screenHeight.mobile, viewingDistance.mobile);
	let currentFov = $state(initialFov);
	let currentDistance = $state(viewingDistance.mobile * distanceScale);

	const fovSpring = new Spring(currentFov, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(currentDistance, { stiffness: 0.1, damping: 0.8 });
	const gazeSpring = new Spring(gazeAngle, { stiffness: 0.1, damping: 0.8 });

	function getBreakpoint(width, height) {
		const isTabletOrLarger = width >= BREAKPOINTS.tablet && height >= BREAKPOINTS.tablet;

		if (!isTabletOrLarger) return 'mobile';
		if (width >= BREAKPOINTS.desktop4k) return 'desktop4k';
		if (width >= BREAKPOINTS.desktop) return 'desktop';
		if (width >= BREAKPOINTS.laptop) return 'laptop';
		return 'tablet';
	}

	function toRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	function toDegrees(radians) {
		return (radians * 180) / Math.PI;
	}

	/**
	 * Calculate FOV from physical screen dimension and viewing distance.
	 * FOV = 2 × atan(screenDimension / (2 × viewingDistance))
	 */
	function calculateFov(screenDimension, distance) {
		return toDegrees(2 * Math.atan(screenDimension / (2 * distance)));
	}

	function updateCamera() {
		if (typeof window === 'undefined') return;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isLandscape = viewportWidth >= viewportHeight;

		// Detect breakpoint from screen dimensions
		const screenPixelMin = Math.min(window.screen.width, window.screen.height);
		const screenPixelMax = Math.max(window.screen.width, window.screen.height);
		const screenPixelWidth = isLandscape ? screenPixelMax : screenPixelMin;
		const screenPixelHeight = isLandscape ? screenPixelMin : screenPixelMax;

		const breakpoint = getBreakpoint(screenPixelWidth, screenPixelHeight);
		const distance = viewingDistance[breakpoint];

		// Get physical dimensions for current breakpoint
		// In portrait mode, swap width and height
		const physicalHeight = isLandscape ? screenHeight[breakpoint] : screenWidth[breakpoint];
		const physicalWidth = isLandscape ? screenWidth[breakpoint] : screenHeight[breakpoint];

		// Calculate vertical FOV from physical screen height
		// Adjust for viewport aspect ratio if viewport doesn't match full screen
		const viewportAspect = viewportWidth / viewportHeight;
		const screenAspect = physicalWidth / physicalHeight;

		// Scale physical height based on how much of the screen the viewport uses
		const viewportPhysicalHeight = physicalHeight * (viewportHeight / screenPixelHeight);

		currentFov = calculateFov(viewportPhysicalHeight, distance);
		currentDistance = distance * distanceScale;

		fovSpring.target = currentFov;
		distanceSpring.target = currentDistance;
	}

	// Update gaze spring when prop changes
	$effect(() => {
		gazeSpring.target = gazeAngle;
	});

	// Camera at eye height, looking in gaze direction
	const gazeRadians = $derived(toRadians(gazeSpring.current));
	const eyeHeightUnits = $derived(eyeHeight * distanceScale);

	const position = $derived([
		anchor[0],
		eyeHeightUnits,
		anchor[2] - Math.cos(gazeRadians) * distanceSpring.current
	]);

	// Look-at point derived from eye height and gaze angle
	const lookAt = $derived([
		anchor[0],
		eyeHeightUnits + Math.sin(gazeRadians) * distanceSpring.current,
		anchor[2]
	]);

	$effect(() => {
		updateCamera();
		window.addEventListener('resize', updateCamera);
		return () => window.removeEventListener('resize', updateCamera);
	});

	let cameraRef = $state(null);

	// Update camera lookAt every frame
	useTask(() => {
		if (cameraRef) {
			cameraRef.lookAt(...lookAt);
		}
	});
</script>

<T.PerspectiveCamera
	makeDefault
	bind:ref={cameraRef}
	fov={fovSpring.current}
	position={position}
	{...rest}
/>
