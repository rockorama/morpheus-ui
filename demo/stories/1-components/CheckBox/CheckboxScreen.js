// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalCheckbox from './examples/NormalCheckbox'

class CheckboxScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Checkbox" url="/components/Checkbox.js">
        <Description>Displays a customizable Checkbox</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalCheckbox />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Checkbox', () => <CheckboxScreen />)
