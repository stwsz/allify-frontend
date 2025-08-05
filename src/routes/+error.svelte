<script lang="ts">
	import alliCrying from '$lib/assets/images/alli/full-body/alli-crying-without-bg.webp';

	import { langStore } from '$lib/stores/language.store';
</script>

<svelte:head>
	<title>{$langStore.errorPage.title}</title>
	<meta name="description" content={$langStore.errorPage.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Allify" />
	<meta name="keywords" content={$langStore.errorPage.keywords} />
	<meta property="og:title" content={$langStore.errorPage.ogTitle} />
	<meta property="og:description" content={$langStore.errorPage.ogDescription} />
	<meta property="og:image" content="/og-image.png" />
	<meta property="og:url" content="https://allify.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$langStore.errorPage.twitterTitle} />
	<meta name="twitter:description" content={$langStore.errorPage.twitterDescription} />
	<meta name="twitter:image" content="/twitter-image.png" />
</svelte:head>

<main class="flex items-center justify-center bg-[var(--color-light)] px-16 pt-12 pb-30">
	<div class="flex w-full max-w-6xl flex-col-reverse items-center gap-14 md:flex-row md:gap-0">
		<div class="flex justify-center">
			<img
				src={alliCrying}
				alt={$langStore.errorPage.alliCryingAlt}
				class="max-w-[320px] md:max-w-[320px] lg:max-w-[480px]"
			/>
		</div>

		<div class="flex flex-col gap-8 text-center md:text-left">
			<h1
				class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-5xl leading-tight font-bold text-transparent lg:text-6xl"
			>
				{$langStore.errorPage.errorPageTitle}
			</h1>

			<div>
				<p class="mb-4 text-2xl font-semibold text-[var(--color-dark)]">
					{$langStore.errorPage.errorPageText1}
				</p>

				<p class="text-xl text-[var(--color-neutral)]">
					{$langStore.errorPage.errorPageText2}
				</p>
			</div>

			<div class="flex w-full flex-col gap-8 md:flex-row xl:w-10/12">
				<a
					href="/"
					class="rounded-md bg-[var(--color-secondary)] px-8 py-4 font-medium text-[var(--color-light)] transition-all hover:scale-105 hover:bg-[var(--color-secondary)]"
				>
					{$langStore.errorPage.errorPageButton}
				</a>
				<a
					href="/ajuda"
					class="rounded-md border-2 border-[var(--color-secondary)] px-8 py-4 font-medium text-[var(--color-secondary)] transition-all hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
				>
					{$langStore.errorPage.errorPageButtonHelp}
				</a>
			</div>
		</div>
	</div>
</main>
