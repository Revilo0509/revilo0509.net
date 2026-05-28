<script lang="ts">
    import { onMount } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    const extensions = [
        "developer",
        "svelte appreciator",
        "homelabber",
        "linux utilizer",
        "javascript tolerator",
        "student",
        "microslop despiser",
        "git rebase survivor",
        "bug manufacturer",
        "open source contributor",
        "rust accepter",
    ];
    const interval = 250;
    const pause = 2000;

    let extension = $state("");
    let currentExtension = Math.floor(Math.random() * extensions.length);
    let index = 0;
    let deleting = false;

    function type() {
        const word = extensions[currentExtension];

        if (!deleting) {
            extension = word.slice(0, index + 1);
            index++;

            if (index === word.length) {
                deleting = true;
                setTimeout(type, pause);
                return;
            }
        } else {
            extension = word.slice(0, index - 1);
            index--;

            if (index === 0) {
                deleting = false;
                currentExtension = getNextIndex(currentExtension, extensions.length);
            }
        }

        setTimeout(type, interval);
    }

    function getNextIndex(current: number, length: number) {
        if (length <= 1) return 0;

        let next = current;
        while (next === current) {
            next = Math.floor(Math.random() * length);
        }
        return next;
    }

    onMount(() => {
        type();
    });

    const { ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span {...rest}>I'm a <span class="marker">{extension}</span>.</span>

<style>
    .marker::after {
        content: "";
        display: inline-block;

        width: 3px;
        height: 1.1em;
        transform: translateY(0.1em);

        background: white;
        margin-left: 2px;

        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>
