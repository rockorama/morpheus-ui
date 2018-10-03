// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Switch } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class DarkSwitchExample extends Component<{}> {
  render() {
    return (
      <View style={styles.background}>
        <Switch dark={true} onPress={action('clicked')} />
      </View>
    )
  }
}
