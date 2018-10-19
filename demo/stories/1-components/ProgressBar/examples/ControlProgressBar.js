// @flow
import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { ProgressBar } from '@morpheus-ui/core'
import timer from 'react-native-timer'

let index = 0

export default class ControlProgressBarExample extends Component<{}> {
  control() {
    timer.setInterval(
      'control',
      () => {
        index === 3 ? (index = 0) : index++
        console.log(index)
        return index
      },
      2000,
    )
  }

  render() {
    return (
      <View>
        <ProgressBar length={4} control={() => this.control()} />
      </View>
    )
  }
}
