/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

/**
 * @flow
 */

import { bool } from 'prop-types'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

class AppText extends React.PureComponent {
  static contextTypes = {
    isInAParentText: bool,
  }

  render() {
    const { style, ...rest } = this.props
    const isInAParentText = this.context
    return (
      <Text
        {...rest}
        accessibilityRole={rest.href ? 'link' : undefined}
        style={[
          !isInAParentText && styles.baseText,
          style,
          rest.href && styles.link,
        ]}
      />
    )
  }
}

export default AppText

const styles = StyleSheet.create({
  baseText: {
    fontSize: '1rem',
    lineHeight: '1.3125em',
  },
  link: {
    color: '#1B95E0',
    marginTop: 'calc(0.5 * 1.3125rem)',
    textDecorationLine: 'underline',
  },
})
