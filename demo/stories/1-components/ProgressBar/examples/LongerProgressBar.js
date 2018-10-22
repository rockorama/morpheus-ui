// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { ProgressBar } from '@morpheus-ui/core'

export default class LongerProgressBarExample extends Component<{}> {
  render() {
    return (
      <View>
        <ProgressBar length={5} />
      </View>
    )
  }
}
