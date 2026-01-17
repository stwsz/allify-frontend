export type SpotifyImage = {
	url: string;
	height: number | null;
	width: number | null;
};

export type SpotifyFollowers = {
	href: string | null;
	total: number;
};

export type SpotifyExternalUrls = {
	spotify: string;
};

export type SpotifyExplicitContent = {
	filter_enabled: boolean;
	filter_locked: boolean;
};

export type MeType = {
	streaming: string;
	id: string;
	display_name: string;
	email: string;
	country: string;
	external_urls: SpotifyExternalUrls;
	followers: SpotifyFollowers;
	images: SpotifyImage[];
	product: 'free' | 'premium' | 'open';
	type: 'user';
	uri: string;
	href: string;
	explicit_content: SpotifyExplicitContent;
};
