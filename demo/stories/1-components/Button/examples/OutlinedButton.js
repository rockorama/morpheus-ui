/**
 * @flow
 */

import { StyleSheet, View } from 'react-native'
import { Button } from '@morpheus-ui/core'
import React from 'react'

const OutlinedButtonExample = () => (
  <View>
    <Button
      onPress={console.log('button pressed')}
      title="outlined button"
      outlineStyle={true}
    />
  </View>
)

const styles = StyleSheet.create({})

export default OutlinedButtonExample
