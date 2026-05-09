<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icons/favicon.svg';
	import App from '$lib/components/App.svelte';
	import PortalCanvas from '$lib/components/PortalCanvas.svelte';
	import { Canvas } from '@threlte/core';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="absolute top-0 -z-1 h-dvh w-dvw">
	<Canvas>
		<PortalCanvas id="canvas" />
	</Canvas>
</div>

<App>
	{@render children()}
</App>
