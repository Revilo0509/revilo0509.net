<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { SphereGeometry, ShaderMaterial } from 'three';
	import fragmentShader from '$lib/shaders/ball/fragment.glsl?raw';
	import vertexShader from '$lib/shaders/ball/vertex.glsl?raw';

	interactivity();

	const sphereWidthSegments = 200;
	const sphereHeightSegments = 100;

	let innerWidth = $state(0);
	let innerHeight = $state(0);

	let radius = $derived.by(() => {
		if (innerHeight < innerWidth) return innerHeight / 3;
		return innerWidth / 3;
	});

	// svelte-ignore state_referenced_locally
	const geometry = new SphereGeometry(radius, sphereWidthSegments, sphereHeightSegments);
	const material = new ShaderMaterial({
		fragmentShader,
		vertexShader,
		uniforms: {
			uTime: { value: 0 },
			uSphereRadius: { value: 0 }
		}
	});

	useTask((delta) => {
		material.uniforms.uTime.value += delta;
		material.uniforms.uSphereRadius.value = radius;
	});

	$effect(() => {
		geometry.dispose();
		geometry.copy(new SphereGeometry(radius, sphereWidthSegments, sphereHeightSegments));
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<T.PerspectiveCamera
	position={[0, 1000, 0]}
	makeDefault
	oncreate={(c) => {
		c.lookAt(0, 0, 0);
	}}
/>

<T.Mesh {geometry}>
	<T is={material} />
</T.Mesh>
