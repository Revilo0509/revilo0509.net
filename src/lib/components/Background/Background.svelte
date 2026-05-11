<script>
	import { Canvas } from '@threlte/core';
	import Orb from './Orb.svelte';
</script>

<div class="pointer-events-none absolute top-0 h-dvh w-dvw">
	<Canvas>
		<Orb />
	</Canvas>
</div>
