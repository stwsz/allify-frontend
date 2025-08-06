<script lang="ts">
	import { AccordionItem, Accordion } from "flowbite-svelte";

    import { langStore } from "$lib/stores/language.store";
</script>

<svelte:head>
    <title>
        {$langStore.faq.title}
    </title>
</svelte:head>

<main class="flex flex-col gap-10 bg-[var(--color-light)] px-6 py-8 md:px-12 md:pb-20 md:pt-14 lg:px-30">
	<h1 class="text-[var(--color-secondary)] text-xl leading-tight font-bold lg:text-4xl max-w-[680px]">
		{$langStore.faq.faqText1}
	</h1>

	<Accordion flush class="w-full">
		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem1}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem1Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem2}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem2Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem3}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem3Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}
            {$langStore.faq.faqItem4}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem4Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem5}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem5Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem6}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem6Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem7}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem7Text}
			</p>
		</AccordionItem>

		<AccordionItem>
			{#snippet header()}{$langStore.faq.faqItem8}{/snippet}
			<p class="mb-2 text-gray-700">
				{$langStore.faq.faqItem8Text}
			</p>
		</AccordionItem>
	</Accordion>
</main>

