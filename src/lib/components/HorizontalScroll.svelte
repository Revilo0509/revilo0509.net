<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	onMount(() => {
		const container = document.querySelector('.horizontal-scroll');

		const handler = (e: WheelEvent) => {
			e.preventDefault();

			container?.scrollBy({
				left: e.deltaY,
				behavior: 'smooth'
			});
		};

		container?.addEventListener('wheel', handler, { passive: false });

		return () => {
			container?.removeEventListener('wheel', handler);
		};
	});

	interface props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	const { children, ...rest }: props = $props();
</script>

<div {...rest} class={cn('horizontal-scroll', rest.class)}>
	{@render children()}
</div>

<style>
	.horizontal-scroll {
		display: flex;
		width: 100%;
		height: 100dvh;

		overflow-x: auto;
		overflow-y: hidden;

		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
	}

	.horizontal-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
