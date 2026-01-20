<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Assets
	import CrownIcon from '$lib/assets/images/icons/CrownIcon.svelte';

	export let topListened: any;
</script>

<button
	class="relative flex w-full max-w-md flex-col gap-4 rounded-lg bg-s-muted/90 p-4 transition-colors sm:w-auto sm:max-w-none sm:flex-row sm:gap-6 sm:p-6 lg:p-8"
>
	<div class="relative">
		<CrownIcon
			iconSvgClass="h-8 w-8 text-yellow-400 absolute -rotate-32 -top-3 -left-3 lg:-top-6 lg:-left-5 lg:w-12 lg:h-12"
			iconAltText="Crown Icon"
		/>

		<picture class="shrink-0 self-center sm:self-auto">
			<img
				src={topListened.images[1]?.url}
				srcset="
					{topListened.images[2]?.url} 160w,
					{topListened.images[1]?.url} 320w,
					{topListened.images[0]?.url} 640w
				"
				sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
				alt={topListened.name}
				class="h-40 w-40 rounded-lg object-cover shadow-lg sm:h-44 sm:w-44 lg:h-52 lg:w-52"
				loading="lazy"
			/>
		</picture>
	</div>

	<div class="flex min-w-0 flex-col gap-2 text-center sm:gap-3 sm:text-left">
		<div class="flex flex-col items-center space-y-1 sm:items-start sm:space-y-1.5">
			<h4 class="text-xs font-medium tracking-wide text-t-secondary uppercase">
				1{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsPlace}
			</h4>

			<p
				class="w-full truncate text-xl leading-tight font-bold text-t-primary sm:text-2xl lg:text-3xl xl:text-4xl"
			>
				{topListened.name}
			</p>

			<p class="text-xs text-t-secondary sm:text-sm">
				{topListened.followers.total.toLocaleString()}
				{$translationsStore.myMusicalProfilePage.myMusicalProfilePageMostListenedArtistsFollowers}
			</p>
		</div>

		<div class="mt-1 flex flex-wrap items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
			{#each topListened.genres.slice(0, 4) as genre}
				<span
					class="rounded-md bg-brand-primary px-2.5 py-1 text-[10px] font-medium text-t-inverse sm:px-3 sm:py-1.5 sm:text-xs"
				>
					{genre}
				</span>
			{/each}
			{#if topListened.genres.length > 4}
				<span
					class="rounded-md bg-brand-primary px-2.5 py-1 text-[10px] font-medium text-t-inverse sm:px-3 sm:py-1.5 sm:text-xs"
				>
					+{topListened.genres.length - 4}
				</span>
			{/if}
		</div>
	</div>
</button>
