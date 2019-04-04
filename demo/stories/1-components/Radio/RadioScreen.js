// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalRadio from './examples/NormalRadio'

class RadioScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Radio" url="/components/Radio.js">
        <Description>Displays a customizable Radio</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalRadio />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Radio', () => <RadioScreen />)
