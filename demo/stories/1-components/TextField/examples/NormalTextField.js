// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { TextField, Row, Column } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

export default class NormaltextFieldExample extends Component<{}> {
  render() {
    return (
      <>
        <Form onSubmit={action('clicked')}>
          <Row size={2}>
            <Column>
              <TextField name="name" label="Name" required />
            </Column>

            <Column>
              <TextField
                type="email"
                placeholder="put the vault name here"
                name="email"
                label="Email"
                required
              />
            </Column>

            <Column>
              <TextField
                name="password"
                type="password"
                label="Password"
                required
              />
            </Column>

            <Column sm={2}>
              <TextField
                name="message"
                label="Message"
                multiline
                required
                numberOfLines={6}
              />
            </Column>
          </Row>
        </Form>
      </>
    )
  }
}
