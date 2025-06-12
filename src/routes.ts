/**
 * @type {string[]} publicRoutes - An array of public route paths that do not require authentication.
 */

/**
 * @type {string[]} authRoutes - An array of route paths that are related to authentication, such as login and registration.
 */

/**
 * @type {string} apiAuthPrefix - The prefix used for authentication-related API endpoints.
 */

/**
 * @type {string} DEFAULT_LOGIN_REDIRECT - The default route to redirect users to after a successful login.
 */

export const publicRoutes = ["/"];
export const authRoutes = ["/login", "/register"];
export const privateRoutes = ["/protected"];
export const apiAuthPrefix = "/api/auth";
export const DEFAULT_LOGIN_REDIRECT = "/";
export const DEFAULT_LOGOUT_REDIRECT = "/login";
