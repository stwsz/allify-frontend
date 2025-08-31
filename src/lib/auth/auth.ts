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
		console.log('Initializing Auth0 in', dev ? 'development' : 'production', 'mode');
		console.log('Redirect URI:', getRedirectUri());
		
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
				console.log('Processing Auth0 callback...');
				const result = await client.handleRedirectCallback();
				console.log('Callback processed successfully:', result);
				
				// Redireciona para home após sucesso
				if (typeof window !== 'undefined') {
					window.history.replaceState({}, document.title, '/');
				}
			} catch (callbackError) {
				console.error('Callback error:', callbackError);
				// Em caso de erro, limpa a URL e vai para home
				if (typeof window !== 'undefined') {
					window.history.replaceState({}, document.title, '/');
				}
			}
		}

		await checkAuthStatus(client);
	} catch (error) {
		console.error('Auth initialization error:', error);
		console.error('Environment variables check:');
		console.error('- VITE_AUTH0_DOMAIN:', import.meta.env.VITE_AUTH0_DOMAIN);
		console.error('- VITE_AUTH0_CLIENT_ID:', import.meta.env.VITE_AUTH0_CLIENT_ID ? 'Set' : 'Missing');
		console.error('- VITE_AUTH0_BASE_URL:', import.meta.env.VITE_AUTH0_BASE_URL);
	} finally {
		isLoading.set(false);
	}
}

async function checkAuthStatus(client: Auth0Client) {
	try {
		const loggedIn = await client.isAuthenticated();
		console.log('User authenticated:', loggedIn);
		isAuthenticated.set(loggedIn);

		if (loggedIn) {
			const userData = await client.getUser();
			console.log('User data:', userData);
			user.set(userData);

			try {
				const token = await client.getTokenSilently();
				console.log('Token obtained successfully');
			} catch (tokenError) {
				console.error('Token error:', tokenError);
				// Se não conseguir obter token, faz logout
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
		console.log('Starting login with connection:', connection);
		console.log('Using redirect URI:', getRedirectUri());
		
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
		console.log('Starting login');
		console.log('Using redirect URI:', getRedirectUri());
		
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
		console.log('Logging out...');
		isAuthenticated.set(false);
		user.set(null);

		const returnTo = getReturnToUrl();
		console.log('Return to URL:', returnTo);

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
				console.log('Attempting to refresh token...');
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