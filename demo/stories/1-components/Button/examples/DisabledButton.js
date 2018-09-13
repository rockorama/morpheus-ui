/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import { Button } from '@morpheus-ui/core'

class DisabledButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={console.log('button pressed')}
          disabled={true}
          title="disabled button"
        />
      </View>
    )
  }
}

export default DisabledButtonExample
