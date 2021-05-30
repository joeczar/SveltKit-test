import { writable } from 'svelte/store';
import { LocalStorage } from 'node-localstorage';

// constructor function to create a storage directory inside our project for all our localStorage setItem.
if (typeof localStorage === 'undefined') {
	// eslint-disable-next-line no-global-assign
	localStorage = new LocalStorage('./scratch');
}

const storedTheme = localStorage.getItem('theme');
export const theme = writable(storedTheme);
theme.subscribe((value) => {
	localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
});

export const count = writable(0);
