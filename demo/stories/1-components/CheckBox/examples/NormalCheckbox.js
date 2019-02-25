// @flow

import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Checkbox, Row, Column } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

export default class NormalCheckboxExample extends Component<{}> {
  render() {
    return (
      <Row size={2}>
        <Form onChange={action('clicked')}>
          <Column>
            <Checkbox
              name="switch1"
              label="Not Checked"
              checkedLabel="Checked"
            />
          </Column>

          <Column>
            <Checkbox
              name="switch2"
              label="Disabled Default True"
              defaultValue={true}
              required
            />
          </Column>
        </Form>
        <Column>
          <Checkbox defaultValue={true} />
        </Column>
      </Row>
    )
  }
}
