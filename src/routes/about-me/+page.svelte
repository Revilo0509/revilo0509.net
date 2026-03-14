<script lang="ts">
    import SocialCard from '$lib/components/SocialCard.svelte';
</script>

<div class="flex h-full w-full items-center justify-center p-4">
    <div class="grid w-full max-w-xl gap-8">
        <div class="card row-span-1 text-white">
            <h1 class="mb-4 text-3xl font-bold md:text-4xl">Hi! I'm Revilo.</h1>
            <p class="text-lg">
                I'm an electronics, homelab and software developer hobbyist. I mostly use Python and
                C++ but I also know Lua, HTML, CSS, and JS/TS. I have dipped my toes into C# and
                Java. I also love to play games, especially Minecraft.
            </p>
        </div>

        <div class="row-span-1">
            <SocialCard />
        </div>
    </div>
</div>
