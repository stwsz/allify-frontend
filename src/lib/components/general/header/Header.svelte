<script lang="ts">
	// Svelte
	import { page } from '$app/stores';

	// Assets
	import BurguerMenuIcon from '$lib/assets/images/icons/BurgerMenuIcon.svelte';
	import AllifyLogoColorful from '$lib/assets/images/logos/AllifyLogoColorful.svelte';

	// Components
	import HeaderNavigation from '$lib/components/general/header/HeaderNavigation.svelte';
	import HeaderLanguageAndProfile from '$lib/components/general/header/HeaderLanguageAndProfile.svelte';
	import AsideMenuNavigation from '$lib/components/general/menus/aside-menu/AsideMenuNavigation.svelte';
	import HeaderSelectLanguage from '$lib/components/general/header/HeaderSelectLanguage.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';

	let isAsideMenuOpen = false;
	let openLanguageDropdown = false;
</script>

<header
	class="relative flex items-center justify-between px-8 py-8 shadow-sm sm:px-12 lg:py-12 2xl:px-32"
>
	<div class="flex items-center gap-4 2xl:gap-20">
		<AllifyLogoColorful
			logoSvgClass="w-30 h-fit transition-all cursor-pointer lg:w-32 hover:scale-105"
			logoAltText={$translationsStore.generalTexts.logoColorfulAltText}
		/>

		<HeaderNavigation currentPage={$page.url.pathname} isAsideMenu={false} />
	</div>

	<HeaderLanguageAndProfile />

	<div class="flex items-center gap-4 lg:hidden">
		<HeaderSelectLanguage bind:openLanguageDropdown />

		<button
			aria-label={$translationsStore.generalTexts.burguerMenuAltText}
			class="cursor-pointer rounded-md p-0.5 transition-all hover:bg-s-muted lg:hidden"
			aria-expanded={isAsideMenuOpen}
			on:click={() => {
				openLanguageDropdown = false;
				isAsideMenuOpen = !isAsideMenuOpen;
			}}
		>
			<BurguerMenuIcon
				iconSvgClass="w-6 h-6 text-brand-primary"
				iconAltText={$translationsStore.generalTexts.burguerMenuAltText}
			/>
		</button>
	</div>

	{#if isAsideMenuOpen}
		<AsideMenuNavigation bind:isAsideMenuOpen />
	{/if}
</header>
