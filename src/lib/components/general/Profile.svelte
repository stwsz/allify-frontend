<script lang="ts">
	import {
		Button,
		Dropdown,
		DropdownItem,
		Avatar,
		DropdownHeader,
		DropdownGroup
	} from 'flowbite-svelte';
	import { isAuthenticated, user } from '$lib/auth/auth';

	import { logout } from '$lib/auth/auth';

	import { langStore } from '$lib/stores/language.store';

	function handleLogout() {
		logout();
	}
</script>

{#if $isAuthenticated && $user}
	<Button
		pill
		color="light"
		id="user-profile"
		class="flex cursor-pointer items-center gap-2 px-5! py-1.5!"
	>
		<Avatar src={$user.picture} class="h-8 w-8" />
		{$user.name}
	</Button>

	<Dropdown triggeredBy="#user-profile">
		<DropdownHeader>
			<span class="block text-sm text-[var(--color-dark)]">{$user.name}</span>
			<span class="block truncate text-sm font-medium">{$user.email}</span>
		</DropdownHeader>
		<DropdownGroup>
			<DropdownItem class="cursor-pointer">{$langStore.profile.profileItemText1}</DropdownItem>
		</DropdownGroup>
		<DropdownHeader>
			<button class="cursor-pointer" on:click={handleLogout}>
				{$langStore.profile.profileItemText2}
			</button>
		</DropdownHeader>
	</Dropdown>
{/if}
