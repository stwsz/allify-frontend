<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Props
	export let mostListenedArtistItem: any;
	export let index: number;
	export let choosedItemType: 'artist' | 'track' | 'album' | '';
	export let itemId: string;
	export let showDetailedInfoModalVisible: boolean;
</script>

<button
	class="flex w-full cursor-pointer flex-col gap-3 rounded-lg bg-s-muted/90 p-4 transition-all hover:scale-102 sm:h-40 sm:max-w-lg sm:flex-row sm:items-center sm:gap-4 sm:p-5 lg:h-44 lg:gap-5 lg:p-6"
	on:click={() => {
		choosedItemType = 'artist';
		itemId = mostListenedArtistItem.id;
		showDetailedInfoModalVisible = true;
	}}
>
	<picture class="mx-auto shrink-0 sm:mx-0">
		<img
			src={mostListenedArtistItem.images[1]?.url}
			srcset="
				{mostListenedArtistItem.images[2]?.url} 160w,
				{mostListenedArtistItem.images[1]?.url} 320w,
				{mostListenedArtistItem.images[0]?.url} 640w
			"
			sizes="(max-width: 640px) 120px, (max-width: 1024px) 112px, 128px"
			alt={mostListenedArtistItem.name}
			class="h-30 w-30 rounded-md object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32"
			loading="lazy"
		/>
	</picture>

	<div
		class="flex min-w-0 flex-1 flex-col justify-center gap-1.5 text-center sm:gap-2 sm:text-left"
	>
		<div class="flex flex-col gap-1 sm:gap-1.5">
			<h3 class="text-xs font-semibold tracking-wide text-t-secondary uppercase">
				{index + 2}{$translationsStore.myMusicalProfilePage
					.myMusicalProfilePageMostListenedItemPlace}
			</h3>

			<p class="line-clamp-1 text-lg leading-tight font-bold text-t-primary sm:text-xl">
				{mostListenedArtistItem.name}
			</p>

			<p class="text-sm font-semibold text-t-secondary">
				{mostListenedArtistItem.followers.total.toLocaleString()}
				{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-1.5 sm:justify-start">
			{#each mostListenedArtistItem.genres.slice(0, 3) as genre}
				<span class="rounded-md bg-brand-primary px-2.5 py-1 text-xs font-medium text-t-inverse">
					{genre}
				</span>
			{/each}
			{#if mostListenedArtistItem.genres.length > 3}
				<span class="rounded-md bg-brand-primary px-2.5 py-1 text-xs font-medium text-t-inverse">
					+{mostListenedArtistItem.genres.length - 3}
				</span>
			{/if}
		</div>
	</div>
</button>
