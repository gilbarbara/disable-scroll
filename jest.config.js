module.exports = {
  transform: {
    '.*': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
    './',
  ],
  setupFiles: [
    '<rootDir>/test/__setup__/index.js',
  ],
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  testURL: 'http://localhost:3000',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    },
  },
  verbose: true,
};
