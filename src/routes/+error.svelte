<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
    <h1
        style="text-shadow: 0px 0px 10px rgba(255,0,0,0.5);"
        class="text-6xl font-extrabold text-red-600 shadow-red-600"
    >
        {page.error?.message}
    </h1>
    <a
        href="/"
        class="clickable bg-background border-background-700 m-8 rounded-4xl border p-4 pr-8 pl-8 font-bold"
        >Go home</a
    >
</div>
