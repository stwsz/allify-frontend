<script lang="ts">
	import { BarsOutline, CloseOutline } from 'flowbite-svelte-icons';

	import AllifyLogo from '$lib/assets/images/logos/AllifyLogo.svelte';
	import Language from './Language.svelte';

	import { langStore } from '$lib/stores/language.store';

	let isMobileMenuOpen = false;
	const toggleMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

<header class="relative flex items-center justify-between bg-[var(--color-light)] px-6 py-8 md:px-12 md:py-14 lg:px-30">
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
			<ul class="flex items-center gap-8 xl:gap-12 font-medium text-[var(--color-secondary)]">
				<li class="transition-all hover:scale-105"><a href="/estatisticas">{$langStore.general.headerItem1}</a></li>
				<li class="transition-all hover:scale-105"><a href="/sugestoes">{$langStore.general.headerItem2}</a></li>
				<li class="transition-all hover:scale-105"><a href="/competicoes">{$langStore.general.headerItem3}</a></li>
			</ul>
		</nav>
	</div>

	<div class="flex items-center gap-4">
		<button class="lg:hidden text-2xl cursor-pointer text-[var(--color-secondary)]" on:click={toggleMenu} aria-label="Abrir menu">
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
		<nav class="absolute left-0 top-full z-50 w-full bg-[var(--color-light)] px-6 py-6 shadow-lg lg:hidden">
			<ul class="flex flex-col gap-4 font-medium text-[var(--color-secondary)]">
				<li><a href="/estatisticas" on:click={() => (isMobileMenuOpen = false)}>{$langStore.general.headerItem1}</a></li>
				<li><a href="/sugestoes" on:click={() => (isMobileMenuOpen = false)}>{$langStore.general.headerItem2}</a></li>
				<li><a href="/competicoes" on:click={() => (isMobileMenuOpen = false)}>{$langStore.general.headerItem3}</a></li>
			</ul>

			<div class="mt-6">
				<Language />
			</div>
		</nav>
	{/if}
</header>


