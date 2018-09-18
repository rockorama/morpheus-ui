module.exports = {
  automock: false,
  collectCoverage: true,
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  setupFiles: ['jest-canvas-mock'],
}
