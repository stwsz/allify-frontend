<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';
	import { meStore } from '$lib/stores/me.store';
</script>

<section class="flex items-center px-8 py-12 sm:px-12 lg:justify-between lg:py-32 2xl:px-32">
	<div class="flex max-w-full flex-col items-center gap-8 lg:max-w-190 lg:items-start">
		<h1 class="text-center text-4xl text-t-primary lg:text-left lg:text-5xl">
			{$translationsStore.homePage.homePageHeroSectionHeading1}
		</h1>

		<p class="text-md text-center text-t-secondary lg:text-left lg:text-lg">
			{$translationsStore.homePage.homePageHeroSectionParagraph1}
		</p>

		<!-- Imagens still in development -->
		<div
			class="mx-auto flex h-72 w-full flex-col items-center justify-center rounded-md bg-gray-800 lg:hidden"
		>
			<p class="text-sm font-semibold text-t-inverse opacity-80">
				{$translationsStore.generalTexts.stillInDevelopmentText}
			</p>
		</div>

		<a
			class="mt-6 w-90 max-w-90 cursor-pointer rounded-lg bg-brand-primary py-5 text-center text-sm font-medium text-t-inverse shadow-md transition-all hover:scale-105 hover:bg-brand-primary-dark"
			href="/my-musical-profile"
			aria-label={$meStore !== undefined
				? $translationsStore.homePage.homePageHeroSectionButton1v2AriaLabel
				: $translationsStore.homePage.homePageHeroSectionButton1AriaLabel}
		>
			{$meStore !== undefined
				? $translationsStore.homePage.homePageHeroSectionButton1v2
				: $translationsStore.homePage.homePageHeroSectionButton1}
		</a>
	</div>

	<!-- Imagens still in development -->
	<div
		class="hidden h-72 w-1/3 flex-col items-center justify-center rounded-md bg-gray-800 lg:flex"
	>
		<p class="text-sm font-semibold text-t-inverse opacity-80">
			{$translationsStore.generalTexts.stillInDevelopmentText}
		</p>
	</div>
</section>
