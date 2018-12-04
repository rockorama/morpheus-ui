// @flow

import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalTextField from './examples/NormalTextField'

class TextFieldScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="TextField" url="/components/TextField.js">
        <Description>Displays a customizable TextField</Description>
        <Section title="Props">
          <DocItem
            description="The default button style."
            example={{
              render: () => <NormalTextField />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('TextField', () => <TextFieldScreen />)
