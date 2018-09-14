/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

/**
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native-web'
import AppText from './AppText'

type ExternalLinkType = {
  props?: any,
}

const ExternalLink = ({ props }: ExternalLinkType) => (
  <AppText {...props} accessibilityRole="link" target="_blank" />
)

export default ExternalLink
