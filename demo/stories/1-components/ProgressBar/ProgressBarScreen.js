// @flow

import React, { Component } from 'react'
import { Text } from 'react-native-web'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalProgressBar from './examples/NormalProgressBar'
import LongerProgressBar from './examples/LongerProgressBar'
import ControlProgressBar from './examples/ControlProgressBar'

class ProgressBarScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="ProgressBar" url="/components/ProgressBar.js">
        <Description>
          <Text>Displays a customizable progress bar</Text>
        </Description>
        <Section title="Props">
          <DocItem
            description="The default progress bar style."
            example={{
              render: () => <NormalProgressBar />,
            }}
          />
          <DocItem
            name="length"
            description="A longer progress bar."
            typeInfo="?integer"
            example={{
              render: () => <LongerProgressBar />,
            }}
          />
          <DocItem
            name="control"
            typeInfo="?() => integer | ?integer"
            description="Control progress."
            example={{
              render: () => <ControlProgressBar />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('ProgressBar', () => <ProgressBarScreen />)
