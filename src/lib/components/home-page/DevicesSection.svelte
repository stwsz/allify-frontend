<script lang="ts">
	// Stores
	import translationsStore from '$lib/stores/translations.store';
</script>

<section
	class="flex flex-col-reverse items-center gap-16 py-12 sm:px-12 lg:flex-row lg:justify-between lg:py-32 2xl:px-32"
>
	<!-- Imagens still in development -->
	<div class="flex h-72 w-2/5 flex-col items-center justify-center rounded-md bg-gray-800">
		<p class="text-sm font-semibold text-t-inverse opacity-80">
			{$translationsStore.generalTexts.stillInDevelopmentText}
		</p>
	</div>

	<div class="w-full space-y-6 lg:w-1/3">
		<h2 class="text-center text-4xl text-t-primary lg:text-left lg:text-5xl">
			{$translationsStore.homePage.devicesSectionHeading1}
		</h2>

		<p class="text-md text-center text-t-secondary lg:text-left lg:text-lg">
			{$translationsStore.homePage.devicesSectionParagraph1}
		</p>
	</div>
</section>
