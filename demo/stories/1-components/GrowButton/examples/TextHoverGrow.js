// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { GrowButton } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#102043',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class TextHoverGrowExample extends Component<{}> {
  render() {
    return (
      <View style={styles.background}>
        <GrowButton
          style={styles.button}
          onPress={action('clicked')}
          hover={'Button grows & shrinks with title'}
        />
      </View>
    )
  }
}
