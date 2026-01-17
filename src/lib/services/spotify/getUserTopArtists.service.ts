export async function getUserTopArtists(token: string) {
	try {
		if (!token || token.trim() === '') {
			throw new Error('Access token is required');
		}

		const requestToArtistData = await fetch('/api/get-user-top-artists', {
			method: 'POST',
			body: JSON.stringify({
				token
			})
		});

		const artistData = await requestToArtistData.json();

		return artistData;
	} catch (error) {
		console.error('Failed to fetch Spotify access token', error);
		throw error;
	}
}
