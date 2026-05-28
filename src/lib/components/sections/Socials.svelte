<script lang="ts">
    import PageSection from "../PageSection.svelte";

    const links = [
        {
            label: "Discord",
            href: "https://discord.com/users/565162541748322334",
        },
        {
            label: "Github",
            href: "https://github.com/revilo0509",
        },
        {
            label: "Codeberg",
            href: "https://codeberg.org/Revilo0509",
        },
        {
            label: "Zyner Git",
            href: "https://git.zyner.org/Revilo0509",
        },
        {
            label: "Email",
            href: "mailto:oliver.elfverson@outlook.com",
        },
        {
            label: "Twitch",
            href: "https://www.twitch.tv/revilo0509",
        },
        {
            label: "Youtube",
            href: "https://www.youtube.com/@Revilo0509",
        },
    ] as const;
</script>

<PageSection id="socials">
    <h1 class="text-4xl font-extrabold mb-4">Socials</h1>
    <ul class="gap-2 grid grid-cols-2">
        {#each links as link (link.label)}
            <li class="text-xl bg-background outline p-3 rounded-lg">
                <a href={link.href} aria-label={link.label + " link"} class="hover:underline">
                    {link.label}
                </a>
            </li>
        {/each}
    </ul>
</PageSection>
