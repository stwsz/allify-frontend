<script lang="ts">
	import { langStore } from '$lib/stores/language.store';
	import { isAuthenticated, user } from '$lib/auth/auth';

	import AuthOptions from '$lib/components/auth/AuthOptions.svelte';

	let currentHour = new Date().getHours();
</script>

<svelte:head>
	<title>{$langStore.suggestionsPage.title}</title>
</svelte:head>

{#if $isAuthenticated && $user}
	<main class="bg-[var(--color-light)] px-6 py-8 md:px-12 md:py-14 lg:px-30">
		<div class="flex flex-col gap-4">
			<h1 class="text-2xl font-medium text-[var(--color-dark)] lg:text-4xl">
				{#if currentHour < 12}
					{$langStore.general.goodMorning}, {$user.name}!
				{:else if currentHour < 18}
					{$langStore.general.goodAfternoon}, {$user.name}!
				{:else}
					{$langStore.general.goodEvening}, {$user.name}!
				{/if}
			</h1>

			<h2 class="text-base text-[var(--color-dark)] lg:text-xl">
				{$langStore.statisticsPage.loggedText1}
				{$user?.sub?.includes('spotify') ? 'Spotify' : 'Deezer'}
			</h2>
		</div>
	</main>
{:else}
	<main class="flex flex-col items-center justify-center gap-10 bg-[var(--color-light)] px-4 py-20">
		<h1
			class="max-w-[680px] text-center text-2xl leading-tight font-bold text-[var(--color-secondary)] lg:text-4xl"
		>
			{$langStore.statisticsPage.notLoggedInText}
		</h1>

		<section class="mb-10 w-full max-w-[680px] rounded-lg bg-white p-12 shadow-md">
			<h2 class="mb-8 text-center text-base font-medium text-[var(--color-dark)] md:text-xl">
				{$langStore.statisticsPage.notLoggedInDiv}
			</h2>

			<AuthOptions />
		</section>
	</main>
{/if}

