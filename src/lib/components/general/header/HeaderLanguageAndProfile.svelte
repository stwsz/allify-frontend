<script lang="ts">
	// Components
	import HeaderSelectLanguage from './HeaderSelectLanguage.svelte';
	import HeaderProfile from './HeaderProfile.svelte';

	let openLanguageDropdown = false;
	let showProfileOptions = false;
</script>

<div class="hidden gap-6 lg:flex lg:items-center">
	<HeaderSelectLanguage bind:openLanguageDropdown bind:showProfileOptions />

	<HeaderProfile bind:showProfileOptions bind:openLanguageDropdown />
</div>
