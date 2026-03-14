import { startDiscord } from '$lib/discord';
import { DISCORD_BOT_TOKEN, USER_ID, GUILD_ID } from '$env/static/private';

startDiscord(DISCORD_BOT_TOKEN, USER_ID, GUILD_ID);
