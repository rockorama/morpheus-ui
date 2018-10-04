// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { GrowButton } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#102043',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class HoverGrowExample extends Component<{}> {
  render() {
    return (
      <View style={styles.background}>
        <GrowButton onPress={action('clicked')} hover={'Install'} />
      </View>
    )
  }
}
