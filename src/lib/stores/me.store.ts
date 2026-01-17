import { writable, type Writable } from 'svelte/store';
import type { MeType } from '$lib/types/me.type';

export const meStore: Writable<MeType | undefined> = writable(undefined);
