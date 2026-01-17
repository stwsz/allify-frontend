import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { token } = await request.json();

		if (!token) {
			return new Response('Access token is required', { status: 400 });
		}

		const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (!response.ok) {
			const err = await response.text();
			return new Response(err, { status: response.status });
		}

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response('Failed to fetch Spotify access token', { status: 500 });
	}
};
