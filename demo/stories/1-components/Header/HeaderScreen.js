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

import Header from './examples/Header'

type Props = {
  subhead: string,
}

class HeaderScreen extends Component<Props> {
  render() {
    return (
      <UIExplorer title="Header" url="/components/Header.js">
        <Description>Displays a customizable header</Description>
        <Section title="Props">
          <DocItem
            description="The default header style."
            example={{
              render: () => <Header />,
            }}
          />
          <DocItem
            name="subhead"
            typeInfo="?boolean = true"
            description="The header with a subheader."
            example={{
              render: () => (
                <Header subhead="this is a sample header with a subhead" />
              ),
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Header', () => <HeaderScreen />)
