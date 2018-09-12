/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/.storybook */

import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  root: {
    minHeight: '100vh',
    maxWidth: 680,
    marginHorizontal: 'auto',
  },
})

export default function(renderStory) {
  return <View style={styles.root}>{renderStory()}</View>
}
