/* modified from React Native for Web's Storybook structure */
/* which is under MIT license */
/* RNW storybook url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook */

/* eslint-disable react/jsx-sort-props */

/**
 * @flow
 */

import React from 'react'
import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'
import NormalButton from './examples/NormalButton'
import DisabledButton from './examples/DisabledButton'
import OutlinedButton from './examples/OutlinedButton'

const ButtonScreen = () => (
  <UIExplorer title="Button" url="1-components/Button">
    <Description>Displays a customizable button</Description>
    <Section title="Props">
      <DocItem name="...View props" />
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
        name="outlineStyle"
        typeInfo="?boolean = true"
        description="Default outlined style."
        example={{
          render: () => <OutlinedButton />,
        }}
      />
    </Section>
  </UIExplorer>
)

storiesOf('Components', module).add('Button', ButtonScreen)
