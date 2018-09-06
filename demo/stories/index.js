// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'
import { StyleSheet } from 'react-native-web'

storiesOf('Button', module)
  .add('normal', () => (
    <Button onPress={action('clicked')} title="Hello Button" />
  ))
  .add('disabled', () => <Button disabled={true} title="Hello Button" />)
  .add('outlineStyle', () => (
    <Button outlineStyle={true} title="Hello Button" />
  ))
  .add('buttonStyle', () => (
    <Button buttonStyle={styles.myButtonStyle} title="Hello Button" />
  ))
  .add('textStyle', () => (
    <Button textStyle={styles.myTextStyle} title="Hello Button" />
  ))

const styles = StyleSheet.create({
  myButtonStyle: {
    backgroundColor: '#00A7E7',
    borderWidth: 2,
    borderColor: '#09142E',
  },
  myTextStyle: {
    color: '#102043',
    fontWeight: 'bold',
  },
})
