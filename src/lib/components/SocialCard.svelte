<script lang="ts">
    import dnd from '$lib/assets/icons/status/dnd.png';
    import idle from '$lib/assets/icons/status/idle.png';
    import offline from '$lib/assets/icons/status/offline.png';
    import online from '$lib/assets/icons/status/online.png';
    import {
        SiDiscord,
        SiGithub,
        SiReddit,
        SiSteam,
        SiTiktok,
        SiTwitch,
    } from '@icons-pack/svelte-simple-icons';

    import { onMount } from 'svelte';

    const socials = [
        {
            name: 'Discord',
            icon: SiDiscord,
            link: 'https://discord.com/users/565162541748322334',
        },
        { name: 'GitHub', icon: SiGithub, link: 'https://github.com/Revilo0509' },
        {
            name: 'Reddit',
            icon: SiReddit,
            link: 'https://www.reddit.com/user/Revilo_EMC/',
        },
        { name: 'Steam', icon: SiSteam, link: 'https://store.steampowered.com/' },
        {
            name: 'TikTok',
            icon: SiTiktok,
            link: 'https://www.tiktok.com/@revilo50',
        },
        {
            name: 'Twitch',
            icon: SiTwitch,
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
                <social.icon size={64} />

                {#if social.name === 'Discord'}
                    <img
                        class="bg-background absolute -right-1.5 -bottom-1.5 h-8 w-8 rounded-full p-1.5"
                        src={statusIcon}
                        alt="status icon"
                    />
                {/if}
            </div>
        </a>
    {/each}
</div>
