/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/**
 * @flow
 */

import { createElement, StyleSheet } from 'react-native-web'

type PropsType = {
  props: any,
}

const Code = ({ props }: PropsType) =>
  createElement('code', { ...props, style: [styles.code, props.style] })

export default Code

const styles = StyleSheet.create({
  code: {
    fontFamily: 'monospace, monospace',
    fontSize: '1rem',
    lineHeight: '1.3125em',
    whiteSpace: 'pre',
  },
})
