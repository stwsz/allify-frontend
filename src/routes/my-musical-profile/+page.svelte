<script lang="ts">
    // Components
    import MostListenedArtists from "$lib/components/my-musical-profile/MostListenedArtists.svelte";

    // Stores
    import { translationsStore } from "$lib/stores/translations.store";
</script>

<svelte:head>
    <title>{$translationsStore.myMusicalProfilePage.title}</title>
</svelte:head>

<MostListenedArtists />
