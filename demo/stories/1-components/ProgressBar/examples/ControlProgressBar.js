// @flow
import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { ProgressBar } from '@morpheus-ui/core'
import timer from 'react-native-timer'

const index = 0

export default class ControlProgressBarExample extends Component<{}> {
  render() {
    return (
      <View>
        <ProgressBar length={4} control={3} />
      </View>
    )
  }
}
