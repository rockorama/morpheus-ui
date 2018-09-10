// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { InputText } from '@morpheus-ui/core'

storiesOf('Text Input', module)
  .add('normal', () => (
    <InputText />
  ))
  // .add('altered', () => (
  //   <Button
  //     onPress={action('clicked')}
  //     title={
  //       <span role="img" aria-label="so cool">
  //         😀 😎 👍 💯
  //       </span>
  //     }
  //   />
  // ))
