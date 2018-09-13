module.exports = {
  extends: ['mainframe', 'mainframe/jest', 'mainframe/react-native-web'],
  settings: {
    react: {
      version: '16.4',
      flowVersion: '0.80',
    },
    'import/resolver': {
      alias: [['@morpheus-ui/core', '../../../../../packages/core/']],
    },
  },
}
