/**
 * @flow
 */
import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

class NormalButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Button onPress={action('clicked')} title="normal button" />
      </View>
    )
  }
}

export default NormalButtonExample
