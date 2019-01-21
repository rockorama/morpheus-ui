// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalPagination from './examples/NormalPagination'

class PaginationScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Pagination" url="/components/Pagination.js">
        <Description>Displays a customizable Pagination</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalPagination />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Pagination', () => <PaginationScreen />)
