/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

class NormalButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={action('clicked')} title="normal button" />
      </View>
    )
  }
}

export default NormalButtonExample
