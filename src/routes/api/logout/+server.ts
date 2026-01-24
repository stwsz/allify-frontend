import { json } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
	cookies.delete('spotify_access_token', {
		path: '/'
	});

	cookies.delete('spotify_refresh_token', {
		path: '/'
	});

	return json({ success: true });
};
