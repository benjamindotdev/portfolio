// Environment configuration
export const config = {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    baseUrl: process.env.PUBLIC_URL || '',
    version: process.env.REACT_APP_VERSION || '1.0.0',
} as const;

// API endpoints (if needed in the future)
export const endpoints = {
    // contact: '/api/contact',
    // analytics: '/api/analytics'
} as const;
