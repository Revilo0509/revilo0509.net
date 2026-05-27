<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icons/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Background from '$lib/components/Background/Background.svelte';
	import { onNavigate } from '$app/navigation';
	import { dev } from '$app/environment';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#if !dev}
		<script
			defer
			src="https://analytics.revilo0509.net/script.js"
			data-website-id="1cdbc11c-649e-47bf-947e-a714a833104b"
		></script>
	{/if}
</svelte:head>

<ModeWatcher />

<div class="flex h-dvh w-dvw">
	{@render children()}
</div>

<Background />

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
