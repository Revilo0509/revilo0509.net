<script lang="ts">
	import { MoveRight } from 'lucide-svelte';
	import PageSection from '../PageSection.svelte';
	import { buttonVariants } from '../ui/button';
	import { cn } from '$lib/utils';
</script>

<PageSection id="hero">
	<span class="text-4xl font-extrabold sm:text-8xl">Revilo0509</span>

	<a href="#aboutme" class={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}>
		About Me
		<MoveRight />
	</a>
</PageSection>
