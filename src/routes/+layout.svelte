<script lang="ts">
	import './../app.css';

	import { initAuth } from '$lib/auth/auth';

	import Header from '$lib/components/general/Header.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		initAuth();
	});
</script>

<Header />

{@render children?.()}

<Footer />
