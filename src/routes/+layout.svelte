<script lang="ts">
    import './index.css';
    import favicon from '$lib/assets/icons/favicon.svg';
    import Background from '$lib/components/Background.svelte';
    import Header from '$lib/components/Header.svelte';
    const isDev = import.meta.env.DEV;

    let { children } = $props();

    import { onNavigate } from '$app/navigation';

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
    {#if !isDev}
        <script
            defer
            src="https://analytics.revilo0509.net/script.js"
            data-website-id="1cdbc11c-649e-47bf-947e-a714a833104b"
        ></script>
    {/if}
    
    <link rel="icon" href={favicon} />
</svelte:head>

<Background />
<Header />

<div class="h-screen w-screen">
    {@render children()}
</div>
