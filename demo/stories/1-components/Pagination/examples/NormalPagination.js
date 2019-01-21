// @flow

import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Pagination } from '@morpheus-ui/core'

export default class NormalPaginationExample extends Component<{}> {
  render() {
    return (
      <div>
        <Pagination
          onSelectPage={action('clicked')}
          numPages={10}
          label="Page"
        />
        <Pagination
          onSelectPage={action('clicked')}
          defaultPage={25}
          maxDisplay={10}
          numPages={100}
        />
      </div>
    )
  }
}
