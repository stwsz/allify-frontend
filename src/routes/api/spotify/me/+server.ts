import { json, redirect } from '@sveltejs/kit';

export const GET = async ({ cookies, fetch }) => {
	let token = cookies.get('spotify_access_token');

	if (!token) {
		throw redirect(302, '/login');
	}

	let res = await fetch('https://api.spotify.com/v1/me', {
		headers: { Authorization: `Bearer ${token}` }
	});

	if (res.status === 401 && cookies.get('spotify_refresh_token')) {
		await fetch('/api/spotify/auth/refresh', { method: 'POST' });

		token = cookies.get('spotify_access_token');

		res = await fetch('https://api.spotify.com/v1/me', {
			headers: { Authorization: `Bearer ${token}` }
		});
	}

	if (!res.ok) {
		return json({ error: 'Spotify error' }, { status: res.status });
	}

	const data = await res.json();
	return json(data);
};
