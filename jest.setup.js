// Mock config/env module for Jest
jest.mock('./src/config/env', () => ({
    config: {
        isDevelopment: process.env.NODE_ENV === 'development',
        isProduction: process.env.NODE_ENV === 'production',
        baseUrl: '/',
        version: '1.0.0',
    },
    endpoints: {},
}));

