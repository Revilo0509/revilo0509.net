<script lang="ts">
    import dnd from '$lib/assets/icons/statusIcons/dnd.png';
    import idle from '$lib/assets/icons/statusIcons/idle.png';
    import offline from '$lib/assets/icons/statusIcons/offline.png';
    import online from '$lib/assets/icons/statusIcons/online.png';

    import discord from '$lib/assets/icons/socialIcons/discord.svg';
    import github from '$lib/assets/icons/socialIcons/github.svg';
    import reddit from '$lib/assets/icons/socialIcons/reddit.svg';
    import steam from '$lib/assets/icons/socialIcons/steam.svg';
    import tiktok from '$lib/assets/icons/socialIcons/tiktok.svg';
    import twitch from '$lib/assets/icons/socialIcons/twitch.svg';
    import { onMount } from 'svelte';

    const socials = [
        {
            name: 'Discord',
            icon: discord,
            link: 'https://discord.com/users/565162541748322334',
        },
        { name: 'GitHub', icon: github, link: 'https://github.com/Revilo0509' },
        {
            name: 'Reddit',
            icon: reddit,
            link: 'https://www.reddit.com/user/Revilo_EMC/',
        },
        { name: 'Steam', icon: steam, link: 'https://store.steampowered.com/' },
        {
            name: 'TikTok',
            icon: tiktok,
            link: 'https://www.tiktok.com/@revilo50',
        },
        {
            name: 'Twitch',
            icon: twitch,
            link: 'https://www.twitch.tv/revilo0509',
        },
    ];

    let statusIcon = $state(offline);

    onMount(() => {
        const source = new EventSource('/api/presence');

        source.onmessage = (e) => {
            const status = JSON.parse(e.data).status;
            switch (status) {
                case 'dnd':
                    statusIcon = dnd;
                    break;
                case 'idle':
                    statusIcon = idle;
                    break;
                case 'online':
                    statusIcon = online;
                    break;
                default:
                    statusIcon = offline;
                    break;
            }
        };

        return () => source.close();
    });
</script>

<div class="card grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each socials as social (social.name)}
        <a class="clickable flex items-center justify-center" href={social.link}>
            <div class="relative">
                <img class="h-16 w-16" src={social.icon} alt={social.name} />
                {#if social.name == 'Discord'}
                    <img
                        class="absolute -right-1.5 -bottom-1.5 h-8 w-8 bg-background p-1.5 rounded-full"
                        src={statusIcon}
                        alt="status icon"
                    />
                {/if}
            </div>
        </a>
    {/each}
</div>
