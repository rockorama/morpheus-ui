module.exports = {
  automock: false,
  collectCoverage: true,
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFiles: ['jest-canvas-mock'],
}
