<script>
	/**
	 * 3D Scene demonstrating Responsive Point of View (RPoV) camera system.
	 *
	 * Features:
	 * - RPoVCamera: Camera FOV and distance adjust based on device breakpoints
	 *   to match real-world viewing conditions (eye distance, display angular size)
	 * - SceneBox: Frustum visualization with responsive grid walls aligned to camera view
	 * - Interactive ball: Click to animate toward screen with deformation
	 *   (no vertex crosses the reality membrane at z=0)
	 * - Two-phase animation: linear motion until collision, cubic ease during deformation
	 */

	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import * as THREE from 'three';

	import RPoVCamera from './RPoVCamera.svelte';
	import SceneBox from './SceneBox.svelte';
	import { ballPositionAt, planBallMotion } from './ball-motion.js';
	import { detectBreakpoint, VIEWING_DISTANCE_CM } from './rpov-utils.js';

	interactivity();

	// Convert real-world cm to scene units (1cm = 0.01 units)
	const distanceScale = 0.01;

	// Tennis ball radius: 3.35cm = 0.0335 scene units
	const ballRadius = 0.0335;

	// Ball touches screen when center is at z = radius
	const collisionPoint = ballRadius;

	// Final position: center penetrates 0.125 radius into membrane
	const targetZ = ballRadius * 0.875;

	let viewingDistance = $state(VIEWING_DISTANCE_CM.mobile * distanceScale);

	// Ball animation state
	let ballAtScreen = $state(false);
	let ballZ = $state(viewingDistance);
	let animating = $state(false);
	/** @type {import('./ball-motion.js').Segment[]} */
	let motion = [];
	let motionStart = 0;

	// Animation parameters
	const motionOptions = {
		collisionZ: collisionPoint,
		squashedZ: targetZ,
		speed: 2.0, // units per second (linear phase)
		squashDuration: 0.3 // seconds for cubic deceleration during collision
	};

	function toggleBallPosition() {
		ballAtScreen = !ballAtScreen;
		// Plan from wherever the ball is, so a click mid-flight reverses it
		motion = planBallMotion(ballZ, ballAtScreen ? targetZ : viewingDistance, motionOptions);
		motionStart = performance.now();
		animating = motion.length > 0;
	}

	function animateBall(now) {
		if (!animating) return;

		const { z, done } = ballPositionAt(motion, (now - motionStart) / 1000);
		ballZ = z;
		if (done) animating = false;
	}

	function updateDistance() {
		if (typeof window === 'undefined') return;

		const breakpoint = detectBreakpoint();
		viewingDistance = VIEWING_DISTANCE_CM[breakpoint] * distanceScale;

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
	const sphereGeometry = new THREE.SphereGeometry(ballRadius, 128, 128);
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

	const gradientMap = createGradientMap(3);

	$effect(() => {
		return () => {
			sphereGeometry.dispose();
			gradientMap.dispose();
		};
	});

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

	// Whether the sphere still carries a deformation from an earlier frame
	let deformed = false;

	useTask(
		() => {
			animateBall(performance.now());
			// Only deform when ball center is within one radius of z=0
			if (ballZ <= ballRadius) {
				deformSphere(ballZ);
				deformed = true;
			} else if (deformed) {
				sphereGeometry.attributes.position.array.set(originalPositions);
				sphereGeometry.attributes.position.needsUpdate = true;
				sphereGeometry.computeVertexNormals();
				deformed = false;
			}
		},
		// The ball only changes while it animates; a running task makes Threlte
		// render every frame, so it runs only then.
		{ running: () => animating }
	);
</script>

<!-- Responsive camera: FOV and distance adapt to device viewing conditions -->
<RPoVCamera anchor={[0, 0, 0]} />

<!-- Frustum visualization: grid walls forming the view volume -->
<SceneBox anchor={[0, 0, 0]} opacity={0.5} />

<!-- Hemisphere: bright from above, dark from below -->
<T.HemisphereLight args={['#ffffff', '#000000', 0.6]} />
<!-- Directional for form/toon bands - behind membrane -->
<T.DirectionalLight position={[0.5, 1, 0.5]} intensity={0.8} />
<!-- Rim light for edge separation against dark background -->
<T.DirectionalLight position={[0, 0, 1]} intensity={0.4} />

<!-- Interactive ball: click to toggle position, deforms against reality membrane -->
<T.Mesh castShadow position={[0, 0, ballZ]} onclick={toggleBallPosition} geometry={sphereGeometry}>
	<T.MeshToonMaterial color="white" {gradientMap} />
</T.Mesh>
