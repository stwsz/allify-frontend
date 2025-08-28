<script lang="ts">
	import { Toast } from 'flowbite-svelte';
	import type { colorToast } from '../../../../types/colorToast.type';

	import {
		CheckCircleSolid,
		ExclamationCircleSolid,
		CloseCircleSolid
	} from 'flowbite-svelte-icons';

	export let typeToast = '' as 'success' | 'error' | 'info';
	export let color: colorToast = 'green';
	export let toastMessage = '';
</script>

<Toast {color} class={'fixed top-4 right-4'}>
	{#snippet icon()}
		{#if typeToast === 'success'}
			<CheckCircleSolid class="h-5 w-5" />
		{:else if typeToast === 'error'}
			<CloseCircleSolid class="h-5 w-5" />
		{:else if typeToast === 'info'}
			<ExclamationCircleSolid class="h-5 w-5" />
		{/if}
	{/snippet}

	{toastMessage}
</Toast>
