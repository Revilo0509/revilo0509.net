import { SvelteDate } from "svelte/reactivity";

const now = new SvelteDate();

setInterval(() => {
    now.setTime(Date.now());
}, 1000);

function tzOffsetHours(date: Date, tz: string): number {
    const utc = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
    const local = new Date(date.toLocaleString("en-US", { timeZone: tz }));
    return (local.getTime() - utc.getTime()) / (1000 * 60 * 60);
}

const swedenFormatted = $derived(
    now.toLocaleTimeString("sv-SE", {
        timeZone: "Europe/Stockholm",
        hour: "2-digit",
        minute: "2-digit",
    })
);

const timeDiff = $derived(tzOffsetHours(now, "Europe/Stockholm") - tzOffsetHours(now, Intl.DateTimeFormat().resolvedOptions().timeZone));

const formattedTimeDifference = $derived(`(${timeDiff >= 0 ? "+" : ""}${timeDiff})`);

const display = $derived(`${swedenFormatted} ${formattedTimeDifference}`);
export default () => display;
