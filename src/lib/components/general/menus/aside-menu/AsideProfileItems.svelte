<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';

	// Props
	export let loggedIn: boolean;

	let notLoggedItems = [
		{
			text: $translationsStore.generalTexts.profileNotLoggedItem1,
			href: '/api/spotify/auth/login'
		},
		{
			text: $translationsStore.generalTexts.profileNotLoggedItem2,
			href: '/'
		}
	];

	let loggedItems = [
		{
			text: $translationsStore.generalTexts.profileLoggedItem1,
			href: '/'
		},
		{
			text: $translationsStore.generalTexts.profileLoggedItem2,
			href: '/'
		}
	];
</script>

<ul class="mb-2 flex w-full flex-col gap-3">
	{#if loggedIn}
		{#each loggedItems as item}
			<li class="w-full">
				<a
					href={item.href}
					class="block w-full rounded-lg px-4 py-3 text-xs text-t-inverse transition-colors duration-150 hover:bg-s-muted/30"
				>
					{item.text}
				</a>
			</li>
		{/each}
	{:else}
		{#each notLoggedItems as item}
			<li class="w-full">
				<a
					href={item.href}
					class="block w-full rounded-lg px-4 py-3 text-xs text-t-inverse transition-colors duration-150 hover:bg-s-muted/30"
				>
					{@html item.text}
				</a>
			</li>
		{/each}
	{/if}
</ul>
