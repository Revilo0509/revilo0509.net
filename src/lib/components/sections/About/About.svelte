<script lang="ts">
	import { Clock, MapPin, MoveRight } from 'lucide-svelte';
	import PageSection from '../../PageSection.svelte';
	import { SvelteDate } from 'svelte/reactivity';
	import InfoItem from './InfoItem.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';

	const local = new SvelteDate();
	const sweden = new SvelteDate();

	const swedenFormatted = $derived(
		sweden.toLocaleTimeString('sv-SE', {
			timeZone: 'Europe/Stockholm',
			hour: '2-digit',
			minute: '2-digit'
		})
	);

	const timeDiff = $derived((sweden.getTime() - local.getTime()) / (1000 * 60 * 60));
	const formattedTimeDifference = $derived('(' + (timeDiff <= 0 ? '+' : '') + timeDiff + ')');

	const links = [
		{
			label: 'Discord',
			href: 'https://discord.com/users/565162541748322334'
		},
		{
			label: 'Github',
			href: 'https://github.com/revilo0509'
		},
		{
			label: 'Codeberg',
			href: 'https://codeberg.org/Revilo0509'
		},
		{
			label: 'Zyner Git',
			href: 'https://git.zyner.org/Revilo0509'
		},
		{
			label: 'Email',
			href: 'mailto:oliver.elfverson@outlook.com'
		}
	] as const;
</script>

<PageSection id="aboutme">
	<div class="flex flex-col">
		<span class="text-xl font-extrabold sm:text-4xl">Hi, I'm Oliver!</span>

		<div class="mt-2 flex flex-col gap-4 rounded-2xl bg-background p-4 outline sm:mt-4">
			<section class="max-w-[50dvw] sm:max-w-[30dvw]">
				I'm an electronics, homelab and software developer hobbist.
			</section>

			<section>
				<ul class="flex flex-col gap-1">
					<InfoItem Icon={MapPin} label="Sweden" />
					<InfoItem Icon={Clock} label={`${swedenFormatted} ${formattedTimeDifference}`} />
				</ul>
			</section>

			<section>
				<Accordion.Root type="single">
					<Accordion.Item>
						<Accordion.Trigger class="text-xl">Contact</Accordion.Trigger>
						<Accordion.Content>
							<ul class="ml-6 flex list-disc flex-col">
								{#each links as link (link.label)}
									<li><a href={link.href}>{link.label}</a></li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</section>

			<a href="#experiences" class={buttonVariants({ variant: 'outline' })}>
				Experiences
				<MoveRight />
			</a>
		</div>
	</div>
</PageSection>
