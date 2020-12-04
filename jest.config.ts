module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src', './'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/test/__setup__/index.ts'],
  testRegex: '/test/.*?\\.(test|spec)\\.ts$',
  testURL: 'http://localhost:3000',
  verbose: false,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
