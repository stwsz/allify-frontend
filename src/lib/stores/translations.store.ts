import { derived, type Readable } from 'svelte/store';
import languageStore from './language.store';

import { en } from '../i18n/en';
import { pt } from '../i18n/pt';
import { de } from '../i18n/de';
import { es } from '../i18n/es';

type Translations = typeof en | typeof pt | typeof de | typeof es;

const translationsStore: Readable<Translations> = derived(languageStore, ($language) => {
	switch ($language) {
		case 'pt':
			return pt;
		case 'en':
			return en;
		case 'de':
			return de;
		case 'es':
			return es;
		default:
			return pt;
	}
});

export default translationsStore;
