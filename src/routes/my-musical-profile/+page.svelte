<script lang="ts">
	// Components
	import CarouselMyMusicalProfile from '$lib/components/my-musical-profile/CarouselMyMusicalProfile.svelte';

	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	const itemsType: Array<'artists' | 'musics' | 'albums'> = ['artists'];
</script>

<svelte:head>
	<title>{$translationsStore.myMusicalProfilePage.title}</title>
</svelte:head>

{#each itemsType as type}
	<CarouselMyMusicalProfile mostListenedType={type} />
{/each}
