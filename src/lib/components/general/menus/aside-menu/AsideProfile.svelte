<script lang="ts">
	// Assets
	import ProfileIcon from '$lib/assets/images/icons/ProfileIcon.svelte';

	// Components
	import AsideProfileItems from '$lib/components/general/menus/aside-menu/AsideProfileItems.svelte';

	// Stores
	import { translationsStore } from '$lib/stores/translations.store';
	import { meStore } from '$lib/stores/me.store';
	import DropdownIcon from '$lib/assets/images/icons/DropdownIcon.svelte';

	$: loggedIn = $meStore ? true : false;
	let showProfileOptions: boolean = false;
</script>

<div class="mt-auto border-t border-b border-b-default/60 px-4 py-4 sm:px-6 sm:py-6">
	<div
		class="
            rounded-xl
            bg-s-inverse
            p-3
        "
	>
		<button
			class="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-lg
                    px-1
                    py-1.5
                    transition-colors
                    duration-200
                    hover:bg-s-inverse/90
                "
			on:click={() => (showProfileOptions = !showProfileOptions)}
			aria-label="Toggle profile items"
		>
			{#if loggedIn}
				<img
					class={`
						h-10
						w-10
						rounded-full
						border
						object-cover
						p-1
						text-brand-primary
						sm:h-12
						sm:w-12
					`}
					src={$meStore?.images[1]?.url}
					alt={$meStore?.display_name}
				/>

				<div class="min-w-0 text-left">
					<p class="text-sm leading-tight font-semibold text-t-inverse">{$meStore?.display_name}</p>

					<p class="truncate text-xs text-t-inverse/70">{$meStore?.email}</p>
				</div>
			{:else}
				<ProfileIcon
					iconSvgClass="
                        h-8.5
                        w-8.5
                        text-t-inverse
                        transition-colors
                        duration-200
                    "
					iconAltText={$translationsStore.generalTexts.profileNotLoggedAltText}
					color="currentColor"
				/>

				<p class="text-sm font-medium text-t-inverse">{$translationsStore.generalTexts.cardProfileAsideMenuParagraph1}</p>
			{/if}

			<DropdownIcon
				iconSvgClass="
					ml-auto
					h-6
					w-6
					text-t-inverse/70
					transition-all
					{showProfileOptions ? 'rotate-180' : ''}
				"
				iconAltText={$translationsStore.generalTexts.dropdownAriaLabel}
			/>
		</button>

		{#if showProfileOptions}
			<div class="my-6 h-px w-full bg-s-default/30"></div>

			<AsideProfileItems {loggedIn} />

			<div class="my-6 h-px w-full bg-s-default/30"></div>

			<button
				class="
					w-full
					cursor-pointer
					rounded-lg
					bg-status-error
					px-3
					py-2
					font-semibold
					text-t-inverse
					transition-all
					hover:bg-status-error/80
				"
				on:click={() => {
					showProfileOptions = false;
					meStore.set(undefined);
				}}
			>
				{$translationsStore.generalTexts.profileLoggedItem3}
			</button>
		{/if}
	</div>
</div>
