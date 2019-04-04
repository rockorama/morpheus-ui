// @flow

import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { RadioGroup, Radio, Row, Column } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

export default class NormalRadioExample extends Component<{}> {
  render() {
    return (
      <Form onChange={action('clicked')}>
        <RadioGroup name="radio">
          <Row size={2}>
            <Column>
              <Radio
                label="Option 1"
                checkedLabel="Selected Option 1"
                value="option1"
              />
            </Column>
            <Column>
              <Radio label="Disabled Default True" value="option2" />
            </Column>
          </Row>
        </RadioGroup>
      </Form>
    )
  }
}
