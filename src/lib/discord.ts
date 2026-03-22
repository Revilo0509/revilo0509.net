import { Client, GatewayIntentBits, Presence } from 'discord.js';

export let presence: Presence | null = null;

export function startDiscord(token: string, userId: string, guildId: string) {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildPresences,
        ],
    });

    client.once('clientReady', async () => {
        const guild = await client.guilds.fetch(guildId);
        await guild.members.fetch(userId);
        console.log('Discord connected');
    });

    client.on('presenceUpdate', (_, newPresence) => {
        console.log('presenceUpdate fired, userId:', newPresence?.userId, 'target:', userId);
        if (!newPresence || newPresence.userId !== userId) return;
        presence = newPresence;
        console.log('New presence: ' + newPresence.status);
    });

    client.login(token);
}
