/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import { Button } from '@morpheus-ui/core'

class NormalButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={console.log('button pressed')} title="normal button" />
      </View>
    )
  }
}

export default NormalButtonExample
