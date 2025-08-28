<script lang="ts">
	export let pathImage = '';
	export let altImage = '';
	export let description = '';
</script>

<div
	class="flex flex-col items-center gap-4 rounded-xl border border-[var(--color-primary)]/30 p-8 text-center text-lg shadow-sm md:flex-row lg:gap-10 lg:text-justify"
>
	<img src={pathImage} alt={altImage} class="h-28 w-52 object-contain" />

	<p class="text-justify font-normal text-[var(--color-dark)]">{description}</p>
</div>
