import { Writable, writable } from 'svelte/store';
import { LocalStorage } from 'node-localstorage';

// constructor function to create a storage directory inside our project for all our localStorage setItem.

export const theme: Writable<'light' | 'dark'> = writable('dark');

export const count: Writable<number> = writable(0);
