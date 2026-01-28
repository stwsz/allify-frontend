<script lang="ts">
	// Assets
	import SpotifyIcon from '$lib/assets/images/icons/streamings/SpotifyIcon.svelte';
    import DeezerIcon from '$lib/assets/images/icons/streamings/DeezerIcon.svelte';
	
    // Stores
    import { translationsStore } from '$lib/stores/translations.store';
    import { loadingAfterConnectionStore } from '$lib/stores/loadingAfterConnection.store';

    export let notLoggedParagraph: string;

    $: streamings = [
        {
            icon: SpotifyIcon,
            name: 'spotify',
            href: '/api/spotify/auth/login',
            buttonText: $translationsStore.generalTexts.notLoggedLoginLinkSpotify
        },
        {
            icon: DeezerIcon,
            name: 'deezer',
            href: '/',
            buttonText: $translationsStore.generalTexts.notLoggedLoginLinkDeezer
        }
    ];
</script>

<section class="px-8 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 2xl:px-32">
	<div class="flex flex-col items-center justify-center gap-6 rounded-lg bg-surface-secondary px-6 py-12 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
		<div class="max-w-lg">
			<h2 class="mb-3 text-2xl font-medium text-t-primary sm:text-3xl lg:text-4xl">
				{$translationsStore.generalTexts.notLoggedHeading1}
			</h2>
			<p class="text-base text-t-secondary mt-7 sm:text-lg">
				{notLoggedParagraph}
			</p>
		</div>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            {#each streamings as streaming}
                <button
                    on:click={() => {
                        loadingAfterConnectionStore.set({
                            loading: true,
                            streamingPlatform: streaming.name as 'spotify' | 'deezer'
                        });
                        window.location.href = streaming.href;
                    }}
                    disabled={streaming.name === 'deezer'}
                    title={streaming.name === 'deezer' ? $translationsStore.generalTexts.disabledDeezerFunctionalityText : $translationsStore.generalTexts.loginWith + streaming.name.charAt(0).toUpperCase() + streaming.name.slice(1)}
                    class={`inline-flex items-center cursor-pointer justify-center gap-2 rounded-xl
                                            ${streaming.name === 'spotify' ? 'bg-[#1fd25e]' : 'bg-s-inverse-muted'} px-6 py-3.5 text-sm font-semibold text-t-inverse
                                            shadow-md transition-all duration-200
                                            hover:scale-[1.02] ${streaming.name === 'spotify' ? 'hover:bg-[#1ed760]/90' : 'hover:bg-s-inverse-muted/90'}`}
                >
                    <streaming.icon iconSvgClass="w-6.5 h-6.5 text-t-inverse" />

                    {streaming.buttonText}
                </button>
            {/each}
        </div>
	</div>
</section>

