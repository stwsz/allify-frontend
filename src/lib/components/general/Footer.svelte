<script lang="ts">
	import AllifyLogo from '$lib/assets/images/logos/AllifyLogo.svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	import { langStore } from '$lib/stores/language.store';

	const footerSection1Links = [
		{ href: '/', label: $langStore.general.footerSection1Item1 },
		{ href: '/insights', label: $langStore.general.footerSection1Item2 },
		{ href: '/descobertas', label: $langStore.general.footerSection1Item3 },
		{ href: '/comparativo', label: $langStore.general.footerSection1Item4 },
		{ href: '/faq', label: $langStore.general.footerSection1Item5 },
		{ href: '/contact', label: $langStore.general.footerSection1Item6 }
	];

	const footerSection2Links = [
		{ href: '/privacidade', label: $langStore.general.footerSection2Item1 },
		{ href: '/termos', label: $langStore.general.footerSection2Item2 },
		{ href: '/dados', label: $langStore.general.footerSection2Item3 }
	];
</script>

<footer class="overflow-hidden bg-[var(--color-secondary)] text-[var(--color-light)] shadow-inner">
	<div class="flex flex-col gap-10 px-20 py-14 md:flex-row md:justify-between md:px-10 lg:px-30">
		<div class="flex flex-col items-center gap-5 md:items-start">
			<AllifyLogo svgClass="w-20" svgColor="#f3f4f6" altText={$langStore.general.allifyLogoAlt} />

			<p class="max-w-sm text-center text-sm md:text-justify">
				{$langStore.general.footerText1}
			</p>

			<div class="mt-4 flex items-center gap-4">
				<a href="https://github.com/stwsz" target="_blank" class="transition-all hover:scale-110">
					<GithubSolid class="h-8 w-8 cursor-pointer" />
				</a>
				<a
					href="https://www.linkedin.com/in/igorgabriel-dev/"
					target="_blank"
					class="transition-all hover:scale-110"
				>
					<LinkedinSolid class="h-8 w-8 cursor-pointer" />
				</a>
			</div>
		</div>

		<div class="m-0 flex flex-col gap-12 lg:mr-20">
			<div class="flex flex-col items-center gap-2 md:items-start">
				<h3 class="mb-4 font-medium uppercase">{$langStore.general.footerSection1}</h3>
				<ul class="flex flex-col items-center gap-6 text-sm md:flex-row">
					{#each footerSection1Links as link}
						<li>
							<a href={link.href} class="transition-all hover:underline">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-col items-center gap-2 md:items-start">
				<h3 class="mb-4 font-medium uppercase">{$langStore.general.footerSection2}</h3>
				<ul class="flex flex-col items-center gap-6 text-sm md:flex-row">
					{#each footerSection2Links as link}
						<li>
							<a href={link.href} class="transition-all hover:underline">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div
		class="w-full bg-[var(--color-accent)] py-3 text-center text-xs font-semibold text-[var(--color-primary)]"
	>
		<p>© {new Date().getFullYear()} {$langStore.general.footerCopyright}</p>
	</div>
</footer>
