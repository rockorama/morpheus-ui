// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

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
