<script lang="ts">
    import { page } from '$app/state';
    import { slide } from 'svelte/transition';

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Bio', href: '/bio' },
        { name: 'Socials', href: '/socials' },
        { name: 'Blog', href: '/blog' },
    ];
</script>

<ul class="flex w-full justify-center gap-8 transition-none">
    {#each links as link (link.name)}
        <li class="flex flex-col justify-center">
            {#if page.url.pathname === link.href}
                <div class="flex w-full justify-center">
                    <div class="clip h-3 w-6 bg-white"></div>
                </div>
            {/if}

            <a
                class="text-center text-2xl font-bold text-white opacity-50 hover:opacity-100"
                class:selected={page.url.pathname === link.href}
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

    .clip {
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    }
</style>
