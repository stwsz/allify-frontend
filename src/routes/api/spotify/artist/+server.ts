import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const token = cookies.get('spotify_access_token');

	const { itemId } = await request.json();

	if (!itemId) {
		return new Response(JSON.stringify({ error: 'No artist ID provided' }), { status: 400 });
	}

	if (!token) {
		return new Response(JSON.stringify({ error: 'No Spotify access token found' }), {
			status: 401
		});
	}

	try {
		const reqArtistDetails = await fetch(`https://api.spotify.com/v1/artists/${itemId}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});

		if (!reqArtistDetails.ok) {
			const err = await reqArtistDetails.text();
			return new Response(JSON.stringify({ error: err }), { status: reqArtistDetails.status });
		}

		const artistData = await reqArtistDetails.json();

		return new Response(JSON.stringify(artistData), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch artist details' }), {
			status: 500
		});
	}
};
