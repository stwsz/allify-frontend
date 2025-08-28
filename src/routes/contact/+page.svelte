<script lang="ts">
	import validator from 'validator';
	const { isEmail } = validator;

	import Toast from '$lib/components/general/Toast.svelte';

	import alliShowContactForm from './../../lib/assets/images/alli/full-body/alli-full-body-show-contact-form.webp';

	import type { colorToast } from './../../../types/colorToast.type';

	import { langStore } from '$lib/stores/language.store';

	let showToast = false;
	let color: colorToast = 'green';
	let toastMessage = '';
	let typeToast = '' as 'success' | 'error' | 'info';

	let name = '';
	let email = '';
	let message = '';

	$: sendingEmail = false;

	let validatedFields = {
		name: {
			validated: false,
			showError: undefined as boolean | undefined
		},
		email: {
			validated: false,
			showError: undefined as boolean | undefined
		},
		message: {
			validated: false,
			showError: undefined as boolean | undefined
		}
	};
</script>

<svelte:head>
	<title>{$langStore.contact.title}</title>
</svelte:head>

<main
	class="flex flex-col gap-4 bg-[var(--color-light)] px-6 pt-10 pb-14 md:gap-10 md:px-12 md:pt-14 md:pb-20 lg:px-30"
>
	<h1 class="text-xl leading-tight font-bold text-[var(--color-secondary)] lg:text-4xl">
		{$langStore.contact.text1}
	</h1>

	<section class="flex w-full items-center justify-between">
		<form
			class="flex w-full flex-col gap-6 rounded-sm bg-white p-6 shadow-sm md:w-3/5 md:p-10"
			on:submit|preventDefault={async () => {
				sendingEmail = true;

				if (
					validatedFields.email.validated &&
					validatedFields.name.validated &&
					validatedFields.message.validated
				) {
					try {
						const res = await fetch('/api/contact', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ name, email, message })
						});

						if (res.ok) {
							sendingEmail = false;

							color = 'green';
							showToast = true;
							toastMessage = $langStore.contact.toastSuccessMessage;
							typeToast = 'success';

							name = '';
							email = '';
							message = '';
						} else {
							sendingEmail = false;
							throw new Error('Erro no servidor');
						}

						validatedFields.name.validated = false;
						validatedFields.email.validated = false;
						validatedFields.message.validated = false;
					} catch (err) {
						sendingEmail = false;

						color = 'red';
						showToast = true;
						toastMessage = $langStore.contact.toastErrorMessage2;
						typeToast = 'error';
					}
				} else {
					sendingEmail = false;
					color = 'red';
					showToast = true;
					toastMessage = $langStore.contact.toastErrorMessage;
					typeToast = 'error';
				}

				setTimeout(() => {
					showToast = false;
				}, 5000);
			}}
		>
			<div class="flex flex-col gap-1">
				<label for="name" class="mb-1 font-semibold text-[var(--color-dark)]"
					>{$langStore.contact.label1}</label
				>
				<input
					id="name"
					type="text"
					bind:value={name}
					placeholder={$langStore.contact.placeholder1}
					class="rounded border border-[var(--color-secondary)] px-4 py-2 focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none"
					on:blur={() => {
						if (name.trim().length >= 2) {
							validatedFields.name.validated = true;
							validatedFields.name.showError = false;
						} else {
							validatedFields.name.validated = false;
							validatedFields.name.showError = true;
						}
					}}
				/>
				<span
					class={`${
						validatedFields.name.showError ? 'block text-red-500' : 'hidden'
					} mt-1 text-sm font-semibold`}>{$langStore.contact.errorText1}</span
				>
			</div>

			<div class="flex flex-col gap-1">
				<label for="email" class="mb-1 font-semibold text-[var(--color-dark)]"
					>{$langStore.contact.label2}</label
				>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder={$langStore.contact.placeholder2}
					class="rounded border border-[var(--color-secondary)] px-4 py-2 focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none"
					on:blur={() => {
						if (email.trim().length > 0 && isEmail(email)) {
							validatedFields.email.validated = true;
							validatedFields.email.showError = false;
						} else {
							validatedFields.email.validated = false;
							validatedFields.email.showError = true;
						}
					}}
				/>
				<span
					class={`${
						validatedFields.email.showError ? 'block text-red-500' : 'hidden'
					} mt-1 text-sm font-semibold`}>{$langStore.contact.errorText2}</span
				>
			</div>

			<div class="flex flex-col gap-1">
				<label for="message" class="mb-1 font-semibold text-[var(--color-dark)]"
					>{$langStore.contact.label3}</label
				>
				<textarea
					id="message"
					rows="5"
					bind:value={message}
					placeholder={$langStore.contact.placeholder3}
					class="resize-y rounded border border-[var(--color-secondary)] px-4 py-2 focus:ring-2 focus:ring-[var(--color-secondary)] focus:outline-none"
					on:blur={() => {
						if (message.trim().length > 0 && message.length >= 5) {
							validatedFields.message.validated = true;
							validatedFields.message.showError = false;
						} else {
							validatedFields.message.validated = false;
							validatedFields.message.showError = true;
						}
					}}
				></textarea>
				<span
					class={`${
						validatedFields.message.showError ? 'block text-red-500' : 'hidden'
					} mt-1 text-sm font-semibold`}>{$langStore.contact.errorText3}</span
				>
			</div>

			<button
				type="submit"
				class="cursor-pointer rounded bg-[var(--color-secondary)] py-3 font-bold text-[var(--color-light)] transition-all hover:scale-105"
				disabled={sendingEmail === true}
			>
				{#if sendingEmail === false}
					{$langStore.contact.button}
				{:else}
					<span>Enviando...</span>
				{/if}
			</button>
		</form>

		<img
			src={alliShowContactForm}
			alt={$langStore.contact.alliShowContactForm}
			class="hidden drop-shadow-xl md:block md:w-[240px] xl:w-[380px]"
		/>
	</section>
</main>

{#if showToast}
	<Toast {toastMessage} {typeToast} {color} />
{/if}
