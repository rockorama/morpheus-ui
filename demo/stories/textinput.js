// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputText } from '@morpheus-ui/core'

storiesOf('Text Input', module)
  .add('full width', () => (
    <InputText
      fullwidth="true"
      placeholder="placeholder for full width text input"
    />
  ))
  .add('half width', () => (
    <InputText
      halfwidth="true"
      placeholder="placeholder for half width text input"
    />
  ))
  .add('multiline', () => (
    <InputText
      multiline="true"
      placeholder="placeholder for multiline text input"
    />
  ))
  .add('singleLine', () => (
    <InputText
      singleline="true"
      placeholder="placeholder for single line text input"
    />
  ))
  .add('white', () => (
    <InputText white="true" placeholder="placeholder for white text input" />
  ))
