/**
 * @flow
 */

import { StyleSheet, View } from 'react-native'
import { Button } from '@morpheus-ui/core'
import React from 'react'

const DisabledButtonExample = () => (
  <View>
    <Button
      onPress={console.log('hi')}
      disabled={true}
      title="disabled button"
    />
  </View>
)

const styles = StyleSheet.create({})

export default DisabledButtonExample
