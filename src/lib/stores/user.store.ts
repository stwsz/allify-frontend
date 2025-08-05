import { writable, type Writable } from 'svelte/store';

export const userStore: Writable<{ token: string; name: string }> = writable({
	token: '',
	name: ''
});
