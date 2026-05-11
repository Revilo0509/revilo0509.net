<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { SphereGeometry, ShaderMaterial } from 'three';
	import fragmentShader from '$lib/shaders/ball/fragment.glsl?raw';
	import vertexShader from '$lib/shaders/ball/vertex.glsl?raw';
	import { Spring } from 'svelte/motion';

	const sphereRadius = 1;
	const sphereWidthSegments = 200;
	const sphereHeightSegments = 100;

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let mouseX = $state(0);
	let mouseY = $state(0);

	const FOV = 45;
	const FOV_RAD = (FOV * Math.PI) / 180;
	const fillFactor = 0.5;

	let distance = $derived.by(() => {
		const aspect = innerWidth / innerHeight;
		const halfFovV = FOV_RAD / 2;
		const halfFovH = Math.atan(Math.tan(halfFovV) * aspect);
		const limitingHalfFov = aspect >= 1 ? halfFovV : halfFovH;
		return sphereRadius / fillFactor / Math.tan(limitingHalfFov);
	});

	const scale = new Spring(1, { damping: 0.1, stiffness: 0.1 });

	const geometry = new SphereGeometry(sphereRadius, sphereWidthSegments, sphereHeightSegments);
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
		material.uniforms.uSphereRadius.value = sphereRadius;

		const centerX = innerWidth / 2;
		const centerY = innerHeight / 2;
		const distanceToCenter = Math.sqrt(
			Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
		);
		const threshold = Math.min(innerWidth, innerHeight) * 0.25;

		scale.target = distanceToCenter < threshold ? 1.2 : 1;
	});

	function handlePointerDown() {
		const size = 0.1;
		scale.target -= size;
		setTimeout(() => {
			scale.target += size;
		}, 100);
	}
</script>

<svelte:window
	bind:innerWidth
	bind:innerHeight
	onmousemove={(e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}}
	onpointerdown={handlePointerDown}
/>

<T.PerspectiveCamera
	fov={FOV}
	position={[0, distance, 0]}
	makeDefault
	oncreate={(c) => c.lookAt(0, 0, 0)}
/>

<T.Mesh {geometry} scale={scale.current}>
	<T is={material} />
</T.Mesh>
