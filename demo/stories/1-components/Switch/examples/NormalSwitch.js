// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Switch } from '@morpheus-ui/core'

export default class NormalSwitchExample extends Component<{}> {
  render() {
    return (
      <View>
        <Switch />
      </View>
    )
  }
}
