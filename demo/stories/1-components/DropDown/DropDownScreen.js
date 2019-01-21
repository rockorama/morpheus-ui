// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalDropDown from './examples/NormalDropDown'

class DropDownScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="DropDown" url="/components/DropDown.js">
        <Description>Displays a customizable DropDown</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalDropDown />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('DropDown', () => <DropDownScreen />)
