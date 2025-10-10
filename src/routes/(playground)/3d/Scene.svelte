<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	interactivity();

	const scale = new Spring(1);

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	fov={20}
	position={[0, 0, -0.5]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 1000);
	}}
/>

<T.DirectionalLight position={[0, 1.8, -1.8]} castShadow />
<!-- <T.SpotLight position={[10, 10, 10]} /> -->

<!-- Screen -->
<T.Mesh position.y={0} position.x={0} position.z={0}>
	<T.PlaneGeometry args={[1.6, 0.9]} />
	<T.MeshStandardMaterial visible={false} transparent={true} opacity={0.125} color="white" />
</T.Mesh>

<T.Mesh
	position.y={-0.0}
	position.x={-0.0}
	position.z={1}
	rotation.y={rotation / 4}
	scale={scale.current}
	onpointerenter={() => {
		scale.target = 1.1892;
	}}
	onpointerleave={() => {
		scale.target = 1;
	}}
	castShadow
>
	<T.SphereGeometry args={[0.1, 30, 30]} />
	<!-- <T.BoxGeometry args={[0.125, 0.125, 0.125]} /> -->
	<T.MeshToonMaterial color="red" />
</T.Mesh>

<!-- <T.Mesh position.y={-1.75} rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[3, 64]} />
	<T.MeshStandardMaterial color="blue" />
</T.Mesh> -->
