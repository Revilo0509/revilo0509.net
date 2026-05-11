<script lang="ts">
	import PageSection from '../PageSection.svelte';

	const experiences = [
		{
			place: 'Zyner',
			link: 'https://zyner.org',
			roles: ['Developer', 'Member'],
			start: '04-2026',
			end: 'ongoing'
		},
		{
			place: 'Sgc',
			link: 'https://sgc.se',
			roles: ['Developer'],
			start: '03-2026',
			end: 'ongoing'
		}
	] as const;

	const projects = [] as const;
</script>

<PageSection id="experiences">wda</PageSection>
