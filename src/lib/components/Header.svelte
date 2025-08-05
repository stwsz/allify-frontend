<script lang="ts">
	import { BarsOutline, CloseOutline } from 'flowbite-svelte-icons';

	import AllifyLogo from '$lib/assets/images/logos/AllifyLogo.svelte';
	import Language from './Language.svelte';

	import { langStore } from '$lib/stores/language.store';

	let isMobileMenuOpen = false;
	const toggleMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<header
	class="relative flex items-center justify-between bg-[var(--color-light)] px-6 py-8 md:px-12 md:py-14 lg:px-30"
>
	<div class="flex items-center gap-6 lg:gap-10">
		<a href="/">
			<AllifyLogo
				svgClass="h-10 transition-all cursor-pointer hover:scale-105"
				svgColor="#09633b"
				altText={$langStore.general.allifyLogoAlt}
			/>
		</a>

		<div class="hidden h-7 w-[1.2px] rounded-2xl bg-[var(--color-secondary)] lg:block"></div>

		<nav class="hidden lg:flex">
			<ul class="flex items-center gap-8 font-medium text-[var(--color-secondary)] xl:gap-12">
				<li class="transition-all hover:scale-105">
					<a href="/statistics">{$langStore.general.headerItem1}</a>
				</li>
				<li class="transition-all hover:scale-105">
					<a href="/suggestions">{$langStore.general.headerItem2}</a>
				</li>
				<li class="transition-all hover:scale-105">
					<a href="/competitions">{$langStore.general.headerItem3}</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="flex items-center gap-4">
		<button
			class="cursor-pointer text-2xl text-[var(--color-secondary)] lg:hidden"
			on:click={toggleMenu}
			aria-label="Abrir menu"
		>
			{#if isMobileMenuOpen}
				<CloseOutline class="h-8 w-8" />
			{:else}
				<BarsOutline class="h-8 w-8" />
			{/if}
		</button>

		<div class="hidden lg:block">
			<Language />
		</div>
	</div>

	{#if isMobileMenuOpen}
		<nav
			class="absolute top-full left-0 z-50 w-full bg-[var(--color-light)] px-6 py-6 shadow-lg lg:hidden"
		>
			<ul class="flex flex-col gap-4 font-medium text-[var(--color-secondary)]">
				<li>
					<a href="/statistics" on:click={() => (isMobileMenuOpen = false)}
						>{$langStore.general.headerItem1}</a
					>
				</li>
				<li>
					<a href="/suggestions" on:click={() => (isMobileMenuOpen = false)}
						>{$langStore.general.headerItem2}</a
					>
				</li>
				<li>
					<a href="/competitions" on:click={() => (isMobileMenuOpen = false)}
						>{$langStore.general.headerItem3}</a
					>
				</li>
			</ul>

			<div class="mt-6">
				<Language />
			</div>
		</nav>
	{/if}
</header>
