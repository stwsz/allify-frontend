import { createAuth0Client, type Auth0Client } from '@auth0/auth0-spa-js';
import { writable, get } from 'svelte/store';

export const auth0Client = writable<Auth0Client | null>(null);
export const isAuthenticated = writable(false);
export const user = writable<any>(null);
export const isLoading = writable(true);

function getRedirectUri() {
	return window.location.origin + '/authentication';
}

export async function initAuth() {
	try {
		const client = await createAuth0Client({
			domain: import.meta.env.VITE_AUTH0_DOMAIN,
			clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
			authorizationParams: { redirect_uri: getRedirectUri() },
			cacheLocation: 'memory' 
		});


		auth0Client.set(client);

		const query = window.location.search;
		const isOnAuthPage = window.location.pathname === '/authentication';
		const hasAuthParams = query.includes('code=') && query.includes('state=');

		if (isOnAuthPage && hasAuthParams) {
			try {
				const result = await client.handleRedirectCallback();
				window.history.replaceState({}, document.title, '/');
			} catch (callbackError) {
				console.error('Callback error:', callbackError);
				window.history.replaceState({}, document.title, '/');
			}
		}

		await checkAuthStatus(client);
	} catch (error) {
		console.error('Auth initialization error:', error);
	} finally {
		isLoading.set(false);
	}
}

async function checkAuthStatus(client: Auth0Client) {
	try {
		const loggedIn = await client.isAuthenticated();
		isAuthenticated.set(loggedIn);

		if (loggedIn) {
			const userData = await client.getUser();
			user.set(userData);

			try {
				const token = await client.getTokenSilently();
			} catch (tokenError) {
				console.error('Token error:', tokenError);
				await logout();
			}
		} else {
			user.set(null);
		}
	} catch (error) {
		console.error('Auth status check error:', error);
		isAuthenticated.set(false);
		user.set(null);
	}
}

export function loginWithProvider(connection: string) {
	const client = get(auth0Client);

	console.log('Domain:', import.meta.env.VITE_AUTH0_DOMAIN);
	console.log('Client ID:', import.meta.env.VITE_AUTH0_CLIENT_ID);
	console.log('Redirect URI:', window.location.origin + '/authentication');

	if (client) {
		client.loginWithRedirect({
			authorizationParams: {
				connection: connection,
				redirect_uri: getRedirectUri()
			}
		});
	}
}

export async function logout() {
	const client = get(auth0Client);

	if (client) {
		isAuthenticated.set(false);
		user.set(null);

		await client.logout({
			logoutParams: {
				returnTo: window.location.origin
			}
		});
	}
}

export async function getAccessToken() {
	const client = get(auth0Client);

	if (client && get(isAuthenticated)) {
		try {
			return await client.getTokenSilently();
		} catch (error) {
			console.error('Get token error:', error);
			return null;
		}
	}

	return null;
}