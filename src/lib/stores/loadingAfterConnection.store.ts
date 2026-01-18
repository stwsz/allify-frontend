import { writable, type Writable } from 'svelte/store';

export const loadingAfterConnectionStore: Writable<{
	loading: boolean;
	streamingPlatform: 'spotify' | 'deezer' | null;
}> = writable({ loading: false, streamingPlatform: null });
