<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import { langStore } from '$lib/stores/language.store';

	let selectedLang = 'pt';

	onMount(() => {
		if (browser) {
			const stored = localStorage.getItem('lang');
			if (stored === 'en' || stored === 'pt') {
				selectedLang = stored;
			}
		}
	});

	const handleLangChange = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		const selected = target.value;

		if (browser) {
			localStorage.setItem('lang', selected);
			location.reload();
		}
	};
</script>

<select
	name="language"
	id="language"
	aria-label="Selecionar idioma"
	bind:value={selectedLang}
	on:change={handleLangChange}
	class="cursor-pointer rounded-md border-2 border-[var(--color-secondary)] bg-transparent px-4 py-2.5 pr-8 text-xs font-medium text-[var(--color-secondary)] transition-all focus:outline-none"
>
	<option value="pt">{$langStore.general.selectedLanguageItem1}</option>
	<option value="en">{$langStore.general.selectedLanguageItem2}</option>
</select>
