// Environment configuration
export const config = {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    baseUrl: import.meta.env.BASE_URL || '/',
    version: import.meta.env.VITE_VERSION || '1.0.0',
} as const;

// API endpoints (if needed in the future)
export const endpoints = {
    // contact: '/api/contact',
    // analytics: '/api/analytics'
} as const;
