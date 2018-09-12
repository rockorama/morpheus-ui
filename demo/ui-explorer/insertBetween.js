/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

const insertBetween = (item, array) =>
  array.reduce((acc, curr, i, { length }) => {
    if (i && i < length) {
      return [...acc, item(), curr]
    }
    return [...acc, curr]
  }, [])

export default insertBetween
