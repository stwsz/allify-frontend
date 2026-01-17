import type { RequestHandler } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				grant_type: 'client_credentials',
				client_id: SPOTIFY_CLIENT_ID,
				client_secret: SPOTIFY_CLIENT_SECRET
			})
		});

		if (!response.ok) {
			const err = await response.text();
			return new Response(err, { status: response.status });
		}

		const data = await response.json();

		return new Response(JSON.stringify({ access_token: data.access_token }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response('Failed to fetch Spotify access token', { status: 500 });
	}
};
