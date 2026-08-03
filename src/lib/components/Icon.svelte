<script lang="ts">
    import type { SimpleIcon } from "simple-icons";

    const { icon }: { icon: SimpleIcon } = $props();
</script>

<svg
    role="img"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
>
    <path d={icon.path} />
</svg>
