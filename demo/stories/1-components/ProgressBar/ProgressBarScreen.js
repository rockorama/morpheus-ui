// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalProgressBar from './examples/NormalProgressBar'

class ProgressBarScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Button" url="/components/Button.js">
        <Description>Displays a customizable button</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalProgressBar />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('ProgressBar', () => <ProgressBarScreen />)
