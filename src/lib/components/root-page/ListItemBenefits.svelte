<script lang="ts">
	import { CheckOutline } from 'flowbite-svelte-icons';

	export let langStore;
</script>

<li class="flex items-start gap-2">
	<CheckOutline class="h-8 w-8 shrink-0 text-[var(--color-secondary)]" />
	<span class="text-left">{langStore}</span>
</li>
