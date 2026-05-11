<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, ...rest }: Props = $props();
</script>

<section {...rest}>
	<div class="content">
		{@render children()}
	</div>
</section>

<style>
	section {
		flex: 0 0 100dvw;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100dvw;
		height: 100dvh;

		scroll-snap-align: start;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
