// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

export default class OutlinedButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Button outlined title="outlined button" onPress={action('clicked')} />
      </View>
    )
  }
}
