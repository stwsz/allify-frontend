<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	export let mostListenedArtistItem: any;
	export let index: number;
</script>

<button
	class="flex w-64 flex-col items-center gap-3 rounded-lg bg-s-muted/90 p-4 transition-all cursor-pointer sm:w-80 sm:flex-row sm:items-start sm:gap-4 sm:p-6 lg:w-96 lg:p-8 xl:w-110 hover:scale-102"
>
	<picture class="shrink-0">
		<img
			src={mostListenedArtistItem.images[1]?.url}
			srcset="
				{mostListenedArtistItem.images[2]?.url} 160w,
				{mostListenedArtistItem.images[1]?.url} 320w,
				{mostListenedArtistItem.images[0]?.url} 640w
			"
			sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
			alt={mostListenedArtistItem.name}
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

			<p class="w-full truncate text-base leading-tight font-bold text-t-primary sm:text-lg lg:text-xl xl:text-2xl">
				{mostListenedArtistItem.name}
			</p>

			<p class="text-sm font-semibold text-t-secondary sm:text-base">
				{mostListenedArtistItem.followers.total.toLocaleString()}
				{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
			</p>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
			{#each mostListenedArtistItem.genres.slice(0, 3) as genre}
				<span
					class="rounded-md bg-brand-primary px-2 py-1 text-[10px] font-medium text-t-inverse sm:px-2.5 sm:py-1.5 sm:text-[11px] lg:px-3"
				>
					{genre}
				</span>
			{/each}
			{#if mostListenedArtistItem.genres.length > 3}
				<span
					class="rounded-md bg-brand-primary px-2 py-1 text-[10px] font-medium text-t-inverse sm:px-2.5 sm:py-1.5 sm:text-[11px] lg:px-3"
				>
					+{mostListenedArtistItem.genres.length - 3}
				</span>
			{/if}
		</div>
	</div>
</button>