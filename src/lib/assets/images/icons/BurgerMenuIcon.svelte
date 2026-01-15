<script lang="ts">
	// Props
	export let iconSvgClass: string = '';
	export let iconAltText: string = '';
</script>

<svg
	viewBox="0 0 24 24"
	class={iconSvgClass}
	aria-label={iconAltText}
	role="img"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<title>{iconAltText}</title>
	<path d="M4 18L20 18" stroke="#09623a" stroke-width="2" stroke-linecap="round" />
	<path d="M4 12L20 12" stroke="#09623a" stroke-width="2" stroke-linecap="round" />
	<path d="M4 6L20 6" stroke="#09623a" stroke-width="2" stroke-linecap="round" />
</svg>
