<script lang="ts">
	import { CheckOutline } from 'flowbite-svelte-icons';

	import alliFullBodyWaving from '$lib/assets/images/alli/full-body/alli-base-full-body-waving.webp';
	import alliFullBodySeated from '$lib/assets/images/alli/full-body/alli-base-full-body-seated.webp';

	import spotifyLogo from '$lib/assets/images/logos/spotify-logo.webp';
	import appleMusicLogo from '$lib/assets/images/logos/apple-music-logo.webp';
	import deezerLogo from '$lib/assets/images/logos/deezer-logo.webp';

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
				href="/inscrever"
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
		<div class="container mx-auto px-4">
			<h2
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-center text-4xl leading-tight font-extrabold text-balance text-transparent md:text-5xl"
			>
				{$langStore.mainPage.mainPageText4}
			</h2>

			<div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
				<div
					class="flex flex-col items-center rounded-xl border border-[var(--color-primary)]/30 p-8 text-center shadow-sm"
				>
					<img
						src={spotifyLogo}
						alt={$langStore.mainPage.mainPageAltText2}
						class="h-24 w-48 object-contain"
					/>
				</div>

				<div
					class="flex flex-col items-center rounded-xl border border-[var(--color-primary)]/30 p-8 text-center shadow-sm"
				>
					<img
						src={appleMusicLogo}
						alt={$langStore.mainPage.mainPageAltText3}
						class="h-24 w-48 object-contain"
					/>
				</div>

				<div
					class="flex flex-col items-center rounded-xl border border-[var(--color-primary)]/30 p-8 text-center shadow-sm"
				>
					<img
						src={deezerLogo}
						alt={$langStore.mainPage.mainPageAltText4}
						class="h-24 w-48 object-contain"
					/>
				</div>
			</div>
		</div>
	</section>

	<section
		class="flex flex-col items-center justify-between gap-14 pb-14 text-center lg:text-left xl:flex-row"
	>
		<div class="flex justify-center">
			<img
				src={alliFullBodyWaving}
				alt={$langStore.mainPage.mainPageAltText5}
				class="order-2 w-[300px] drop-shadow-xl md:order-1 md:w-[380px] lg:w-[450px]"
			/>
		</div>

		<div class="order-1 flex max-w-3xl flex-col gap-10 md:order-2">
			<h2
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-5xl leading-tight font-bold text-transparent lg:text-7xl"
			>
				{$langStore.mainPage.mainPageText5}
			</h2>

			<p class="max-w-2xl text-lg text-[var(--color-dark)] md:text-xl">
				{$langStore.mainPage.mainPageText6}
			</p>

			<ul class="space-y-3 text-[var(--color-neutral)]">
				<li class="flex items-start gap-2">
					<CheckOutline class="h-8 w-8 shrink-0 text-[var(--color-secondary)]" />
					<span class="text-left">{$langStore.mainPage.mainPageText7}</span>
				</li>
				<li class="flex items-start gap-2">
					<CheckOutline class="h-8 w-8 shrink-0 text-[var(--color-secondary)]" />
					<span class="text-left">{$langStore.mainPage.mainPageText8}</span>
				</li>
				<li class="flex items-start gap-2">
					<CheckOutline class="h-8 w-8 shrink-0 text-[var(--color-secondary)]" />
					<span class="text-left">{$langStore.mainPage.mainPageText9}</span>
				</li>
			</ul>
		</div>
	</section>
</main>
