<script lang="ts">
    import { page } from '$app/state';
    import { crossfade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about-me' },
        //{ name: 'Blog', href: '/blog' },
    ];

    const [send, receive] = crossfade({
        duration: 300,
        easing: cubicInOut,
    });
</script>

<ul class="flex w-full justify-center gap-8 transition-none fixed">
    {#each links as link (link.name)}
        {@const isActive = page.url.pathname === link.href}
        <li class="relative flex flex-col items-center justify-center">
            {#if isActive}
                <div
                    class="clip -top-4 h-2 w-6 bg-white"
                    in:receive={{ key: 'selector' }}
                    out:send={{ key: 'selector' }}
                ></div>
            {/if}

            <a
                class="text-center text-2xl font-bold text-white transition-opacity duration-300"
                class:selected={isActive}
                href={link.href}
            >
                {link.name}
            </a>
        </li>
    {/each}
</ul>

<style lang="postcss">
    .selected {
        @apply opacity-100;
    }

    a:not(.selected) {
        @apply opacity-50;
    }

    .clip {
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    }
</style>
