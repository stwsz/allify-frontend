<script lang="ts">
	import { loginWithProvider } from '$lib/auth/auth';
	import PlatformsButton from '../general/PlatformsButton.svelte';

	function loginWithSpotify() {
		loginWithProvider('spotify');
	}

	function loginWithDeezer() {
		loginWithProvider('deezer');
	}
</script>

<div class="mt-6 flex flex-col justify-between gap-4 md:flex-row">
	<PlatformsButton platformName="Spotify" onClick={loginWithSpotify} />
	<PlatformsButton platformName="Deezer" onClick={loginWithDeezer} />
</div>
