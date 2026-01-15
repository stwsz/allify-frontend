<script lang="ts">
	// Assets
	import ConnectIcon from '$lib/assets/images/icons/ConnectIcon.svelte';
	import ExternalLinkIcon from '$lib/assets/images/icons/ExternalLinkIcon.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';

	// Types
	import type { CardPlatformType } from '$lib/types/CardPlatform.type';

	// Props
	export let platform: CardPlatformType;
</script>

<li
	class="flex h-96 w-full flex-col justify-between rounded-lg bg-s-default text-t-primary shadow-md sm:w-10/12 lg:w-1/2 2xl:w-2/5"
>
	<div class="flex flex-col gap-4 p-6 lg:p-10 lg:gap-6">
		<div class="flex items-center justify-between font-medium">
			<svelte:component this={platform.icon} />

			<a
				href="/"
				class="flex items-center gap-1 rounded-lg border border-b-muted px-3 py-1.5 text-sm text-t-primary transition-all hover:border-brand-primary hover:text-brand-primary"
			>
				<ConnectIcon
					iconSvgClass="w-4.5 h-4.5 inline-block mr-2"
					iconAltText={$translationsStore.homePage.connectPlatformCardPlatformConnectIconAltText}
				/>

				{$translationsStore.homePage.connectPlatformCardPlatformConnectButton}
			</a>
		</div>

		<div class="h-36 space-y-3 lg:space-y-4">
			<p class="text-lg font-semibold lg:text-xl">
				{platform.title}
			</p>

			<p class="h-fit text-sm sm:text-base">{platform.description}</p>
		</div>
	</div>

	<div
		class="flex h-16 justify-end border-t border-b-muted/20 px-10 py-6 text-sm font-medium transition-all"
	>
		<a
			href={platform.link}
			target="_blank"
			rel="noopener noreferrer"
			class="flex w-fit cursor-pointer items-center gap-2.5 text-sm hover:text-brand-primary"
			>{$translationsStore.homePage.connectPlatformCardPlatformExternalLink}
			{platform.title}
			<ExternalLinkIcon
				iconSvgClass="w-5.5 h-5.5 inline-block mb-0.5"
				iconAltText={$translationsStore.homePage.connectPlatformCardPlatformExternalLinkIconAltText}
			/></a
		>
	</div>
</li>
