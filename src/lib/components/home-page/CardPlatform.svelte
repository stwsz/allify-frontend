<script lang="ts">
	// Assets
	import ConnectIcon from '$lib/assets/images/icons/ConnectIcon.svelte';
	import ExternalLinkIcon from '$lib/assets/images/icons/ExternalLinkIcon.svelte';

	// Stores
	import { translationsStore } from '$lib/stores/translations.store';
	import { meStore } from '$lib/stores/me.store';
	import { loadingAfterConnectionStore } from '$lib/stores/loadingAfterConnection.store';

	// Types
	import type { CardPlatformType } from '$lib/types/CardPlatform.type';

	// Props
	export let platform: CardPlatformType;

	const platformKey = platform.title.toLowerCase();
</script>

<li
	class="flex h-96 w-full flex-col justify-between rounded-lg bg-s-default text-t-primary shadow-md sm:w-10/12 lg:w-1/2 2xl:w-2/5"
>
	<div class="flex flex-col gap-4 p-6 lg:gap-6 lg:p-10">
		<div class="flex items-center justify-between font-medium">
			<svelte:component this={platform.icon} />

			<button
				on:click={(e) => {
					if ($meStore !== undefined && $meStore.streaming === platformKey) {
						e.preventDefault();

						return;
					}
					window.location.href = `/api/${platformKey}/auth/login`;

					loadingAfterConnectionStore.set({
						loading: true,
						streamingPlatform: platformKey as 'spotify' | 'deezer'
					});
				}}
				class={`flex cursor-pointer items-center gap-1 rounded-lg border px-3 py-1.5 text-sm transition-all ${
					$meStore?.streaming === platformKey
						? platformKey === 'spotify'
							? 'border-[#1fd25e] text-[#1fd25e] hover:border-[#1fd25e] hover:text-[#1fd25e]'
							: 'border-[#a238ff] text-[#a238ff] hover:border-[#a238ff] hover:text-[#a238ff]'
						: platformKey === 'spotify'
							? 'border-b-muted text-t-primary hover:border-[#1fd25e] hover:text-[#1fd25e]'
							: 'border-b-muted text-t-primary hover:border-[#a238ff] hover:text-[#a238ff]'
				}`}
				aria-label={$meStore?.streaming === platformKey
					? $translationsStore.homePage.connectPlatformCardPlatformConnectedButtonAriaLabel
					: $translationsStore.homePage.connectPlatformCardPlatformConnectButtonAriaLabel}
			>
				<ConnectIcon
					iconSvgClass="w-4.5 h-4.5 inline-block mr-2"
					iconAltText={$translationsStore.homePage.connectPlatformCardPlatformConnectIconAltText}
				/>

				{$meStore?.streaming === platformKey
					? $translationsStore.homePage.connectPlatformCardPlatformConnectedButton
					: $translationsStore.homePage.connectPlatformCardPlatformConnectButton}
			</button>
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
			class={`flex w-fit cursor-pointer items-center gap-2.5 text-sm transition-all ${platformKey === 'spotify' ? 'hover:text-[#1fd25e]' : 'hover:text-[#a238ff]'}`}
			>{$translationsStore.homePage.connectPlatformCardPlatformExternalLink}
			{platform.title}
			<ExternalLinkIcon
				iconSvgClass="w-5.5 h-5.5 inline-block mb-0.5"
				iconAltText={$translationsStore.homePage.connectPlatformCardPlatformExternalLinkIconAltText}
			/></a
		>
	</div>
</li>
