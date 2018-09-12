/**
 * @flow
 */

import { StyleSheet, View } from 'react-native'
import { Button } from '@morpheus-ui/core'
import React from 'react'

const NormalButtonExample = () => (
  <View>
    <Button onPress={console.log('button pressed')} title="normal button" />
  </View>
)

const styles = StyleSheet.create({})

export default NormalButtonExample
