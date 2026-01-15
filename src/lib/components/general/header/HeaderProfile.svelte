<script lang="ts">
	// Components
	import ProfileIcon from '$lib/assets/images/icons/ProfileIcon.svelte';
	import HeaderProfileItems from '$lib/components/general/header/HeaderProfileItems.svelte';

	// Stores
	import translationsStore from '$lib/stores/translations.store';

	// Props
	export let showProfileOptions: boolean;
	export let openLanguageDropdown: boolean;

	let loggedIn: boolean = true;
</script>

<button
	class="
		group
		flex
		h-10.5
		w-10.5
		cursor-pointer
		items-center
		justify-center
		rounded-full
		border-b-default
		bg-s-default
		shadow-sm
		ring-1
		ring-b-default
		transition
		duration-200
		ease-out
		hover:bg-s-muted
		hover:shadow-md
		hover:ring-brand-primary
		active:scale-95
	"
	aria-haspopup="menu"
	aria-expanded={showProfileOptions}
	on:click={() => {
		openLanguageDropdown = false;
		showProfileOptions = !showProfileOptions;
	}}
>
	{#if loggedIn}
		<div
			class="
				h-9
				w-9
				rounded-full
				text-brand-primary
				font-semibold
				flex
				items-center
				border
				justify-center
				object-cover
			"
		>A</div>
	{:else}
		<ProfileIcon
			iconSvgClass="
				block
				h-9
				w-9
				text-brand-primary
				transition-colors
				duration-200
				group-hover:text-brand-primary-dark
			"
			iconAltText={$translationsStore.generalTexts.profileNotLoggedAltText}
			color="currentColor"
		/>
	{/if}
</button>

<HeaderProfileItems bind:loggedIn bind:showProfileOptions />
