export async function getSpotifyAccessToken() {
	try {
		const requestToGetSpotifyToken = await fetch('/api/get-spotify-access-token');

		const spotifyToken = await requestToGetSpotifyToken.json();

		return spotifyToken.access_token;
	} catch (error) {
		console.error('Failed to fetch Spotify access token', error);
		throw error;
	}
}
