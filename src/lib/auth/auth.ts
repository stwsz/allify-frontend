import { createAuth0Client, type Auth0Client } from '@auth0/auth0-spa-js';
import { writable, get } from 'svelte/store';
import { dev } from '$app/environment';

export const auth0Client = writable<Auth0Client | null>(null);
export const isAuthenticated = writable(false);
export const user = writable<any>(null);
export const isLoading = writable(true);

function getRedirectUri() {
	if (dev) {
		return window.location.origin + '/authentication';
	} else {
		const baseUrl = import.meta.env.VITE_AUTH0_BASE_URL || window.location.origin;
		return baseUrl + '/authentication';
	}
}

function getReturnToUrl() {
	if (dev) {
		return window.location.origin;
	} else {
		return import.meta.env.VITE_AUTH0_BASE_URL || window.location.origin;
	}
}

export async function initAuth() {
	try {
		const client = await createAuth0Client({
			domain: import.meta.env.VITE_AUTH0_DOMAIN,
			clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
			authorizationParams: { 
				redirect_uri: getRedirectUri(),
				scope: 'openid profile email'
			},
			cacheLocation: 'memory',
			useRefreshTokens: !dev,
			useRefreshTokensFallback: false
		});

		auth0Client.set(client);

		const query = window.location.search;
		const isOnAuthPage = window.location.pathname === '/authentication';
		const hasAuthParams = query.includes('code=') && query.includes('state=');

		if (isOnAuthPage && hasAuthParams) {
			try {
				const result = await client.handleRedirectCallback();
				
				if (typeof window !== 'undefined') {
					window.history.replaceState({}, document.title, '/');
				}
			} catch (callbackError) {
				if (typeof window !== 'undefined') {
					window.history.replaceState({}, document.title, '/');
				}
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
	
	if (client) {
		client.loginWithRedirect({
			authorizationParams: {
				connection: connection,
				redirect_uri: getRedirectUri(),
				scope: 'openid profile email'
			}
		});
	} else {
		console.error('Auth0 client not initialized');
	}
}

export function login() {
	const client = get(auth0Client);
	
	if (client) {
		client.loginWithRedirect({
			authorizationParams: {
				redirect_uri: getRedirectUri(),
				scope: 'openid profile email'
			}
		});
	} else {
		console.error('Auth0 client not initialized');
	}
}

export async function logout() {
	const client = get(auth0Client);

	if (client) {
		isAuthenticated.set(false);
		user.set(null);

		const returnTo = getReturnToUrl();

		await client.logout({
			logoutParams: {
				returnTo: returnTo
			}
		});
	} else {
		console.error('Auth0 client not initialized');
	}
}

export async function getAccessToken() {
	const client = get(auth0Client);

	if (client && get(isAuthenticated)) {
		try {
			const token = await client.getTokenSilently();
			return token;
		} catch (error) {
			console.error('Get token error:', error);
			try {
				await client.getTokenWithPopup();
				return await client.getTokenSilently();
			} catch (refreshError) {
				console.error('Token refresh failed:', refreshError);
				await logout();
				return null;
			}
		}
	}

	return null;
}

export function getAuthDebugInfo() {
	return {
		environment: dev ? 'development' : 'production',
		redirectUri: getRedirectUri(),
		returnToUrl: getReturnToUrl(),
		domain: import.meta.env.VITE_AUTH0_DOMAIN,
		clientId: import.meta.env.VITE_AUTH0_CLIENT_ID ? 'Set' : 'Missing',
		baseUrl: import.meta.env.VITE_AUTH0_BASE_URL,
		currentUrl: typeof window !== 'undefined' ? window.location.href : 'SSR'
	};
}