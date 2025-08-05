<script lang="ts">
	import AppleMusicIcon from '$lib/assets/images/icons/AppleMusicIcon.svelte';
	import SpotifyIcon from '$lib/assets/images/icons/SpotifyIcon.svelte';
	import DeezerIcon from '$lib/assets/images/icons/DeezerIcon.svelte';
	
	import { langStore } from '$lib/stores/language.store';
	import { userStore } from '$lib/stores/user.store';
</script>

<svelte:head>
	<title>{$langStore.suggestionsPage.title}</title>
</svelte:head>

{#if $userStore.token}
	<main></main>
{:else}
	<main class="flex flex-col items-center justify-center gap-10 bg-[var(--color-light)] px-4 py-20">
		<h1
			class="max-w-[680px] text-center text-2xl leading-tight font-bold text-[var(--color-secondary)] lg:text-4xl"
		>
			{$langStore.suggestionsPage.notLoggedInText}
		</h1>

		<section class="mb-10 w-full max-w-[680px] rounded-lg bg-white p-12 shadow-md">
			<h2 class="mb-8 text-center text-base font-medium text-[var(--color-dark)] md:text-xl">
				{$langStore.suggestionsPage.notLoggedInDiv}
			</h2>

			<div class="mt-6 flex flex-col justify-between gap-4 md:flex-row">
				<button
					type="button"
					class="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-[var(--color-secondary)] py-3 font-medium text-[var(--color-light)] transition-all duration-200 hover:scale-105 md:w-1/3"
				>
					<SpotifyIcon svgClass="w-5 h-5" />
					Spotify
				</button>

				<button
					type="button"
					class="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-[var(--color-secondary)] py-3 font-medium text-[var(--color-light)] transition-all duration-200 hover:scale-105 md:w-1/3"
				>
					<DeezerIcon svgClass="w-5 h-5 rounded-xs" />
					Deezer
				</button>

				<button
					type="button"
					class="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-[var(--color-secondary)] py-3 font-medium text-[var(--color-light)] transition-all duration-200 hover:scale-105 md:w-1/3"
				>
					<AppleMusicIcon svgClass="w-5 h-5" />
					Apple Music
				</button>
			</div>
		</section>
	</main>
{/if}
