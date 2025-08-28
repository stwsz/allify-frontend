<script lang="ts">
	import { user, isLoading, isAuthenticated } from '$lib/auth/auth';

    import alliFace from '$lib/assets/images/alli/face/alli-face.webp';
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

    import { langStore } from '$lib/stores/language.store';

    onMount(() => {
        setTimeout(() => {
            goto('/statistics');
        }, 2500)
    });
</script>

<svelte:head>
	<title>{$langStore.authentication.title}</title>
</svelte:head>

<main class="flex flex-col items-center px-6 py-8 justify-center bg-[var(--color-light)] text-[var(--color-dark)] md:px-12 md:py-14 lg:px-30">
	<div class="w-full max-w-md rounded-lg bg-white/80 backdrop-blur-sm p-8 text-center shadow-xl border border-white/20">
        <img src={alliFace} class="w-20 h-20 mx-auto mb-5 rounded-full" alt="Alli Face">

		<h2 class="mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-2xl font-bold text-transparent">
			{$langStore.authentication.authenticationText1}
		</h2>
		
		<p class="mb-6 text-[var(--color-dark)] opacity-80">
			{$langStore.authentication.authenticationText2}
		</p>

		<div class="rounded-lg bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 p-4">
			{#if $isLoading}
				<p class="text-[var(--color-primary)] font-medium">
					<span class="inline-block animate-pulse">●</span>
					{$langStore.authentication.authenticationText3}
				</p>
			{:else if $isAuthenticated && $user}
				<p class="text-[var(--color-dark)] font-medium">
					{$langStore.authentication.authenticationText4} {$user.name || $user.email}! {$langStore.authentication.authenticationText5}
				</p>
			{:else}
				<p class="text-[var(--color-secondary)] font-medium">
					<span class="inline-block animate-pulse">○</span>
					{$langStore.authentication.authenticationText6}
				</p>
			{/if}
		</div>

		<div class="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
			<div class="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full animate-pulse"></div>
		</div>
	</div>

	<p class="mt-8 text-center text-sm text-[var(--color-dark)] opacity-60 max-w-md">
		{$langStore.authentication.authenticationText7}
	</p>
</main>

<style>
	@keyframes pulse-width {
		0%, 100% {
			width: 30%;
		}
		50% {
			width: 70%;
		}
	}
	
	.animate-pulse-width {
		animation: pulse-width 2s ease-in-out infinite;
	}
</style>
