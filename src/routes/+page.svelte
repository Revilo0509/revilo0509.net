<script lang="ts">
    import HorizontalScroll from "$lib/components/HorizontalScroll.svelte";
    import Experiences from "$lib/components/sections/Experiences.svelte";
    import Hero from "$lib/components/sections/Hero/Hero.svelte";
    import Socials from "$lib/components/sections/Socials.svelte";
</script>

<HorizontalScroll class="z-1">
    <Hero />
    <Experiences />
    <Socials />
</HorizontalScroll>
