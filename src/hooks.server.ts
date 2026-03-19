import { startDiscord } from '$lib/discord';
import { env } from '$env/dynamic/private';

startDiscord(env.DISCORD_BOT_TOKEN, env.USER_ID, env.GUILD_ID);
