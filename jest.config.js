module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.tsx',
    '!**/*.stories.tsx',
    '!**/__tests__/**',
    '!**/node_modules/**',
    '!**/src/icons/**',
    '!**/src/assets/**',
    '!**/src/test-utils.tsx',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  modulePaths: ['<rootDir>/src'],
};
