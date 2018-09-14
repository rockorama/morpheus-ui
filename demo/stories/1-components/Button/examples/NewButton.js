// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'
import { NewButton } from '@morpheus-ui/core'

export default class NewButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <NewButton />
      </View>
    )
  }
}
