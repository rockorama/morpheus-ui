/**
 * @flow
 */

import { View } from 'react-native'
import { Button } from '@morpheus-ui/core'
import React from 'react'

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
