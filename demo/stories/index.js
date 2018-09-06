import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'
import { OnyxButton } from '@morpheus-ui/core'
import { NewButton } from '@morpheus-ui/core'
import { View, Text } from 'react-native-web'

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

storiesOf('OnyxButton', module).add('with text', () => (
  <OnyxButton onPress={action('clicked')} title="Hello Button" />
))

storiesOf('NewButton', module).add('comparison', () => (
  <View>
    <Text>My button: </Text>
    <NewButton onPress={action('clicked')} title="Hello Button" />
    <Text>Onyx button: </Text>
    <OnyxButton onPress={action('clicked')} title="Hello Button" />
  </View>
))
