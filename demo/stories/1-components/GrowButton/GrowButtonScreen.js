import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalHoverGrow from './examples/NormalHoverGrow'
import TextHoverGrow from './examples/TextHoverGrow'
import SymbolHoverGrow from './examples/SymbolHoverGrow'

class GrowScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Switch" url="/components/Switch.js">
        <Description>Displays a customizable switch button</Description>
        <Section title="Props">
          <DocItem
            description="Default HoverGrow with no props."
            example={{
              render: () => <NormalHoverGrow />,
            }}
          />
          <DocItem
            name="hover"
            typeInfo="?String"
            description="Select what the button will say on hover."
            example={{
              render: () => <TextHoverGrow />,
            }}
          />
          <DocItem
            name="logo"
            typeInfo="?String"
            description="Select which symbol will appear. Current options are 'plus' and 'cross'."
            example={{
              render: () => <SymbolHoverGrow />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('GrowButton', () => <GrowScreen />)
