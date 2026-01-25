<script>
	/**
	 * 3D Scene demonstrating Responsive Point of View (RPoV) camera system.
	 *
	 * Features:
	 * - RPoVCamera: Camera FOV, distance, and gaze angle adjust based on device breakpoints
	 *   to match real-world viewing conditions (eye distance, display angular size, head tilt)
	 * - TrueHorizon: Visual horizon line at eye level, positioned based on gaze angle
	 * - SceneBox: Frustum visualization with responsive grid walls aligned to camera view
	 * - Interactive ball: Click to animate toward screen with deformation
	 *   (no vertex crosses the screen plane at z=0)
	 * - Two-phase animation: linear motion until collision, cubic ease during deformation
	 */

	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import * as THREE from 'three';

	import RPoVCamera from './RPoVCamera.svelte';
	import SceneBox from './SceneBox.svelte';
	import TrueHorizon from './TrueHorizon.svelte';

	let { gazeAngle = $bindable(0) } = $props();

	interactivity();

	// Device breakpoints (pixels) - matches CSS breakpoints
	const BREAKPOINTS = {
		tablet: 507,
		laptop: 1200,
		desktop: 1537,
		desktop4k: 2049
	};

	// Eye-to-screen distance (cm) per device type
	const eyeDistance = {
		mobile: 30,
		tablet: 45,
		laptop: 54,
		desktop: 63.5,
		desktop4k: 63.5
	};

	// Eye height above floor (cm)
	const eyeHeight = 175;

	// Convert real-world cm to scene units (1cm = 0.01 units)
	const distanceScale = 0.01;

	// Tennis ball radius: 3.35cm = 0.0335 scene units
	const ballRadius = 0.0335;

	// Ball touches screen when center is at z = radius
	const collisionPoint = ballRadius;

	// Final position: center penetrates 0.25 radius into screen
	const targetZ = ballRadius * 0.75;

	// Display angular size (degrees) of smallest screen dimension per device
	const smallestSideAngle = {
		mobile: 12,
		tablet: 20,
		laptop: 20,
		desktop: 25,
		desktop4k: 25
	};

	let viewingDistance = $state(eyeDistance.mobile * distanceScale);
	let frustumHalfHeight = $state(0);
	let horizonY = $state(eyeHeight * distanceScale);
	let lookAtY = $derived(
		eyeHeight * distanceScale + Math.sin(toRadians(gazeAngle)) * viewingDistance
	);

	function toRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	function calculateVerticalFov(viewportWidth, viewportHeight, targetSmallestAngle) {
		if (viewportHeight <= viewportWidth) {
			return targetSmallestAngle;
		} else {
			const aspectRatio = viewportWidth / viewportHeight;
			const horizontalFovRad = toRadians(targetSmallestAngle);
			return (2 * Math.atan(Math.tan(horizontalFovRad / 2) / aspectRatio) * 180) / Math.PI;
		}
	}

	// Ball animation state
	let ballAtScreen = $state(false);
	let ballZ = $state(viewingDistance);
	let animating = $state(false);
	let animationStart = $state(0);
	let animationFrom = $state(viewingDistance);
	let animationTo = $state(viewingDistance);

	// Animation parameters
	const linearSpeed = 2.0; // units per second (linear phase)
	const collisionDuration = 0.3; // seconds for cubic deceleration during collision

	function cubicEaseOut(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	function cubicEaseIn(t) {
		return Math.pow(t, 3);
	}

	function toggleBallPosition() {
		ballAtScreen = !ballAtScreen;
		animating = true;
		animationStart = performance.now();
		animationFrom = ballZ;
		animationTo = ballAtScreen ? targetZ : viewingDistance;
	}

	function animateBall(now) {
		if (!animating) return;

		const movingToScreen = animationTo < animationFrom;

		if (movingToScreen) {
			// Moving toward screen: linear until collision, then cubic
			const linearDistance = animationFrom - collisionPoint;
			const collisionDistance = collisionPoint - targetZ;
			const linearDuration = linearDistance / linearSpeed;

			const elapsed = (now - animationStart) / 1000;

			if (elapsed < linearDuration) {
				// Linear phase
				const t = elapsed / linearDuration;
				ballZ = animationFrom - linearDistance * t;
			} else {
				// Cubic phase
				const collisionElapsed = elapsed - linearDuration;
				const t = Math.min(collisionElapsed / collisionDuration, 1);
				ballZ = collisionPoint - collisionDistance * cubicEaseOut(t);

				if (t >= 1) {
					ballZ = targetZ;
					animating = false;
				}
			}
		} else {
			// Moving away from screen: cubic until collision point, then linear
			const collisionDistance = collisionPoint - animationFrom;
			const linearDistance = animationTo - collisionPoint;
			const linearDuration = linearDistance / linearSpeed;

			const elapsed = (now - animationStart) / 1000;

			if (elapsed < collisionDuration) {
				// Cubic phase (ease in - starts slow)
				const t = elapsed / collisionDuration;
				ballZ = animationFrom + collisionDistance * cubicEaseIn(t);
			} else {
				// Linear phase
				const linearElapsed = elapsed - collisionDuration;
				const t = Math.min(linearElapsed / linearDuration, 1);
				ballZ = collisionPoint + linearDistance * t;

				if (t >= 1) {
					ballZ = animationTo;
					animating = false;
				}
			}
		}
	}

	function getBreakpoint(width, height) {
		const isTabletOrLarger = width >= BREAKPOINTS.tablet && height >= BREAKPOINTS.tablet;
		if (!isTabletOrLarger) return 'mobile';
		if (width >= BREAKPOINTS.desktop4k) return 'desktop4k';
		if (width >= BREAKPOINTS.desktop) return 'desktop';
		if (width >= BREAKPOINTS.laptop) return 'laptop';
		return 'tablet';
	}

	function updateDistance() {
		if (typeof window === 'undefined') return;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isLandscape = viewportWidth >= viewportHeight;

		const screenMin = Math.min(window.screen.width, window.screen.height);
		const screenMax = Math.max(window.screen.width, window.screen.height);
		const screenWidth = isLandscape ? screenMax : screenMin;
		const screenHeight = isLandscape ? screenMin : screenMax;

		const breakpoint = getBreakpoint(screenWidth, screenHeight);
		viewingDistance = eyeDistance[breakpoint] * distanceScale;

		// Calculate frustum height for light positioning
		const targetAngle = smallestSideAngle[breakpoint];
		const verticalFov = calculateVerticalFov(viewportWidth, viewportHeight, targetAngle);
		const halfVAngle = toRadians(verticalFov) / 2;
		frustumHalfHeight = Math.tan(halfVAngle) * viewingDistance;

		// Update ball position if it's at the initial position and not animating
		if (!ballAtScreen && !animating) {
			ballZ = viewingDistance;
		}
	}

	$effect(() => {
		updateDistance();
		window.addEventListener('resize', updateDistance);
		return () => window.removeEventListener('resize', updateDistance);
	});

	// Create sphere geometry with stored original positions
	const sphereGeometry = new THREE.SphereGeometry(ballRadius, 256, 256);
	const originalPositions = sphereGeometry.attributes.position.array.slice();

	// Create gradient map for toon shading with more bands
	function createGradientMap(steps = 2) {
		const colors = new Uint8Array(steps);
		for (let i = 0; i < steps; i++) {
			colors[i] = Math.round((i / (steps - 1)) * 255);
		}
		const texture = new THREE.DataTexture(colors, steps, 1, THREE.RedFormat);
		texture.needsUpdate = true;
		texture.magFilter = THREE.NearestFilter;
		texture.minFilter = THREE.NearestFilter;
		return texture;
	}

	const gradientMap = createGradientMap(4);

	// Floor zone circles (meters to scene units: 1m = 100cm * 0.01 = 1 unit)
	const yellowZone = new THREE.CircleGeometry(2, 64); // 2m radius
	const redZone = new THREE.CircleGeometry(30, 64); // 30m radius
	const blueZone = new THREE.CircleGeometry(100, 64); // 100m radius

	// Deform sphere so no vertex crosses z=0 in world space
	function deformSphere(ballZPos) {
		const positions = sphereGeometry.attributes.position.array;
		for (let i = 0; i < positions.length; i += 3) {
			const originalZ = originalPositions[i + 2];
			const minLocalZ = -ballZPos;
			positions[i] = originalPositions[i];
			positions[i + 1] = originalPositions[i + 1];
			positions[i + 2] = Math.max(originalZ, minLocalZ);
		}
		sphereGeometry.attributes.position.needsUpdate = true;
		sphereGeometry.computeVertexNormals();
	}

	useTask(() => {
		animateBall(performance.now());
		deformSphere(ballZ);
	});
</script>

<!-- Responsive camera: FOV, distance, and gaze angle adapt to device viewing conditions -->
<RPoVCamera anchor={[0, 0, 0]} bind:gazeAngle />

<!-- True horizon line at eye level -->
<TrueHorizon onHorizonChange={(y) => (horizonY = y)} opacity={0.5} />

<!-- Frustum visualization: 5 grid walls forming the view volume -->
<SceneBox anchor={[0, 0, 0]} opacity={0.5} />

<!-- Lighting: three-quarter key light + fill from behind camera -->
<T.DirectionalLight
	position={[viewingDistance * 0.7, horizonY + viewingDistance, -viewingDistance * 0.5]}
	intensity={1}
/>
<T.PointLight position={[0, horizonY, -2 * viewingDistance]} intensity={0.5} />

<!-- Invisible screen plane at z=0 (collision boundary) -->
<T.Mesh position.y={lookAtY} position.x={0} position.z={0}>
	<T.PlaneGeometry args={[1.6, 0.9]} />
	<T.MeshStandardMaterial visible={false} transparent={true} opacity={0.125} color="white" />
</T.Mesh>

<!-- Interactive ball: click to toggle position, deforms against screen plane -->
<T.Mesh
	castShadow
	position={[0, lookAtY, ballZ]}
	onclick={toggleBallPosition}
	geometry={sphereGeometry}
>
	<T.MeshToonMaterial color="white" {gradientMap} />
</T.Mesh>

<!-- Floor plane at Y=0 (200x200 units = 200m x 200m) -->
<T.Mesh position.y={0} rotation.x={-Math.PI / 2} receiveShadow>
	<T.PlaneGeometry args={[200, 200]} />
	<T.MeshStandardMaterial color="#1a1a1a" />
</T.Mesh>

<!-- Floor zone circles (layered: blue bottom, red middle, yellow top) -->
<T.Mesh position.y={0.001} rotation.x={-Math.PI / 2} geometry={blueZone}>
	<T.MeshBasicMaterial color="blue" />
</T.Mesh>
<T.Mesh position.y={0.002} rotation.x={-Math.PI / 2} geometry={redZone}>
	<T.MeshBasicMaterial color="red" />
</T.Mesh>
<T.Mesh position.y={0.003} rotation.x={-Math.PI / 2} geometry={yellowZone}>
	<T.MeshBasicMaterial color="yellow" />
</T.Mesh>
