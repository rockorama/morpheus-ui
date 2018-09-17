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

 import NormalHeader from './examples/NormalHeader'
 import HeaderWithText from './examples/HeaderWithText'

class HeaderScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Header" url="/components/Header.js">
        <Description>Displays a customizable header</Description>
        <Section title="Props">
          <DocItem
            description="The default header style."
            example={{
              render: () => <NormalHeader />,
            }}
          />
          <DocItem
            name="subhead"
            typeInfo="?boolean = false"
            description="The header with a subheader."
            example={{
              render: () => <HeaderWithText />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Header', () => <HeaderScreen />)
