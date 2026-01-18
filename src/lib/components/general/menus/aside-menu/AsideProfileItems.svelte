<script lang="ts">
	// Stores
	import { translationsStore } from '$lib/stores/translations.store';
	import { loadingAfterConnectionStore } from '$lib/stores/loadingAfterConnection.store';
	import { meStore } from '$lib/stores/me.store';

	// Props
	export let loggedIn: boolean;

	let notLoggedItems = [
		{
			streaming: 'spotify',
			text: $translationsStore.generalTexts.profileNotLoggedItem1,
			href: '/api/spotify/auth/login'
		},
		{
			streaming: 'deezer',
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
				<button
					on:click={(e) => {
						if ($meStore !== undefined) {
							e.preventDefault();
						}

						loadingAfterConnectionStore.set({
							loading: true,
							streamingPlatform: item.streaming as 'spotify' | 'deezer'
						});
						window.location.href = item.href;
					}}
					class="block w-full cursor-pointer rounded-lg px-4 py-3 text-left text-xs text-t-inverse transition-colors duration-150 hover:bg-s-muted/30"
				>
					{@html item.text}
				</button>
			</li>
		{/each}
	{/if}
</ul>
