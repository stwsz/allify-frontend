<script lang="ts">
	// Svelte
	import { page } from '$app/stores';

	// Global styles
	import '$lib/styles/global.css';

	// Components
	import Header from '$lib/components/general/header/Header.svelte';
	import Footer from '$lib/components/general/footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="canonical" href={`https://www.allify.com.br${$page.url.pathname}`} />
	<meta name="color-scheme" content="light" />
	<meta name="theme-color" content="#09623a" />
</svelte:head>

<Header />

<main id="main-content">
	{@render children()}
</main>

<Footer />
