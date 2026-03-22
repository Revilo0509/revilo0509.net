<script lang="ts">
    import { page } from '$app/state';
    import { crossfade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    import { _, locale } from 'svelte-i18n';
    import { setLanguage } from '$lib/i18n';

    const links = [
        { key: 'nav.home', href: '/' },
        { key: 'nav.about', href: '/about-me' },
    ];

    const [send, receive] = crossfade({
        duration: 300,
        easing: cubicInOut,
    });

    let currentLocale = $derived($locale ?? 'en');

    function changeLanguage(lang: 'en' | 'sv') {
        setLanguage(lang);
    }

    const languages: { code: 'en' | 'sv'; name: string }[] = [
        { code: 'en', name: 'EN' },
        { code: 'sv', name: 'SV' },
    ];
</script>

<ul class="fixed flex w-full justify-center gap-8 transition-none">
    {#each links as link (link.key)}
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
                {$_(link.key)}
            </a>
        </li>
    {/each}
</ul>

<div class="fixed top-4 right-4 flex gap-2">
    {#each languages as lang}
        <button
            class="rounded px-2 py-1 text-sm font-bold transition-opacity text-white"
            class:opacity-100={currentLocale === lang.code}
            class:opacity-50={currentLocale !== lang.code}
            onclick={() => changeLanguage(lang.code)}
        >
            {lang.name}
        </button>
    {/each}
</div>

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
