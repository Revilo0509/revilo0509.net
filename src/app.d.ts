/// <reference types="@sveltejs/kit" />

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

declare module '*.json' {
    const value: Record<string, any>;
    export default value;
}

export {};
