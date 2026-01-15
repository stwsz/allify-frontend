import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const languageStore = writable<string>('');

if (browser) {
	const saved = localStorage.getItem('allify-language');

	if (saved) {
		languageStore.set(saved);
	}

	languageStore.subscribe((value) => {
		localStorage.setItem('allify-language', value);
	});
}

export default languageStore;
