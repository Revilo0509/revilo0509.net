<script lang="ts">
	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import About from '$lib/components/sections/About/About.svelte';
	import Experiences from '$lib/components/sections/Experiences.svelte';

	import Hero from '$lib/components/sections/Hero.svelte';
</script>

<HorizontalScroll class="z-1">
	<Hero />
	<About />
	<!--<Experiences />-->
</HorizontalScroll>
