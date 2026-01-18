export type MeType = {
	streaming: string;
	id: string;
	display_name: string;
	email: string;
	country: string;
	external_urls: { spotify: string };
	followers: { href: string | null; total: number };
	images: { url: string; height: number | null; width: number | null }[];
	product: 'free' | 'premium' | 'open';
	type: 'user';
	uri: string;
	href: string;
	explicit_content: { filter_enabled: boolean; filter_locked: boolean };
};
