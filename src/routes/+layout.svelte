<script lang="ts">
	// Svelte
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Global styles
	import '$lib/styles/global.css';

	// Components
	import Header from '$lib/components/general/header/Header.svelte';
	import Footer from '$lib/components/general/footer/Footer.svelte';
	import AfterConnectionLoading from '$lib/components/general/loading/LoadingAfterConnection.svelte';

	// Stores
	import { meStore } from '$lib/stores/me.store';
	import { loadingAfterConnectionStore } from '$lib/stores/loadingAfterConnection.store';

	let { children } = $props();

	const fetchMeInfo = async () => {
		try {
			const response = await fetch('/api/spotify/me', {
				credentials: 'include'
			});

			if (!response.ok) {
				meStore.set(undefined);
				return;
			}

			const data = await response.json();
			meStore.set({ ...data, streaming: 'spotify' });
		} catch {
			meStore.set(undefined);
		}

		console.log($meStore);
	};

	onMount(() => {
		if (!$meStore) fetchMeInfo();
	});
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

<AfterConnectionLoading
	loading={$loadingAfterConnectionStore.loading}
	streamingPlatform={$loadingAfterConnectionStore.streamingPlatform}
/>
