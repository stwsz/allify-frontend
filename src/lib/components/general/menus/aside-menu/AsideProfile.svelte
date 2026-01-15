<script lang="ts">
	// Assets
	import ProfileIcon from '$lib/assets/images/icons/ProfileIcon.svelte';

	// Components
	import AsideProfileItems from '$lib/components/general/menus/aside-menu/AsideProfileItems.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';

	let loggedIn: boolean = true;
	let showProfileOptions: boolean = false;
</script>

<div class="mt-auto border-t border-b border-b-default/60 px-6 py-6">
	<div
		class="
            rounded-xl
            bg-s-inverse
            px-4
            py-3
            transition-colors
            duration-200
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
                    px-3
                    py-2
                    transition-colors
                    duration-200
                    hover:bg-s-inverse/90
                "
			on:click={() => (showProfileOptions = !showProfileOptions)}
			aria-label="Toggle profile items"
		>
			{#if loggedIn}
				<img
					src=""
					alt={$translationsStore.generalTexts.profileLoggedAltText}
					class="
                        h-9
                        w-9
                        rounded-full
                        bg-s-default/20
                        object-cover
                    "
				/>

				<div class="min-w-0 text-left">
					<p class="text-sm leading-tight font-medium text-t-inverse">Nome</p>

					<p class="truncate text-xs text-t-inverse/70">Email</p>
				</div>
			{:else}
				<ProfileIcon
					iconSvgClass="
                        h-9
                        w-9
                        text-t-inverse
                        transition-colors
                        duration-200
                    "
					iconAltText={$translationsStore.generalTexts.profileNotLoggedAltText}
					color="currentColor"
				/>

				<p class="text-sm font-medium text-t-inverse">Entrar ou criar conta</p>
			{/if}
		</button>

		{#if showProfileOptions}
			<div class="my-4 h-px w-full bg-s-default/30"></div>

			<AsideProfileItems {loggedIn} />
		{/if}
	</div>
</div>
