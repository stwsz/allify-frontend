<script lang="ts">
    // Svelte
	import { onMount } from 'svelte';

    // Stores
    import { translationsStore } from '$lib/stores/translations.store';

	let mostListenedArtists: any[] = [];
	let topArtist: any = null;

	async function fetchMostListenedArtists() {
		try {
			const res = await fetch('/api/spotify/most-listened-artists');

			if (!res.ok) {
				console.error('Failed to fetch most listened artists');
				return;
			}

			const data = await res.json();
			mostListenedArtists = data;
			topArtist = mostListenedArtists[0];
		} catch (error) {
			console.error('Error fetching most listened artists:', error);
		}
	}

	onMount(fetchMostListenedArtists);
</script>

<section
	class="px-8 py-12 sm:px-12 lg:pt-16 lg:pb-24 2xl:px-32"
	id="most-listened-artists-section"
>
	<h2 class="text-3xl lg:text-4xl text-t-primary font-medium mb-10">
		{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsHeading1}
	</h2>

	{#if mostListenedArtists.length > 0}
		<h3 class="mb-6 text-xl lg:text-2xl font-medium text-t-secondary">
			{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsHeading2}
		</h3>

		<div class="mb-16 flex flex-col sm:flex-row gap-6 items-start">
			<picture class="shrink-0">
				<img
					src="{topArtist.images[1]?.url}"
					srcset="
						{topArtist.images[2]?.url} 160w,
						{topArtist.images[1]?.url} 320w,
						{topArtist.images[0]?.url} 640w
					"
					sizes="(min-width: 1024px) 192px, 160px"
					alt="{topArtist.name}"
					class="h-40 w-40 lg:h-48 lg:w-48 rounded-lg object-cover shadow-lg"
					loading="lazy"
				/>
			</picture>

			<div class="flex flex-col justify-center gap-3">
				<div class="space-y-1">
					<h4 class="text-sm font-medium text-t-secondary uppercase tracking-wide">
						1{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsPlace}
					</h4>
					
					<p class="text-2xl lg:text-4xl font-bold text-t-primary leading-tight">
						{topArtist.name}
					</p>

					<p class="text-sm text-t-secondary">
						{topArtist.followers.total.toLocaleString()} {$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
					</p>
				</div>
				
				<div class="flex flex-wrap items-center gap-2">
					{#each topArtist.genres as genre}
						<span class="bg-brand-primary text-t-inverse text-xs font-medium px-3 py-1.5 rounded-md">
							{genre}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="space-y-9">
			{#each mostListenedArtists.slice(1) as artist, index}
				<div class="flex gap-4 items-start rounded-lg transition-colors">
					<picture class="shrink-0">
						<img
							src="{artist.images[1]?.url}"
							srcset="
								{artist.images[2]?.url} 160w,
								{artist.images[1]?.url} 320w,
								{artist.images[0]?.url} 640w
							"
							sizes="(min-width: 1024px) 128px, 96px"
							alt="{artist.name}"
							class="h-24 w-24 lg:h-32 lg:w-32 rounded-md object-cover"
							loading="lazy"
						/>
					</picture>

					<div class="flex-1 min-w-0 space-y-3.5">
						<div class="space-y-1">
							<h4 class="text-xs font-medium text-t-secondary uppercase tracking-wide">
								{index + 2}{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsPlace}
							</h4>

							<p class="text-lg lg:text-xl font-semibold text-t-primary">
								{artist.name}
							</p>

							<p class="text-xs text-t-secondary">
								{artist.followers.total.toLocaleString()} {$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
							</p>
						</div>
						
						<div class="flex flex-wrap items-center gap-2">
							{#each artist.genres as genre}
								<span class="bg-brand-primary text-t-inverse text-[11px] font-medium px-3 py-1.5 rounded-md">
									{genre}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
