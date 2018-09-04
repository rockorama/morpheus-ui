// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onPress={action('clicked')} title="Hello Button" />
  ))
  .add('with some emoji', () => (
    <Button
      onPress={action('clicked')}
      title={
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      }
    />
  ))
