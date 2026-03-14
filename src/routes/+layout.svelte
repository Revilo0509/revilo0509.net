<script lang="ts">
    import './index.css';
    import favicon from '$lib/assets/favicon.svg';
    import Background from '$lib/components/Background.svelte';
    import Header from '$lib/components/Header.svelte';

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
    <link rel="icon" href={favicon} />
</svelte:head>

<Background />
<Header />

<div class="w-screen h-screen">
    {@render children()}
</div>
