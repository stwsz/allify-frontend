<script lang="ts">
	import alliFullBodyWaving from '$lib/assets/images/alli/full-body/alli-base-full-body-waving.webp';
	import alliFullBodySeated from '$lib/assets/images/alli/full-body/alli-base-full-body-seated.webp';

	import spotifyLogo from '$lib/assets/images/logos/spotify-logo.webp';
	import deezerLogo from '$lib/assets/images/logos/deezer-logo.webp';

	import PlatformsCard from '$lib/components/root-page/PlatformsCard.svelte';
	import ListItemBenefits from '$lib/components/root-page/ListItemBenefits.svelte';

	import { langStore } from '$lib/stores/language.store';
</script>

<svelte:head>
	<title>{$langStore.mainPage.title}</title>
	<meta name="description" content={$langStore.mainPage.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Allify" />
	<meta name="keywords" content={$langStore.mainPage.keywords} />
	<meta property="og:title" content={$langStore.mainPage.ogTitle} />
	<meta property="og:description" content={$langStore.mainPage.ogDescription} />
	<meta property="og:image" content="/og-image.png" />
	<meta property="og:url" content="https://allify.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$langStore.mainPage.twitterTitle} />
	<meta name="twitter:description" content={$langStore.mainPage.twitterDescription} />
	<meta name="twitter:image" content="/twitter-image.png" />
</svelte:head>

<main
	class="flex min-h-screen flex-col gap-12 bg-[var(--color-light)] px-6 py-8 text-[var(--color-dark)] md:gap-36 md:px-12 md:py-14 lg:px-30"
>
	<section
		class="flex flex-col items-center justify-between gap-14 text-center lg:text-left xl:flex-row"
	>
		<div class="flex max-w-3xl flex-col gap-10">
			<h1
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-5xl leading-tight font-bold text-transparent lg:text-7xl"
			>
				{$langStore.mainPage.mainPageText1}
			</h1>

			<p class="text-lg text-[var(--color-dark)] md:text-xl">
				{$langStore.mainPage.mainPageText2}
			</p>

			<a
				href="/statistics"
				class="rounded-lg bg-[var(--color-secondary)] px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--color-primary)] hover:shadow-xl md:w-fit"
			>
				{$langStore.mainPage.mainPageText3}
			</a>
		</div>

		<div class="flex justify-center">
			<img
				src={alliFullBodySeated}
				alt={$langStore.mainPage.mainPageAltText1}
				class="w-[340px] drop-shadow-xl md:w-[420px] lg:w-[450px]"
			/>
		</div>
	</section>

	<section class="py-16">
		<div class="mx-0 w-full px-4 md:mx-auto md:w-10/12">
			<h2
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-center text-5xl leading-tight font-bold text-transparent lg:text-7xl"
			>
				{$langStore.mainPage.mainPageText4}
			</h2>

			<div class="mt-20 flex flex-col items-center gap-10">
				<PlatformsCard
					pathImage={spotifyLogo}
					altImage={$langStore.mainPage.mainPageAltText2}
					description={$langStore.mainPage.mainPageSpotifyDescription}
				/>

				<PlatformsCard
					pathImage={deezerLogo}
					altImage={$langStore.mainPage.mainPageAltText3}
					description={$langStore.mainPage.mainPageDeezerDescription}
				/>
			</div>
		</div>
	</section>

	<section
		class="flex flex-col items-center justify-between gap-14 pb-14 text-center lg:text-left xl:flex-row"
	>
		<div class="flex justify-center">
			<img
				src={alliFullBodyWaving}
				alt={$langStore.mainPage.mainPageAltText4}
				class="order-2 w-[300px] drop-shadow-xl md:order-1 md:w-[380px] lg:w-[450px]"
			/>
		</div>

		<div class="order-1 flex max-w-3xl flex-col gap-10 md:order-2">
			<h2
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-5xl leading-tight font-bold text-transparent lg:text-7xl"
			>
				{$langStore.mainPage.mainPageText5}
			</h2>

			<p class="max-w-2xl text-justify text-lg text-[var(--color-dark)] md:text-xl">
				{$langStore.mainPage.mainPageText6}
			</p>

			<ul class="space-y-3 text-[var(--color-neutral)]">
				<ListItemBenefits langStore={$langStore.mainPage.mainPageText7} />

				<ListItemBenefits langStore={$langStore.mainPage.mainPageText8} />

				<ListItemBenefits langStore={$langStore.mainPage.mainPageText9} />
			</ul>
		</div>
	</section>
</main>
