<script>
	import { T, useThrelte, useTask } from '@threlte/core';
	import * as THREE from 'three';
	import { toRadians } from './rpov-utils.js';

	/**
	 * SceneBox - 4 planes at the edges of the camera frustum
	 * Fits them to the camera before every render, so they stay on the viewport
	 * edges while the camera animates
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
		cellsDepth = 6
	} = $props();

	const { camera } = useThrelte();

	/** @type {THREE.LineSegments | undefined} */
	let top = $state();
	/** @type {THREE.LineSegments | undefined} */
	let bottom = $state();
	/** @type {THREE.LineSegments | undefined} */
	let left = $state();
	/** @type {THREE.LineSegments | undefined} */
	let right = $state();

	// Fit the planes to the camera each frame, in the same frame the camera is
	// rendered with. The task does not invalidate: the camera only changes with
	// a prop change or a resize, and those already make Threlte render.
	useTask(
		() => {
			const cam = $camera;
			if (!cam?.isPerspectiveCamera || !top || !bottom || !left || !right) return;

			const distance = Math.abs(cam.position.z - anchor[2]);
			const depth = distance * 2;
			const halfHeight = Math.tan(toRadians(cam.fov) / 2) * distance;
			const halfWidth = halfHeight * cam.aspect;
			const z = anchor[2] + depth / 2;

			top.position.set(anchor[0], anchor[1] + halfHeight, z);
			bottom.position.set(anchor[0], anchor[1] - halfHeight, z);
			left.position.set(anchor[0] - halfWidth, anchor[1], z);
			right.position.set(anchor[0] + halfWidth, anchor[1], z);

			top.scale.set(halfWidth * 2, depth, 1);
			bottom.scale.set(halfWidth * 2, depth, 1);
			left.scale.set(depth, halfHeight * 2, 1);
			right.scale.set(depth, halfHeight * 2, 1);
		},
		{ autoInvalidate: false }
	);

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

	// Unit grids, scaled to the frustum by the task above
	const topBottomGrid = $derived(createGridGeometry(1, 1, cellsAcross, cellsDepth));
	const leftRightGrid = $derived(createGridGeometry(1, 1, cellsDepth, cellsAcross));

	$effect(() => {
		const tbGrid = topBottomGrid;
		const lrGrid = leftRightGrid;

		return () => {
			tbGrid.dispose();
			lrGrid.dispose();
		};
	});
</script>

<!-- Top grid -->
<T.LineSegments bind:ref={top} rotation.x={Math.PI / 2} geometry={topBottomGrid}>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Bottom grid -->
<T.LineSegments bind:ref={bottom} rotation.x={-Math.PI / 2} geometry={topBottomGrid}>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Left grid -->
<T.LineSegments bind:ref={left} rotation.y={Math.PI / 2} geometry={leftRightGrid}>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>

<!-- Right grid -->
<T.LineSegments bind:ref={right} rotation.y={-Math.PI / 2} geometry={leftRightGrid}>
	<T.LineBasicMaterial {color} transparent {opacity} />
</T.LineSegments>
