module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  rootDir: './src',
  testEnvironment: 'node',
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
};
