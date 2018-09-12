/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'

const TextList = ({ items }) => (
  <View accessibilityTraits="list" style={styles.list}>
    {items.map((item, i) => (
      <AppText accessibilityTraits="listitem" key={i} style={styles.item}>
        <View style={styles.bullet} />
        {item}
      </AppText>
    ))}
  </View>
)

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    paddingLeft: 20,
    marginBottom: '0.5rem',
  },
  bullet: {
    position: 'absolute',
    left: 6,
    top: '.65625rem',
    marginTop: -2,
    height: 4,
    width: 4,
    backgroundColor: 'black',
    borderRadius: 50,
  },
})

export default TextList
