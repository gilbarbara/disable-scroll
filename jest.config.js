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
  testRegex: '/src/.*?\\.(test|spec)\\.js$',
  testURL: 'http://localhost:3000',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 15,
      lines: 15,
      statements: 15
    },
  },
  verbose: true,
};
