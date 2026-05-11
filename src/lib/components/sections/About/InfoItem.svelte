<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import type { MapPin } from 'lucide-svelte';

	interface props {
		Icon: typeof MapPin;
		label: string;
	}

	const { Icon, label }: props = $props();
</script>

<li class="flex">
	<Icon id="time" color="#3e3e3e" />
	<Label class="ml-1" for="time">{label}</Label>
</li>
