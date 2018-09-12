/**
 * @flow
 */

import { View } from 'react-native'
import { Button } from '@morpheus-ui/core'
import React from 'react'

class OutlinedButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={console.log('button pressed')}
          title="outlined button"
          outlineStyle={true}
        />
      </View>
    )
  }
}

export default OutlinedButtonExample
