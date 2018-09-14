// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

class NormalButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Button onClick={action('clicked')}>normal button</Button>
      </View>
    )
  }
}
