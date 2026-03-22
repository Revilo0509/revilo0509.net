<script lang="ts">
    import SocialCard from '$lib/components/SocialCard.svelte';
    import { _ } from 'svelte-i18n';
</script>

<div class="flex h-full w-full items-center justify-center p-4">
    <div class="grid w-full max-w-xl gap-8">
        <div class="card row-span-1 text-white">
            <h1 class="mb-4 text-3xl font-bold md:text-4xl">{$_('page.about-me.greeting')}</h1>
            <p class="text-lg">
                {$_('page.about-me.description')}
            </p>
        </div>

        <div class="row-span-1">
            <SocialCard />
        </div>
    </div>
</div>
