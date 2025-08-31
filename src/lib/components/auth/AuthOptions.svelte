<script lang="ts">
	import { loginWithProvider, login } from '$lib/auth/auth';
	import PlatformsButton from '../general/PlatformsButton.svelte';

	function loginWithSpotify() {
		loginWithProvider('spotify');
	}

	function loginWithDeezer() {
		loginWithProvider('deezer');
	}

	function loginAuth() {
		login();
	}
</script>

<div class="mt-6 flex flex-col justify-between gap-4">
	<PlatformsButton platformName="Spotify" onClick={loginAuth} />
	<PlatformsButton platformName="Deezer" onClick={loginWithDeezer} />
</div>
