import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalGrow from './examples/NormalGrow'
import HoverGrow from './examples/HoverGrow'

class GrowScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Switch" url="/components/Switch.js">
        <Description>Displays a customizable switch button</Description>
        <Section title="Props">
          <DocItem
            typeInfo="?boolean = true"
            description="Normal button with default symbol and no hover."
            example={{
              render: () => <NormalGrow />,
            }}
          />
          <DocItem
            name="hover"
            typeInfo="?String"
            description="What the button will say when hovered on."
            example={{
              render: () => <HoverGrow />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('GrowButton', () => <GrowScreen />)
