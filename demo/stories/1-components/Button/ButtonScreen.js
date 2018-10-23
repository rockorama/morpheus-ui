/* modified from React Native for Web's Storybook structure */
/* which is under MIT license */
/* RNW storybook url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook */

// @flow

import React, { Component } from 'react'

import { Text } from 'react-native-web'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalButton from './examples/NormalButton'
import DisabledButton from './examples/DisabledButton'
import OutlinedButton from './examples/OutlinedButton'

class ButtonScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Button" url="/components/Button.js">
        <Description>
          <Text>Displays a customizable button</Text>
        </Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalButton />,
            }}
          />
          <DocItem
            name="disabled"
            typeInfo="?boolean = false"
            description="Don't allow button press."
            example={{
              render: () => <DisabledButton />,
            }}
          />
          <DocItem
            name="outlined"
            typeInfo="?boolean = true"
            description="Default outlined style."
            example={{
              render: () => <OutlinedButton />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Button', () => <ButtonScreen />)
