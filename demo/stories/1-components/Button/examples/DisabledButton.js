// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

export default class OutlinedButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Button disabled>disabled button</Button>
      </View>
    )
  }
}
