// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
//import { Button } from '@morpheus-ui/core'
//import { NewButton } from '@morpheus-ui/core'

export default class HeaderWithTextExample extends Component<{}> {
  render() {
    return (
      <View>
        <h1>Heading Option With Text</h1>
        <p>sample subtext to display underneath</p>
      </View>
    )
  }
}
