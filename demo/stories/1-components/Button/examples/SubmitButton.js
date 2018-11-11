// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button, Form } from '@morpheus-ui/core'

export default class NormalButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Form onSubmit={action('clicked')}>
          <Button submit title="Submit button" />
        </Form>
      </View>
    )
  }
}
