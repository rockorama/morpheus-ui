/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

const StyleList = ({ stylePropTypes }) => (
  <View accessibilityTraits="list">
    {stylePropTypes.map(({ label, name, typeInfo }, i) => (
      <AppText accessibilityTraits="listitem" key={i} style={styles.item}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <Text style={styles.name}>{name}</Text>
        {typeInfo ? ': ' : null}
        {typeInfo ? <Text style={styles.code}>{typeInfo}</Text> : null}
      </AppText>
    ))}
  </View>
)

const styles = StyleSheet.create({
  code: {
    fontFamily: 'monospace, monospace',
    lineHeight: '1.3125em',
  },
  item: {
    fontSize: '0.85rem',
    marginLeft: 20,
    marginBottom: '0.5rem',
  },
  name: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: '2rem',
  },
  label: {
    borderRadius: '1rem',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.5rem',
    marginRight: '0.5rem',
    backgroundColor: '#bdebff',
    color: '#025268',
  },
})

export default StyleList
