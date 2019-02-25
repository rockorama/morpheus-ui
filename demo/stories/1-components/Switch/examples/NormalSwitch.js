// @flow

import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Switch, Row, Column } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

export default class NormalSwitchExample extends Component<{}> {
  render() {
    return (
      <Row size={2}>
        <Form onChange={action('clicked')}>
          <Column>
            <Switch name="switch1" label="Not Checked" checkedLabel="Checked" />
          </Column>

          <Column>
            <Switch
              name="switch2"
              label="Disabled Default True"
              defaultValue={true}
              disabled
              required
            />
          </Column>
        </Form>
        <Column>
          <Switch defaultValue={true} />
        </Column>
      </Row>
    )
  }
}
