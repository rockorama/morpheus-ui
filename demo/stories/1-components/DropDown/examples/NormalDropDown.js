// @flow

import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { DropDown } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

export default class NormalDropDownExample extends Component<{}> {
  render() {
    return (
      <div>
        <Form onChange={action('clicked')}>
          <DropDown
            name="dropdown1"
            displayKey="name"
            valueKey="id"
            defaultValue="0"
            options={[
              { id: 0, name: 'Aways' },
              { id: 1, name: 'Ask' },
              { id: 2, name: 'Never' },
            ]}
            label="Please Select"
          />
          <DropDown
            name="dropdown2"
            options={['Aways', 'Ask', 'Never']}
            label="Please Select"
            required
          />
          <DropDown
            disabled
            name="dropdown3"
            defaultValue="Never"
            label="Please Select"
          />
        </Form>
        <DropDown options={['Aways', 'Ask', 'Never']} label="Please Select" />
      </div>
    )
  }
}
