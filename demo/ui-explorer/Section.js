/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

/**
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'

const SectionTitle = ({ children }) => (
  <AppText style={styles.sectionTitle}>{children}</AppText>
)

const Section = ({ children, title }) => (
  <View>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </View>
)

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: '1.3125rem',
    marginBottom: '1.3125rem',
    fontWeight: 'bold',
  },
})

export default Section
