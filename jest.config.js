module.exports = {
  automock: false,
  bail: true,
  collectCoverage: true,
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  setupFiles: ['jest-canvas-mock'],
}
