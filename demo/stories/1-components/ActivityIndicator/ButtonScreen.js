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
import DisabledButton from './examples/DisabledButton'

const ButtonScreen = () => (
  <UIExplorer title="Button" url="1-components/Button">
    <Description>Displays a customizable button</Description>
    <Section title="Props">
      <DocItem name="...View props" />

      <DocItem
        name="disabled"
        typeInfo="?boolean = false"
        description="Don't allow button press."
        example={{
          render: () => <DisabledButton />,
        }}
      />
    </Section>
  </UIExplorer>
)

storiesOf('Components', module).add('Button', ButtonScreen)
