import { startDiscord } from '$lib/discord';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

startDiscord(env.DISCORD_BOT_TOKEN, env.USER_ID, env.GUILD_ID);

export function handle({ event, resolve }) {
    if (dev && event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
        return new Response(undefined, { status: 404 });
    }

    return resolve(event);
}
