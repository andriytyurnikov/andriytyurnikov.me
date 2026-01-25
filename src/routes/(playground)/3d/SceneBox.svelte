<script>
	import { T } from '@threlte/core';
	import { Spring } from 'svelte/motion';
	import * as THREE from 'three';

	/**
	 * SceneBox - 4 planes at the edges of the camera frustum
	 * Creates a dynamic frame around the visible area with rectangular grids
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
		/** The point the camera looks at (and where planes intersect) */
		anchor = [0, 0, 0],
		/** Direction from anchor to camera (will be normalized) */
		direction = [0, 0, -1],
		/** Scale factor to convert eye distance (cm) to scene units */
		distanceScale = 0.01,
		/** Color of the grid lines */
		color = '#ffffff',
		/** Opacity of the grid lines */
		opacity = 0.1,
		/** Number of cells across the width */
		cellsAcross = 6,
		/** Number of cells along the depth */
		cellsDepth = 6,
		...rest
	} = $props();

	const BREAKPOINTS = {
		tablet: 507,
		laptop: 1200,
		desktop: 1537,
		desktop4k: 2049
	};

	let verticalFov = $state(smallestSideAngle.mobile);
	let horizontalFov = $state(smallestSideAngle.mobile);
	let distance = $state(eyeDistance.mobile * distanceScale);
	let planeDepth = $state(distance * 2);

	const vFovSpring = new Spring(verticalFov, { stiffness: 0.1, damping: 0.8 });
	const hFovSpring = new Spring(horizontalFov, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(distance, { stiffness: 0.1, damping: 0.8 });
	const depthSpring = new Spring(planeDepth, { stiffness: 0.1, damping: 0.8 });

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

	function calculateFovs(viewportWidth, viewportHeight, targetSmallestAngle) {
		const aspectRatio = viewportWidth / viewportHeight;

		if (viewportHeight <= viewportWidth) {
			const vFov = targetSmallestAngle;
			const hFov =
				(2 * Math.atan(Math.tan(toRadians(vFov) / 2) * aspectRatio) * 180) / Math.PI;
			return { vFov, hFov };
		} else {
			const hFov = targetSmallestAngle;
			const vFov =
				(2 * Math.atan(Math.tan(toRadians(hFov) / 2) / aspectRatio) * 180) / Math.PI;
			return { vFov, hFov };
		}
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

		const targetAngle = smallestSideAngle[breakpoint];
		const { vFov, hFov } = calculateFovs(viewportWidth, viewportHeight, targetAngle);

		verticalFov = vFov;
		horizontalFov = hFov;
		distance = eyeDistance[breakpoint] * distanceScale;
		planeDepth = distance * 2;

		vFovSpring.target = verticalFov;
		hFovSpring.target = horizontalFov;
		distanceSpring.target = distance;
		depthSpring.target = planeDepth;
	}

	/**
	 * Create a rectangular grid geometry (no diagonals)
	 * @param {number} width - Width of the grid
	 * @param {number} height - Height of the grid
	 * @param {number} segmentsX - Number of cells horizontally
	 * @param {number} segmentsY - Number of cells vertically
	 */
	function createGridGeometry(width, height, segmentsX, segmentsY) {
		const points = [];
		const halfWidth = width / 2;
		const halfHeight = height / 2;
		const stepX = width / segmentsX;
		const stepY = height / segmentsY;

		// Vertical lines
		for (let i = 0; i <= segmentsX; i++) {
			const x = -halfWidth + i * stepX;
			points.push(new THREE.Vector3(x, -halfHeight, 0));
			points.push(new THREE.Vector3(x, halfHeight, 0));
		}

		// Horizontal lines
		for (let i = 0; i <= segmentsY; i++) {
			const y = -halfHeight + i * stepY;
			points.push(new THREE.Vector3(-halfWidth, y, 0));
			points.push(new THREE.Vector3(halfWidth, y, 0));
		}

		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		return geometry;
	}

	const halfVAngle = $derived(toRadians(vFovSpring.current) / 2);
	const halfHAngle = $derived(toRadians(hFovSpring.current) / 2);

	const frustumHalfHeight = $derived(Math.tan(halfVAngle) * distanceSpring.current);
	const frustumHalfWidth = $derived(Math.tan(halfHAngle) * distanceSpring.current);

	// Create grid geometries for each plane
	const topBottomGrid = $derived(
		createGridGeometry(frustumHalfWidth * 2, depthSpring.current, cellsAcross, cellsDepth)
	);
	const leftRightGrid = $derived(
		createGridGeometry(depthSpring.current, frustumHalfHeight * 2, cellsDepth, cellsAcross)
	);

	$effect(() => {
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<!-- Top grid -->
<T.LineSegments
	position={[anchor[0], anchor[1] + frustumHalfHeight, anchor[2] + depthSpring.current / 2]}
	rotation.x={Math.PI / 2}
	geometry={topBottomGrid}
>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Bottom grid -->
<T.LineSegments
	position={[anchor[0], anchor[1] - frustumHalfHeight, anchor[2] + depthSpring.current / 2]}
	rotation.x={-Math.PI / 2}
	geometry={topBottomGrid}
>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Left grid -->
<T.LineSegments
	position={[anchor[0] - frustumHalfWidth, anchor[1], anchor[2] + depthSpring.current / 2]}
	rotation.y={Math.PI / 2}
	geometry={leftRightGrid}
>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Right grid -->
<T.LineSegments
	position={[anchor[0] + frustumHalfWidth, anchor[1], anchor[2] + depthSpring.current / 2]}
	rotation.y={-Math.PI / 2}
	geometry={leftRightGrid}
>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>
