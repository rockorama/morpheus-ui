// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'
import { StyleSheet } from 'react-native-web'
import COLORS from '../../packages/core/src/colors'

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
    backgroundColor: COLORS.LIGHTEST_BLUE,
    borderWidth: 2,
    borderColor: COLORS.DARK_BLUE,
  },
  myTextStyle: {
    color: COLORS.PRIMARY_BLUE,
    fontWeight: 'bold',
  },
})
