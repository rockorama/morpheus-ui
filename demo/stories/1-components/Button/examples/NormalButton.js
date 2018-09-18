// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

export default class NormalButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Button onPress={action('clicked')} title="normal button" />
      </View>
    )
  }
}
