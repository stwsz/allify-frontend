<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	export let mostListenedItem: any;
	export let index: number;
</script>

<button
	class="flex w-64 flex-col items-center gap-3 rounded-lg bg-s-muted/90 p-4 transition-colors sm:w-80 sm:flex-row sm:items-start sm:gap-4 sm:p-6 lg:w-96 lg:p-8 xl:w-110"
>
	<picture class="shrink-0">
		<img
			src={mostListenedItem.images[1]?.url}
			srcset="
				{mostListenedItem.images[2]?.url} 160w,
				{mostListenedItem.images[1]?.url} 320w,
				{mostListenedItem.images[0]?.url} 640w
			"
			sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
			alt={mostListenedItem.name}
			class="h-24 w-24 rounded-md object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-38 xl:w-38"
			loading="lazy"
		/>
	</picture>

	<div class="w-full min-w-0 flex-1 space-y-2 text-center sm:space-y-3 sm:text-left lg:space-y-3.5">
		<div class="flex flex-col items-center space-y-0.5 sm:items-start sm:space-y-1">
			<h4 class="text-[10px] font-medium tracking-wide text-t-secondary uppercase sm:text-xs">
				{index + 2}{$translationsStore.myMusicalProfilePage
					.myMusicalProfilePageMostListenedArtistsPlace}
			</h4>

			<p class="w-full truncate text-base font-semibold text-t-primary sm:text-lg lg:text-xl">
				{mostListenedItem.name}
			</p>

			<p class="text-[10px] text-t-secondary sm:text-xs">
				{mostListenedItem.followers.total.toLocaleString()}
				{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
			</p>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
			{#each mostListenedItem.genres.slice(0, 3) as genre}
				<span
					class="rounded-md bg-brand-primary px-2 py-1 text-[10px] font-medium text-t-inverse sm:px-2.5 sm:py-1.5 sm:text-[11px] lg:px-3"
				>
					{genre}
				</span>
			{/each}
			{#if mostListenedItem.genres.length > 3}
				<span
					class="rounded-md bg-brand-primary px-2 py-1 text-[10px] font-medium text-t-inverse sm:px-2.5 sm:py-1.5 sm:text-[11px] lg:px-3"
				>
					+{mostListenedItem.genres.length - 3}
				</span>
			{/if}
		</div>
	</div>
</button>
