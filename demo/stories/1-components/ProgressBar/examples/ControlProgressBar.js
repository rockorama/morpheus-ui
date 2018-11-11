// @flow
import React, { Component } from 'react'
import { View } from 'react-native'
import { ProgressBar } from '@morpheus-ui/core'

export default class ControlProgressBarExample extends Component<{}> {
  render() {
    return (
      <View>
        <ProgressBar control={1} />
      </View>
    )
  }
}
