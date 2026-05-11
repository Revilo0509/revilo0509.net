<script>
	import { page } from '$app/state';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { MoveUpRight } from 'lucide-svelte';
	import { resolve } from '$app/paths';
</script>

<div class="z-1 flex flex-1 flex-col items-center justify-center">
	<span class="text-4xl font-extrabold sm:text-8xl">{page.status} {page.error?.message}</span>
	<a href={resolve('/')} class={cn(buttonVariants({ variant: 'outline' }), 'mt-2')}>
		Go Home<MoveUpRight />
	</a>
</div>
