// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalSwitch from './examples/NormalSwitch'

class SwitchScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Switch" url="/components/Switch.js">
        <Description>Displays a customizable Switch</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalSwitch />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Switch', () => <SwitchScreen />)
