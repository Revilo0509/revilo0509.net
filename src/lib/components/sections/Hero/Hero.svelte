<script lang="ts">
    import { Clock, MapPin, MoveRight } from "@lucide/svelte";
    import PageSection from "../../PageSection.svelte";
    import InfoItem from "./InfoItem.svelte";
    import getDisplay from "$lib/components/TimeDiff.svelte";
    import IAMA from "./IAMA.svelte";
    import { buttonVariants } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
</script>

<PageSection id="hero">
    <div class="flex flex-col">
        <section class="text-center font-extrabold">
            <p class="text-4xl sm:text-7xl mb-2">Revilo0509</p>
            <IAMA class="text-xl sm:text-4xl" />
        </section>

        <section>
            <ul class="flex gap-4 justify-center mt-4">
                <InfoItem Icon={MapPin} label="Sweden" />
                <InfoItem Icon={Clock} label={getDisplay()} />
            </ul>
        </section>

        <div class="flex justify-center">
            <a href="#experiences" class={cn(buttonVariants({ variant: "outline" }), "mt-4")}>
                Continue
                <MoveRight />
            </a>
        </div>
    </div>
</PageSection>
