import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';

register('en', () => import('$lib/locales/en.json'));
register('sv', () => import('$lib/locales/sv.json'));

await init({
    fallbackLocale: 'en',
    initialLocale: browser ? localStorage.getItem('language') || 'en' : 'en',
});

await waitLocale();

export function setLanguage(lang: string) {
    locale.set(lang);
    if (browser) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    }
}
