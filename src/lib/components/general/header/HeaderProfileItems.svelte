<script lang="ts">
	// Stores
	import translationsStore from '$lib/stores/translations.store';

	// Props
	export let loggedIn: boolean;
	export let showProfileOptions: boolean;

	let notLoggedItems = [
		{
			text: $translationsStore.generalTexts.profileNotLoggedItem1,
			href: '/'
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

<div
	class={`${showProfileOptions ? 'block' : 'hidden'}
		${loggedIn ? 'right-10 -bottom-44 w-56' : 'right-14 -bottom-16 w-48'}
		animate-fadeIn
		absolute
		z-50
		rounded-xl
		border
		border-b-muted/10
		bg-s-default/95
		p-4
		text-xs
		text-t-primary
		shadow-xl
		backdrop-blur-md
	`}
>
	{#if loggedIn}
		<div class="mb-2 px-2">
			<p class="text-sm leading-tight font-semibold text-t-primary">Nome</p>
			<p class="mt-0.5 truncate text-[11px] text-t-muted">Email</p>
		</div>

		<div class="my-3 h-px bg-b-muted/10"></div>

		<ul class="space-y-1">
			{#each loggedItems as item}
				<li class="rounded-lg transition-all hover:bg-s-muted">
					<a
						href={item.href}
						class="flex w-full items-center px-3 py-2 transition-all hover:translate-x-0.5"
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>

		<div class="my-3 h-px bg-b-muted/10"></div>

		<button
			class="
				w-full
				cursor-pointer
				rounded-lg
				bg-status-error/10
				px-3
				py-2
				font-semibold
				text-status-error
				transition-all
				hover:bg-status-error/20
			"
		>
			{$translationsStore.generalTexts.profileLoggedItem3}
		</button>
	{:else}
		<ul class="space-y-1">
			{#each notLoggedItems as item}
				<li class="rounded-lg transition-all hover:bg-s-muted">
					<a
						href={item.href}
						class="flex w-full items-center px-3 py-2 transition-all hover:translate-x-0.5"
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-6px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.animate-fadeIn {
		animation: fadeIn 0.15s ease-out;
	}
</style>
