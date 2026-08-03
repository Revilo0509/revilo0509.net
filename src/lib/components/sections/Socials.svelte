<script lang="ts">
    import { siCodeberg, siDiscord, siGithub, siTwitch, siYoutube, type SimpleIcon } from "simple-icons";
    import PageSection from "../PageSection.svelte";
    import Icon from "../Icon.svelte";

    type Link = {
        icon: SimpleIcon;
        href: string;
    };

    const links: Link[] = [
        {
            icon: siGithub,
            href: "https://github.com/revilo0509"
        },
        {
            icon: siCodeberg,
            href: "https://codeberg.org/Revilo0509",
        },
        {
            icon: siDiscord,
            href: "https://discord.com/users/565162541748322334",
        },
        {
            icon: siTwitch,
            href: "https://www.twitch.tv/revilo0509",
        },
        {
            icon: siYoutube,
            href: "https://www.youtube.com/@Revilo0509",
        },
    ];
</script>

<PageSection id="socials">
    <h1 class="text-5xl font-extrabold mb-4">Socials</h1>

    <ul class="flex flex-col gap-4">
        {#each links as link (link.icon.title)}
            <li>
                <a
                    href={link.href}
                    aria-label={`${link.icon.title} link`}
                    class="block hover:underline transition-all duration-150"
                >
                    <div class="text-xl bg-background outline p-3 rounded-lg flex hover:scale-110 transition-transform">
                        <Icon icon={link.icon} />
                        <span class="pl-4">
                            {link.icon.title}
                        </span>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</PageSection>
