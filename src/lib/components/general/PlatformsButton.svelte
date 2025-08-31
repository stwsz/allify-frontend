<script lang="ts">
	import SpotifyIcon from '$lib/assets/images/icons/SpotifyIcon.svelte';
	import DeezerIcon from '$lib/assets/images/icons/DeezerIcon.svelte';

	export let platformName = '';
	export let onClick = () => {};
</script>

<button
	type="button"
	class="hover:bg-opacity-90 flex w-full cursor-pointer text-lg items-center justify-center gap-2 rounded bg-[var(--color-secondary)] py-3 font-medium text-[var(--color-light)] transition-all duration-200 hover:scale-105"
	on:click={() => {
		onClick();
	}}
>
	{#if platformName.toLocaleLowerCase() === 'spotify'}
		<SpotifyIcon svgClass="w-6 h-6" />
	{:else if platformName.toLocaleLowerCase() === 'deezer'}
		<DeezerIcon svgClass="w-6 h-6" />
	{/if}

	{platformName}
</button>
