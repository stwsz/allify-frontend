<script lang="ts">
	import AllifyLogo from '$lib/assets/images/logos/AllifyLogo.svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';

	import { langStore } from '$lib/stores/language.store';
</script>

<footer class="overflow-hidden bg-[var(--color-secondary)] text-[var(--color-light)] shadow-inner">
	<div class="flex flex-col gap-10 px-20 py-14 md:flex-row md:justify-between md:px-10 lg:px-30">
		<div class="flex flex-col items-center gap-5 md:items-start">
			<AllifyLogo svgClass="w-20" svgColor="#f3f4f6" altText={$langStore.general.allifyLogoAlt} />

			<p class="max-w-sm text-center text-sm md:text-left">
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
					<li>
						<a href="/" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item1}</a
						>
					</li>
					<li>
						<a href="/insights" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item2}</a
						>
					</li>
					<li>
						<a href="/descobertas" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item3}</a
						>
					</li>
					<li>
						<a href="/comparativo" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item4}</a
						>
					</li>
					<li>
						<a href="/faq" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item5}</a
						>
					</li>
					<li>
						<a href="/contato" class="transition-all hover:underline"
							>{$langStore.general.footerSection1Item6}</a
						>
					</li>
				</ul>
			</div>

			<div class="flex flex-col items-center gap-2 md:items-start">
				<h3 class="mb-4 font-medium uppercase">{$langStore.general.footerSection2}</h3>

				<ul class="flex flex-col items-center gap-6 text-sm md:flex-row">
					<li>
						<a href="/privacidade" class="transition-all hover:underline"
							>{$langStore.general.footerSection2Item1}</a
						>
					</li>
					<li>
						<a href="/termos" class="transition-all hover:underline"
							>{$langStore.general.footerSection2Item2}</a
						>
					</li>
					<li>
						<a href="/dados" class="transition-all hover:underline"
							>{$langStore.general.footerSection2Item3}</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div
		class="w-full bg-[var(--color-accent)] py-3 text-center text-xs font-semibold text-[var(--color-primary)]"
	>
		<p>
			© {new Date().getFullYear()}
			{$langStore.general.footerCopyright}
		</p>
	</div>
</footer>
