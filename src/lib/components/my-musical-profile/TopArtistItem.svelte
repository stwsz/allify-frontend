<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Assets
	import CrownIcon from '$lib/assets/images/icons/CrownIcon.svelte';

	// Props
	export let topArtistItem: any;
	export let choosedItemType: 'artist' | 'track' | 'album' | '';
	export let itemId: string;
	export let showDetailedInfoModalVisible: boolean;
</script>

<button
	class="relative flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-s-muted/90 p-4 transition-all hover:scale-102 sm:h-56 sm:max-w-2xl sm:flex-row sm:items-center sm:gap-6 sm:p-6 lg:h-64 lg:gap-8 lg:p-8"
	on:click={() => {
		choosedItemType = 'artist';
		itemId = topArtistItem.id;
		showDetailedInfoModalVisible = true;
	}}
>
	<div class="relative mx-auto shrink-0 sm:mx-0">
		<CrownIcon
			iconSvgClass="h-8 w-8 text-yellow-400 absolute -rotate-32 -top-3 -left-3 sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:-top-4 lg:-left-4"
			iconAltText="Crown Icon"
		/>

		<picture>
			<img
				src={topArtistItem.images[1]?.url}
				srcset="
					{topArtistItem.images[2]?.url} 160w,
					{topArtistItem.images[1]?.url} 320w,
					{topArtistItem.images[0]?.url} 640w
				"
				sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
				alt={topArtistItem.name}
				class="h-40 w-40 rounded-lg object-cover shadow-lg sm:h-44 sm:w-44 lg:h-48 lg:w-48"
				loading="lazy"
			/>
		</picture>
	</div>

	<div
		class="flex min-w-0 flex-1 flex-col justify-center gap-2 text-center sm:gap-2.5 sm:text-left lg:gap-3"
	>
		<div class="flex flex-col gap-1 sm:gap-1.5 lg:gap-2">
			<h3 class="text-xs font-semibold tracking-wide text-t-secondary uppercase sm:text-sm">
				1{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedItemPlace}
			</h3>

			<p
				class="line-clamp-2 text-xl leading-tight font-bold text-t-primary sm:text-2xl lg:text-3xl"
			>
				{topArtistItem.name}
			</p>

			<p class="text-sm font-medium text-t-secondary sm:text-base lg:text-lg">
				{topArtistItem.followers.total.toLocaleString()}
				{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-1.5 sm:justify-start sm:gap-2">
			{#each topArtistItem.genres.slice(0, 4) as genre}
				<span
					class="rounded-md bg-brand-primary px-2.5 py-1 text-xs font-medium text-t-inverse sm:px-3 sm:py-1.5"
				>
					{genre}
				</span>
			{/each}
			{#if topArtistItem.genres.length > 4}
				<span
					class="rounded-md bg-brand-primary px-2.5 py-1 text-xs font-medium text-t-inverse sm:px-3 sm:py-1.5"
				>
					+{topArtistItem.genres.length - 4}
				</span>
			{/if}
		</div>
	</div>
</button>
