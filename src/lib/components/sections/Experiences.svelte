<script lang="ts">
    import { Clock, MapPin } from "@lucide/svelte";
import PageSection from "../PageSection.svelte";

    const experiences = [
        {
            icon: "https://s3.zyner.org/brand/logo.svg",
            place: "Zyner",
            link: "https://zyner.org",
            roles: ["Developer", "Member"],
            start: "2026-03-12",
            end: "ongoing",
        },
        {
            icon: "https://sgc.se/_app/immutable/assets/SGC-logo.BSZx-uyf.webp",
            place: "Sgc",
            link: "https://sgc.se",
            roles: ["Devsnubbe (Aka Developer)"],
            start: "2026-03-01",
            end: "ongoing",
        },
    ] as const;
</script>

<PageSection id="experiences">
    <h1 class="text-5xl font-extrabold mb-4">Experiences</h1>
    <div class="grid gap-4 md:grid-cols-2 grid-cols-1">
        {#each experiences as experience (experience.start)}
            <a href={experience.link} class="hover:scale-105 transition-transform text-xl bg-background outline p-3 rounded-lg flex flex-col">
                <span class="flex gap-2 items-center">
                    <img src={experience.icon} alt="experience icon" class="h-8 rounded-md"/>
                    {experience.place}
                </span>
                <span class="text-muted-foreground flex gap-2 pt-2">
                    {experience.start} - {experience.end}<br />
                    {experience.roles.join(", ")}
                </span>
            </a>
        {/each}
    </div>
</PageSection>
