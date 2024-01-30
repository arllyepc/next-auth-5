/**
 * An array of routes that are public.
 * these routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are protected.
 * these routes require authentication.
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes.
 * This is used to determine if a route is an API authentication route.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a user logs in.
 * This is used to redirect users after they log in.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
