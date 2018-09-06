import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { OnyxButton } from '@morpheus-ui/core'
import { Button } from '@morpheus-ui/core'
import { View, Text, StyleSheet } from 'react-native-web'

storiesOf('NewButton', module)
  .add('normal', () => (
    <Button onPress={action('clicked')} title="Hello Button" />
  ))
  .add('disabled', () => <Button disabled={true} title="Hello Button" />)
  .add('outlineStyle', () => (
    <Button outlineStyle={true} title="Hello Button" />
  ))
  .add('customStyle', () => (
    <Button customStyle={styles.myCustomStyle} title="Hello Button" />
  ))
  .add('textStyle', () => (
    <Button textStyle={styles.myCustomTextStyle} title="Hello Button" />
  ))

const styles = StyleSheet.create({
  myCustomStyle: {
    backgroundColor: '#00A7E7',
  },
  myCustomTextStyle: {
    color: '#09142E',
  },
})
