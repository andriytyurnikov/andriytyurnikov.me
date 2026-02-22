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
		cellsDepth = 6
	} = $props();

	const { camera } = useThrelte();

	const vFovSpring = new Spring(50, { stiffness: 0.1, damping: 0.8 });
	const aspectSpring = new Spring(1, { stiffness: 0.1, damping: 0.8 });
	const distanceSpring = new Spring(0.3, { stiffness: 0.1, damping: 0.8 });
	const depthSpring = new Spring(0.6, { stiffness: 0.1, damping: 0.8 });

	function toRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	// Read camera properties each frame
	useTask(() => {
		const cam = $camera;
		if (cam && cam.isPerspectiveCamera) {
			vFovSpring.target = cam.fov;
			aspectSpring.target = cam.aspect;
			distanceSpring.target = Math.abs(cam.position.z - anchor[2]);
			depthSpring.target = Math.abs(cam.position.z - anchor[2]) * 2;
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
	let topBottomGrid = $state(null);
	let leftRightGrid = $state(null);

	$effect(() => {
		const tbGrid = createGridGeometry(
			frustumHalfWidth * 2,
			depthSpring.current,
			cellsAcross,
			cellsDepth
		);
		const lrGrid = createGridGeometry(
			depthSpring.current,
			frustumHalfHeight * 2,
			cellsDepth,
			cellsAcross
		);

		if (topBottomGrid) topBottomGrid.dispose();
		if (leftRightGrid) leftRightGrid.dispose();

		topBottomGrid = tbGrid;
		leftRightGrid = lrGrid;

		return () => {
			tbGrid.dispose();
			lrGrid.dispose();
		};
	});
</script>

{#if topBottomGrid && leftRightGrid}
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
{/if}
