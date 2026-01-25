<script>
	import { T } from '@threlte/core';
	import { Spring } from 'svelte/motion';

	/**
	 * Responsive Point of View Camera
	 *
	 * Simulates the physical viewing relationship: the camera distance from the anchor
	 * varies to reflect the eye's distance from the screen at each breakpoint.
	 * FOV is calculated so the smallest screen side matches the target angular size.
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
		/** The point the camera looks at */
		anchor = [0, 0, 0],
		/** Direction from anchor to camera (will be normalized) */
		direction = [0, 0, -1],
		/** Scale factor to convert eye distance (cm) to scene units */
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

	const fovSpring = new Spring(currentFov, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(currentDistance, { stiffness: 0.1, damping: 0.8 });

	function getBreakpoint(width, height) {
		const isTabletOrLarger = width >= BREAKPOINTS.tablet && height >= BREAKPOINTS.tablet;

		if (!isTabletOrLarger) return 'mobile';
		if (width >= BREAKPOINTS.desktop4k) return 'desktop4k';
		if (width >= BREAKPOINTS.desktop) return 'desktop';
		if (width >= BREAKPOINTS.laptop) return 'laptop';
		return 'tablet';
	}

	function normalize(v) {
		const len = Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
		return [v[0] / len, v[1] / len, v[2] / len];
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

		fovSpring.target = currentFov;
		distanceSpring.target = currentDistance;
	}

	const normalizedDirection = $derived(normalize(direction));

	const position = $derived([
		anchor[0] + normalizedDirection[0] * distanceSpring.current,
		anchor[1] + normalizedDirection[1] * distanceSpring.current,
		anchor[2] + normalizedDirection[2] * distanceSpring.current
	]);

	$effect(() => {
		updateCamera();
		window.addEventListener('resize', updateCamera);
		return () => window.removeEventListener('resize', updateCamera);
	});
</script>

<T.PerspectiveCamera
	makeDefault
	fov={fovSpring.current}
	position={position}
	oncreate={(ref) => {
		ref.lookAt(...anchor);
	}}
	{...rest}
/>
