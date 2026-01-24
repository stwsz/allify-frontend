<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Assets
	import CrownIcon from '$lib/assets/images/icons/CrownIcon.svelte';

	// Props
	export let topTrackItem: any;
	export let choosedItemType: 'artist' | 'track' | 'album' | '';
	export let itemId: string;
	export let showDetailedInfoModalVisible: boolean;
</script>

<button
	class="relative flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-s-muted/90 p-4 transition-all hover:scale-102 sm:h-56 sm:max-w-2xl sm:flex-row sm:items-center sm:gap-6 sm:p-6 lg:h-64 lg:gap-8 lg:p-8"
	on:click={() => {
		choosedItemType = 'track';
		itemId = topTrackItem.id;
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
				src={topTrackItem.album.images[1]?.url}
				srcset="
					{topTrackItem.album.images[2]?.url} 160w,
					{topTrackItem.album.images[1]?.url} 320w,
					{topTrackItem.album.images[0]?.url} 640w
				"
				sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
				alt={topTrackItem.name}
				class="h-40 w-40 rounded-lg object-cover shadow-lg sm:h-44 sm:w-44 lg:h-48 lg:w-48"
				loading="lazy"
			/>
		</picture>
	</div>

	<div class="flex min-w-0 flex-1 flex-col justify-center gap-2 text-center sm:gap-2.5 sm:text-left lg:gap-3">
		<div class="flex flex-col gap-1 sm:gap-1.5 lg:gap-2">
			<h3 class="text-xs font-semibold uppercase tracking-wide text-t-secondary sm:text-sm">
				1{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedItemPlace}
			</h3>

			<p class="line-clamp-2 text-xl font-bold leading-tight text-t-primary sm:text-2xl lg:text-3xl">
				{topTrackItem.name}
			</p>

			<p class="line-clamp-1 text-sm font-medium text-t-secondary sm:text-base lg:text-lg">
				{#each topTrackItem.artists as artist, i}
					<span>{artist.name}{i < topTrackItem.artists.length - 1 ? ', ' : ''}</span>
				{/each}
			</p>
		</div>

		<div class="flex flex-col gap-0.5 text-xs text-t-secondary/70 sm:gap-1 sm:text-sm">
			<span class="line-clamp-1 font-medium">{topTrackItem.album.name}</span>
			<span class="text-xs text-t-secondary/60">{topTrackItem.album.release_date}</span>
		</div>
	</div>
</button>
