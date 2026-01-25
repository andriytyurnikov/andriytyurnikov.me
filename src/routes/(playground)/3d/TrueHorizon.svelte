<script>
	import { T } from '@threlte/core';
	import { Spring } from 'svelte/motion';
	import * as THREE from 'three';

	/**
	 * TrueHorizon - Calculates and optionally displays the true horizon line
	 *
	 * The horizon represents eye level in the real world. When looking down at a device,
	 * the horizon appears above the screen center. This component:
	 * 1. Calculates horizon Y position based on gaze angle and viewing distance
	 * 2. Optionally renders a visible horizon line
	 * 3. Exports horizonY for scene content alignment
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
		/** Gaze angle in degrees (negative = looking down, positive = looking up) */
		gazeAngle = {
			mobile: -45,
			tablet: -30,
			laptop: -15,
			desktop: -15,
			desktop4k: -15
		},
		/** Eye height above floor in centimeters */
		eyeHeight = 175,
		/** Scale factor to convert distances (cm) to scene units */
		distanceScale = 0.01,
		/** Whether to show the horizon line visually */
		visible = true,
		/** Color of the horizon line */
		color = '#ffffff',
		/** Opacity of the horizon line */
		opacity = 0.3,
		/** Width of the horizon line (will be clipped to frustum) */
		lineWidth = 10,
		/** Callback to receive current horizon Y value */
		onHorizonChange = (y) => {},
		...rest
	} = $props();

	const BREAKPOINTS = {
		tablet: 507,
		laptop: 1200,
		desktop: 1537,
		desktop4k: 2049
	};

	let currentDistance = $state(eyeDistance.mobile * distanceScale);
	let currentGazeAngle = $state(gazeAngle.mobile);

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

	function update() {
		if (typeof window === 'undefined') return;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isLandscape = viewportWidth >= viewportHeight;

		const screenMin = Math.min(window.screen.width, window.screen.height);
		const screenMax = Math.max(window.screen.width, window.screen.height);
		const screenWidth = isLandscape ? screenMax : screenMin;
		const screenHeight = isLandscape ? screenMin : screenMax;

		const breakpoint = getBreakpoint(screenWidth, screenHeight);

		currentDistance = eyeDistance[breakpoint] * distanceScale;
		currentGazeAngle = gazeAngle[breakpoint];

		distanceSpring.target = currentDistance;
		gazeSpring.target = currentGazeAngle;
	}

	// Horizon Y = eye level = camera's Y position
	const horizonY = $derived(eyeHeight * distanceScale);

	// Notify parent of horizon changes
	$effect(() => {
		onHorizonChange(horizonY);
	});

	// Create horizon line geometry
	const horizonGeometry = $derived.by(() => {
		const points = [
			new THREE.Vector3(-lineWidth / 2, 0, 0),
			new THREE.Vector3(lineWidth / 2, 0, 0)
		];
		return new THREE.BufferGeometry().setFromPoints(points);
	});

	$effect(() => {
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

{#if visible}
	<!-- Horizon line at eye level -->
	<T.LineSegments position={[0, horizonY, 0]} geometry={horizonGeometry}>
		<T.LineBasicMaterial {color} transparent {opacity} />
	</T.LineSegments>
{/if}
