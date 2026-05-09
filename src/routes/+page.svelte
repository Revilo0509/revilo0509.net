<script>
	import Portal from '$lib/components/Portal.svelte';
	import { T } from '@threlte/core';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Portal to="canvas">
	<T.Mesh>
		<T.SphereGeometry />
		<T.MeshBasicMaterial color="hotpink" />
	</T.Mesh>
</Portal>
