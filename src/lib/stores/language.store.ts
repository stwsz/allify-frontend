import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { en } from '$lib/lang/en';
import { pt } from '$lib/lang/pt';

const LANG_KEY = 'lang';

const getInitialLang = () => {
	if (!browser) return pt;

	const stored = localStorage.getItem(LANG_KEY);

	switch (stored) {
		case 'en':
			return en;
		case 'pt':
			return pt;
		default:
			return pt;
	}
};

export const langStore = writable(getInitialLang());
