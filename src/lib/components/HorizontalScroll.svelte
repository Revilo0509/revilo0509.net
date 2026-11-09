<script lang="ts">
    import { cn } from "#lib/utils.js";
    import { onMount, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children: Snippet;
    }

    let container: HTMLDivElement;

    const { children, ...rest }: Props = $props();

    onMount(() => {
        const handler = (event: WheelEvent) => {
            event.preventDefault();

            container.scrollBy({
                left: event.deltaY,
                behavior: "smooth",
            });
        };

        container.addEventListener("wheel", handler, { passive: false });

        return () => {
            container.removeEventListener("wheel", handler);
        };
    });
</script>

<div
    bind:this={container}
    {...rest}
    class={cn("horizontal-scroll", rest.class)}
>
    {@render children()}
</div>

<style>
    .horizontal-scroll {
        display: flex;
        width: 100%;
        height: 100dvh;

        overflow-x: auto;
        overflow-y: hidden;

        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
    }

    .horizontal-scroll::-webkit-scrollbar {
        display: none;
    }
</style>
