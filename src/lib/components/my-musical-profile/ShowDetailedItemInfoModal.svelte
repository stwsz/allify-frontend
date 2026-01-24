<script lang="ts">
	// Components
	import DotsLoading from '$lib/assets/images/animations/DotsLoading.svelte';
	import ExternalLink from './ExternalLink.svelte';

	// Assets
	import CloseIcon from '$lib/assets/images/icons/CloseIcon.svelte';

	// Stores
	import { translationsStore } from '$lib/stores/translations.store';
	import { meStore } from '$lib/stores/me.store';

	// Types
	import type { DetailedArtistItem, DetailedTrackItem } from '$lib/types/detailedItem.type';

	// Props
	export let choosedItemType: 'artist' | 'track' | 'album' | '';
	export let itemId: string;
	export let showDetailedInfoModalVisible: boolean;

	let lastItemId: string | null = null;
	let loading = false;

	let detailedArtistInfoItem: DetailedArtistItem | null = null;
	let detailedTrackInfoItem: DetailedTrackItem | null = null;

	async function getDetailedInfoItem() {
		loading = true;
		detailedArtistInfoItem = null;
		detailedTrackInfoItem = null;

		try {
			const res = await fetch(`/api/spotify/${choosedItemType}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ itemId })
			}).then((r) => r.json());

			if (choosedItemType === 'artist') detailedArtistInfoItem = res;
			else if (choosedItemType === 'track') detailedTrackInfoItem = res;

			console.log('Detailed Info Item:', res);
		} catch (error) {
			console.error('Error fetching detailed info item:', error);
		} finally {
			loading = false;
		}
	}

	$: if (showDetailedInfoModalVisible && itemId && itemId !== lastItemId) {
		lastItemId = itemId;
		getDetailedInfoItem();
	}
</script>

{#if showDetailedInfoModalVisible}
	<div class="fixed inset-0 z-40 flex items-center justify-center bg-s-inverse/40 p-4">
		<div
			class="
                relative
                z-50
                max-h-[90dvh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-xl
                bg-s-default
                p-6
                shadow-lg
                sm:p-8
            "
			role="dialog"
			aria-modal="true"
		>
			<button
				aria-label={$translationsStore.generalTexts.closeMenuAltText}
				on:click={() => (showDetailedInfoModalVisible = false)}
				class="
                absolute
                top-3
                right-3
                cursor-pointer
                rounded-md
                p-1
                transition-all
                hover:bg-s-muted
                focus:ring-2
                focus:ring-brand-primary
                focus:outline-none
                "
			>
				<CloseIcon
					iconSvgClass="w-6 h-6 text-brand-primary"
					iconAltText={$translationsStore.generalTexts.closeMenuAltText}
				/>
			</button>

			{#if loading}
				<div class="flex h-32 items-center justify-center">
					<DotsLoading
						streamingPlatform="spotify"
						animationAltText={$translationsStore.generalTexts.loadingComponentAriaLabel}
					/>
				</div>
			{:else if choosedItemType === 'artist' && detailedArtistInfoItem !== null}
				<div class="flex flex-col gap-6">
					<div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
						<img
							src={detailedArtistInfoItem?.images?.[1]?.url}
							alt={detailedArtistInfoItem?.name}
							class="h-40 w-40 rounded-xl object-cover shadow-lg sm:h-48 sm:w-48"
							loading="lazy"
						/>

						<div class="flex flex-col gap-2 text-center sm:text-left">
							<h4 class="text-2xl font-bold text-t-primary sm:text-3xl">
								{detailedArtistInfoItem?.name}
							</h4>

							<p class="text-base text-t-secondary">
								{detailedArtistInfoItem?.followers?.total?.toLocaleString()}
								{$translationsStore.myMusicalProfilePage
									.myMusicalProfilePageMostListenedArtistsFollowers}
							</p>

							<div class="flex items-center justify-center gap-2 sm:justify-start">
								<span class="text-sm text-t-secondary"
									>{$translationsStore.myMusicalProfilePage
										.myMusicalProfilePageDetailedArtistInfoModalPopularity}</span
								>
								<div class="h-2 w-32 overflow-hidden rounded-full bg-s-muted">
									<div
										class="h-full bg-brand-primary"
										style="width: {detailedArtistInfoItem?.popularity || 0}%"
									></div>
								</div>
								<span class="text-sm font-medium text-t-primary">
									{detailedArtistInfoItem?.popularity}%
								</span>
							</div>

							{#if detailedArtistInfoItem?.genres?.length}
								<div class="mt-2.5">
									<h5 class="mb-2 text-sm font-semibold tracking-wide text-t-secondary uppercase">
										{$translationsStore.myMusicalProfilePage
											.myMusicalProfilePageDetailedArtistInfoModalGenre}
									</h5>

									<div class="flex flex-wrap justify-center gap-2 sm:justify-start">
										{#each detailedArtistInfoItem.genres as genre}
											<span
												class="rounded-md bg-brand-primary px-3 py-1 text-xs font-medium text-t-inverse"
											>
												{genre}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>

					<ExternalLink
						streamingPlatform="spotify"
						externalLink={detailedArtistInfoItem?.external_urls?.spotify}
						externalLinkText={$translationsStore.myMusicalProfilePage
							.myMusicalProfilePageDetailedItemInfoModalExternalLinkArtistText}
					/>
				</div>
			{:else if choosedItemType === 'track' && detailedTrackInfoItem !== null}
				<div class="flex flex-col gap-6">
					<div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
						<img
							src={detailedTrackInfoItem?.album?.images?.[1]?.url}
							alt={detailedTrackInfoItem?.name}
							class="h-40 w-40 rounded-xl object-cover shadow-lg sm:h-48 sm:w-48"
							loading="lazy"
						/>

						<div class="flex flex-col gap-2 text-center sm:text-left">
							<h4 class="text-2xl font-bold text-t-primary sm:text-3xl">
								{detailedTrackInfoItem?.name}
							</h4>

							<p class="text-base font-medium text-t-secondary">
								{#each detailedTrackInfoItem?.artists ?? [] as artist, i}
									<span
										>{artist.name}{i < (detailedTrackInfoItem?.artists?.length ?? 0) - 1
											? ', '
											: ''}</span
									>
								{/each}
							</p>

							<div class="flex flex-col gap-1 text-sm text-t-secondary">
								<span class="font-medium">{detailedTrackInfoItem?.album?.name}</span>
								<span class="text-xs text-t-secondary/70">
									{detailedTrackInfoItem?.album?.release_date}
								</span>
							</div>

							<div class="mt-2 flex items-center gap-2">
								<span class="text-sm text-t-secondary"
									>{$translationsStore.myMusicalProfilePage
										.myMusicalProfilePageDetailedTracksInfoModalPopularity}</span
								>
								<div class="h-2 w-32 overflow-hidden rounded-full bg-s-muted">
									<div
										class="h-full bg-brand-primary"
										style="width: {detailedTrackInfoItem?.popularity || 0}%"
									></div>
								</div>
								<span class="text-sm font-medium text-t-primary">
									{detailedTrackInfoItem?.popularity}%
								</span>
							</div>
						</div>
					</div>

					<ExternalLink
						streamingPlatform="spotify"
						externalLink={detailedTrackInfoItem?.external_urls?.spotify}
						externalLinkText={$translationsStore.myMusicalProfilePage
							.myMusicalProfilePageDetailedItemInfoModalExternalLinkTrackText}
					/>
				</div>
			{/if}
		</div>
	</div>
{/if}
