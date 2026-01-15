<script lang="ts">
	// Svelte
	import { page } from '$app/stores';

	// Assets
	import CloseIcon from '$lib/assets/images/icons/CloseIcon.svelte';
	import AllifyLogoColorful from '$lib/assets/images/logos/AllifyLogoColorful.svelte';

	// Components
	import HeaderNavigation from '$lib/components/general/header/HeaderNavigation.svelte';
	import AsideProfile from '$lib/components/general/menus/aside-menu/AsideProfile.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';

	export let isAsideMenuOpen: boolean;
</script>

<div
	class="fixed inset-0 z-40 bg-s-inverse/40 lg:hidden"
	aria-label={$translationsStore.generalTexts.closeMenuAltText}
>
	<aside
		class="
            fixed
            top-0
            right-0
            z-50
            flex
			h-dvh
            w-2/3 flex-col
            rounded-l-xl
            bg-s-default
            shadow-lg
            sm:w-80
            lg:hidden
        "
	>
		<div
			class="flex items-center justify-between border-b border-b-default/60 pt-8 pr-3 pb-5.5 pl-8"
		>
			<AllifyLogoColorful
				logoSvgClass="w-26"
				logoAltText={$translationsStore.generalTexts.logoColorfulAltText}
			/>

			<button
				aria-label={$translationsStore.generalTexts.closeMenuAltText}
				on:click={() => (isAsideMenuOpen = false)}
				class="cursor-pointer rounded-md p-0.5 transition-all hover:bg-s-muted lg:hidden"
			>
				<CloseIcon
					iconSvgClass="w-7 h-7 text-brand-primary"
					iconAltText={$translationsStore.generalTexts.closeMenuAltText}
				/>
			</button>
		</div>

		<HeaderNavigation currentPage={$page.url.pathname} isAsideMenu={true} />

		<AsideProfile />
	</aside>
</div>
