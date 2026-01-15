<script lang="ts">
	// Svelte
	import { page } from '$app/stores';

	// Components
	import HeroSection from '$lib/components/home-page/HeroSection.svelte';
	import ConnectPlatformsSection from '$lib/components/home-page/ConnectPlatformsSection.svelte';
	import DevicesSection from '$lib/components/home-page/DevicesSection.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';
</script>

<svelte:head>
	<title>{$translationsStore.homePage.title}</title>
	<meta name="description" content={$translationsStore.configuration.metaDescriptionContent} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Allify" />
	<meta property="og:title" content={$translationsStore.homePage.title} />
	<meta
		property="og:description"
		content={$translationsStore.configuration.metaOgAndTwitterContent}
	/>
	<meta property="og:url" content={`https://www.allify.com.br${$page.url.pathname}`} />
	<meta property="og:image" content="https://www.allify.com.br/og-image.png" />
	<meta property="og:locale" content={$translationsStore.configuration.langAttribute} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$translationsStore.homePage.title} />
	<meta
		name="twitter:description"
		content={$translationsStore.configuration.metaOgAndTwitterContent}
	/>
	<meta name="twitter:image" content="https://www.allify.com.br/og-image.png" />
</svelte:head>

<HeroSection />
<ConnectPlatformsSection />
<DevicesSection />
