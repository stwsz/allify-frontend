<script lang="ts">
	// Stores
	import translationsStore from '$lib/stores/translations.store';

	// Props
	export let currentPage: string;
	export let isAsideMenu: boolean;

	const navItems = [
		{
			name: $translationsStore.generalTexts.headerNavigationItem1,
			link: '/my-musical-profile'
		},
		{
			name: $translationsStore.generalTexts.headerNavigationItem2,
			link: '/discoveries'
		},
		{
			name: $translationsStore.generalTexts.headerNavigationItem3,
			link: '/music-battles'
		}
	];
</script>

<nav
	aria-label={$translationsStore.generalTexts.headerNavigationAriaLabel}
	class={isAsideMenu ? '' : 'hidden lg:block'}
>
	<ul class={isAsideMenu ? 'flex flex-col gap-8 px-8 py-12' : 'flex items-center gap-6 lg:gap-12'}>
		{#each navItems as item}
			<li class="overflow-y-hidden">
				<a
					href={item.link}
					aria-current={currentPage === item.link ? 'page' : undefined}
					class="
						relative
						text-sm
						font-medium
						transition-colors
						duration-200
						ease-out
						after:absolute
						after:-bottom-1
						after:left-0
						after:h-0.5
						after:w-0
						after:rounded-full
						after:bg-brand-primary-dark
						after:transition-all
						after:duration-300
						after:ease-out
						hover:text-brand-primary-dark
						hover:after:w-full
						{currentPage === item.link
						? 'font-semibold text-brand-primary-dark after:w-full'
						: 'text-brand-primary'}
					"
				>
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
