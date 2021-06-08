import type { Theme } from 'src/global';
import { Writable, writable } from 'svelte/store';
import { browser } from '$app/env';

// Use JSON file for storage
// const file = join(__dirname, 'db.json');
let prefersDarkMode;
let storedTheme;

function getTheme() {
	if (browser) {
		prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
		storedTheme = localStorage.theme;
		if (!storedTheme) return prefersDarkMode.matches ? 'dark' : 'light';
		return storedTheme;
	}
}

export const theme: Writable<Theme> = writable(getTheme());

export const count: Writable<number> = writable(0);
