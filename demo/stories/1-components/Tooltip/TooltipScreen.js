/* modified from React Native for Web's Storybook structure */
/* which is under MIT license */
/* RNW storybook url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook */

// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalTooltip from './examples/NormalTooltip'

class TooltipScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Tooltip" url="/components/Tooltip.js">
        <Description>Displays a customizable Tooltip</Description>
        <Section title="Props">
          <DocItem
            description="The default Tooltip style."
            example={{
              render: () => <NormalTooltip />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Tooltip', () => <TooltipScreen />)
