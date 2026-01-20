<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';

	// Assets
	import DotsLoading from '$lib/assets/images/animations/DotsLoading.svelte';

	// Components
	import TopItem from './TopItem.svelte';
	import CarouselButton from './CarouselButton.svelte';
	import MostListenedItem from './MostListenedItem.svelte';

	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Props
	export let mostListenedType: 'artists' | 'musics' | 'albums' = 'artists';

	let mostListenedItems: any[] = [];
	let topListened: any = null;

	let carousel: HTMLDivElement;
	let showPrevButton = false;
	let showNextButton = true;

	async function fetchMostListenedArtists() {
		try {
			const res = await fetch('/api/spotify/most-listened-artists');

			if (!res.ok) {
				console.error('Failed to fetch most listened artists');
				return;
			}

			const data = await res.json();

			mostListenedItems = data;
			topListened = mostListenedItems[0];
		} catch (error) {
			console.error('Error fetching most listened artists:', error);
		}
	}

	function updateButtonVisibility() {
		if (!carousel) return;

		const scrollLeft = carousel.scrollLeft;
		const maxScroll = carousel.scrollWidth - carousel.clientWidth;

		showPrevButton = scrollLeft > 10;
		showNextButton = scrollLeft < maxScroll - 10;
	}

	function scrollNext() {
		if (carousel) {
			// Scroll responsivo baseado no tamanho da tela
			const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 350 : 420;
			carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	}

	function scrollPrev() {
		if (carousel) {
			const scrollAmount = window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 350 : 420;
			carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		}
	}

	function handleScroll() {
		updateButtonVisibility();
	}

	onMount(() => {
		fetchMostListenedArtists();

		if (carousel) {
			updateButtonVisibility();
		}
	});
</script>

<section
	class="px-8 py-8 sm:px-8 sm:py-12 lg:px-12 lg:pt-16 2xl:px-32"
	id="most-listened-artists-section"
>
	<h2 class="mb-4.5 text-2xl font-medium text-t-primary sm:mb-8 sm:text-3xl lg:mb-10 lg:text-4xl">
		{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsHeading1}
	</h2>

	{#if mostListenedItems.length > 0}
		<div class="relative">
			{#if showPrevButton}
				<CarouselButton direction="prev" on:click={scrollPrev} />
			{/if}

			<div
				bind:this={carousel}
				on:scroll={handleScroll}
				id="carousel"
				class="-mx-4 flex snap-x snap-mandatory items-end gap-4 overflow-x-auto scroll-smooth px-4 sm:mx-0 sm:gap-6 sm:px-0 lg:gap-8 lg:overflow-x-hidden xl:gap-12"
			>
				<div class="shrink-0 snap-start">
					{#if mostListenedType === 'artists'}
						<TopItem {topListened} />
					{/if}
				</div>

				{#each mostListenedItems.slice(1) as mostListenedItem, index}
					<div class="shrink-0 snap-start">
						<MostListenedItem {mostListenedItem} {index} />
					</div>
				{/each}
			</div>

			{#if showNextButton}
				<CarouselButton direction="next" on:click={scrollNext} />
			{/if}
		</div>
	{:else}
		<div class="flex justify-center py-8">
			<DotsLoading animationAltText={$translationsStore.generalTexts.loadingComponentAriaLabel} />
		</div>
	{/if}
</section>
