<script>
	import { T, useTask } from '@threlte/core';
	import { Spring } from 'svelte/motion';

	/**
	 * Responsive Point of View Camera
	 *
	 * Simulates the physical viewing relationship:
	 * - Camera positioned at eye height (default 175cm) above floor
	 * - Camera distance reflects eye-to-screen distance per device
	 * - FOV matches the display's angular size
	 * - Gaze angle tilts view (phones: -45°, desktops: -15°)
	 * - Camera eye level defines the true horizon
	 */

	let {
		/** Eye distance from screen in centimeters per breakpoint */
		eyeDistance = {
			mobile: 30,
			tablet: 45,
			laptop: 54,
			desktop: 63.5,
			desktop4k: 63.5
		},
		/** Angular size (degrees) of the smallest screen side per breakpoint */
		smallestSideAngle = {
			mobile: 12,
			tablet: 20,
			laptop: 20,
			desktop: 25,
			desktop4k: 25
		},
		/** Gaze angle in degrees (negative = looking down, positive = looking up) */
		gazeAngle = {
			mobile: -45,
			tablet: -30,
			laptop: -15,
			desktop: -15,
			desktop4k: -15
		},
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

	let currentFov = $state(smallestSideAngle.mobile);
	let currentDistance = $state(eyeDistance.mobile * distanceScale);
	let currentGazeAngle = $state(gazeAngle.mobile);

	const fovSpring = new Spring(currentFov, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(currentDistance, { stiffness: 0.1, damping: 0.8 });
	const gazeSpring = new Spring(currentGazeAngle, { stiffness: 0.1, damping: 0.8 });

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
	 * Calculate vertical FOV so that the smallest screen side has the target angular size.
	 * PerspectiveCamera FOV is always vertical.
	 */
	function calculateVerticalFov(width, height, targetSmallestAngle) {
		const aspectRatio = width / height;

		if (height <= width) {
			// Landscape or square: height is smallest, so vertical FOV = target
			return targetSmallestAngle;
		} else {
			// Portrait: width is smallest, so horizontal FOV = target
			// Calculate vertical FOV from horizontal FOV
			// horizontalFOV = 2 * atan(tan(verticalFOV/2) * aspectRatio)
			// Solving for verticalFOV: verticalFOV = 2 * atan(tan(horizontalFOV/2) / aspectRatio)
			const horizontalFovRad = toRadians(targetSmallestAngle);
			const verticalFovRad = 2 * Math.atan(Math.tan(horizontalFovRad / 2) / aspectRatio);
			return toDegrees(verticalFovRad);
		}
	}

	function updateCamera() {
		if (typeof window === 'undefined') return;

		// Use window dimensions for aspect ratio (actual rendered area)
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isLandscape = viewportWidth >= viewportHeight;

		// Screen dimensions may be reported in native orientation
		// Align them with current viewport orientation
		const screenMin = Math.min(window.screen.width, window.screen.height);
		const screenMax = Math.max(window.screen.width, window.screen.height);
		const screenWidth = isLandscape ? screenMax : screenMin;
		const screenHeight = isLandscape ? screenMin : screenMax;

		const breakpoint = getBreakpoint(screenWidth, screenHeight);

		const targetAngle = smallestSideAngle[breakpoint];
		currentFov = calculateVerticalFov(viewportWidth, viewportHeight, targetAngle);
		currentDistance = eyeDistance[breakpoint] * distanceScale;
		currentGazeAngle = gazeAngle[breakpoint];

		fovSpring.target = currentFov;
		distanceSpring.target = currentDistance;
		gazeSpring.target = currentGazeAngle;
	}

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
