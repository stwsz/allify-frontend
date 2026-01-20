<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	export let mostListenedTrackItem: any;
	export let index: number;
</script>

<button
	class="flex w-64 flex-col items-center gap-3 rounded-lg bg-s-muted/90 p-4 transition-all cursor-pointer sm:w-80 sm:flex-row sm:items-start sm:gap-4 sm:p-6 lg:w-96 lg:p-8 xl:w-130 hover:scale-102"
>
	<picture class="shrink-0">
		<img
			src={mostListenedTrackItem.album.images[1]?.url}
			srcset="
				{mostListenedTrackItem.album.images[2]?.url} 160w,
				{mostListenedTrackItem.album.images[1]?.url} 320w,
				{mostListenedTrackItem.album.images[0]?.url} 640w
			"
			sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
			alt={mostListenedTrackItem.name}
			class="h-24 w-24 rounded-md object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-38 xl:w-38"
			loading="lazy"
		/>
	</picture>

	<div class="w-full min-w-0 flex-1 flex flex-col gap-1 text-center sm:text-left lg:gap-2">
		<div class="flex flex-col items-center gap-1 sm:items-start">
			<h3 class="text-xs font-semibold tracking-wide text-t-secondary uppercase sm:text-sm">
				{index + 2}{$translationsStore.myMusicalProfilePage
					.myMusicalProfilePageMostListenedItemPlace}
			</h3>

			<p class="w-full text-base leading-tight font-bold text-t-primary sm:text-lg lg:text-xl xl:text-2xl">
				{mostListenedTrackItem.name}
			</p>

			<p class="w-full text-sm font-semibold text-t-secondary sm:text-base">
				{#each mostListenedTrackItem.artists as artist, i}
					<span>{artist.name}{i < mostListenedTrackItem.artists.length - 1 ? ', ' : ''}</span>
				{/each}
			</p>
		</div>

		<div class="flex flex-col items-center gap-0.5 text-xs text-t-secondary/70 sm:items-start sm:text-sm">
			<span class="font-medium">{mostListenedTrackItem.album.name}</span>
			<span class="text-[10px] text-t-secondary/60 sm:text-xs">{mostListenedTrackItem.album.release_date}</span>
		</div>
	</div>
</button>