import { json, redirect, error } from '@sveltejs/kit';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REDIRECT_URI
} from '$env/static/private';

export const GET = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	const savedState = cookies.get('spotify_state');

	if (!code) {
		return json({ error: 'No code received' }, { status: 400 });
	}

	if (state !== savedState) {
		throw error(403, 'Invalid state');
	}

	const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')
		},
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: SPOTIFY_REDIRECT_URI
		})
	});

	const tokenData = await tokenRes.json();

	cookies.set('spotify_access_token', tokenData.access_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		maxAge: tokenData.expires_in
	});

	cookies.set('spotify_refresh_token', tokenData.refresh_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		maxAge: 60 * 60 * 24 * 30
	});

	cookies.delete('spotify_state', { path: '/' });

	throw redirect(302, '/my-musical-profile');
};
