import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalSwitch from './examples/NormalSwitch'
import DefaultSwitch from './examples/DefaultSwitch'

class SwitchScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Switch" url="/components/Switch.js">
        <Description>Displays a customizable switch button</Description>
        <Section title="Props">
          <DocItem
            description="The normal switch style."
            example={{
              render: () => <NormalSwitch />,
            }}
          />
          <DocItem
            description="The normal switch style with prop default."
            typeInfo="?boolean = true"
            description="Switch default state of the switch to other side."
            example={{
              render: () => <DefaultSwitch />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Switch', () => <SwitchScreen />)
