/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.jest.json",
    }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/__mocks__/fileMock.js",
  },
  globals: {
    'import.meta': {
      env: {
        DEV: process.env.NODE_ENV === 'development',
        PROD: process.env.NODE_ENV === 'production',
        MODE: process.env.NODE_ENV || 'test',
        BASE_URL: '/',
        VITE_GA_ID: 'test-ga-id',
        VITE_SITE_URL: 'http://localhost:3000',
        VITE_SITE_NAME: 'Test Site',
        VITE_VERSION: '1.0.0',
      },
    },
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/tests/",  // Ignore Playwright E2E tests
  ],
  // Coverage configuration
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/**/*.test.{js,jsx,ts,tsx}",
    "!src/**/*.spec.{js,jsx,ts,tsx}",
    "!src/vite-env.d.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  coverageReporters: ["text", "lcov", "html", "json-summary"],
};