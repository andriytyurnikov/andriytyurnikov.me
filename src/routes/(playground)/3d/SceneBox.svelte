<script>
	import { T, useThrelte, useTask } from '@threlte/core';
	import { Spring } from 'svelte/motion';
	import * as THREE from 'three';

	/**
	 * SceneBox - 4 planes at the edges of the camera frustum
	 * Reads camera FOV directly to ensure perfect alignment with viewport
	 */

	let {
		/** The point the camera looks at (and where planes intersect) */
		anchor = [0, 0, 0],
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

	const { camera } = useThrelte();

	let verticalFov = $state(50);
	let aspectRatio = $state(1);
	let distance = $state(0.3);
	let planeDepth = $state(0.6);

	const vFovSpring = new Spring(verticalFov, { stiffness: 0.1, damping: 0.8 });
	const aspectSpring = new Spring(aspectRatio, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(distance, { stiffness: 0.1, damping: 0.8 });
	const depthSpring = new Spring(planeDepth, { stiffness: 0.1, damping: 0.8 });

	function toRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	// Read camera properties each frame
	useTask(() => {
		const cam = $camera;
		if (cam && cam.isPerspectiveCamera) {
			verticalFov = cam.fov;
			aspectRatio = cam.aspect;
			distance = Math.abs(cam.position.z - anchor[2]);
			planeDepth = distance * 2;

			vFovSpring.target = verticalFov;
			aspectSpring.target = aspectRatio;
			distanceSpring.target = distance;
			depthSpring.target = planeDepth;
		}
	});

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

	const frustumHalfHeight = $derived(Math.tan(halfVAngle) * distanceSpring.current);
	const frustumHalfWidth = $derived(frustumHalfHeight * aspectSpring.current);

	// Create grid geometries for each plane
	const topBottomGrid = $derived(
		createGridGeometry(frustumHalfWidth * 2, depthSpring.current, cellsAcross, cellsDepth)
	);
	const leftRightGrid = $derived(
		createGridGeometry(depthSpring.current, frustumHalfHeight * 2, cellsDepth, cellsAcross)
	);

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
