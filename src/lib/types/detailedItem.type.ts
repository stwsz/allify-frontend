export type DetailedArtistItem = {
	name?: string;
	images?: { url: string }[];
	followers?: { total?: number };
	external_urls?: { spotify?: string };
	popularity?: number;
	genres?: string[];
};

export type DetailedTrackItem = {
	name?: string;
	popularity?: number;
	duration_ms?: number;
	explicit?: boolean;
	track_number?: number;
	external_urls?: { spotify?: string };
	artists?: {
		name?: string;
	}[];
	album?: {
		name?: string;
		release_date?: string;
		total_tracks?: number;
		images?: {
			url: string;
		}[];
	};
};
