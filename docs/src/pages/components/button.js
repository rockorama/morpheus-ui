import React, { Component } from 'react'
import { Button } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import ComponentTemplate from '../../components/ComponentTemplate'

export default class ButtonPage extends Component {
  render() {
    return (
      <ComponentTemplate
        title="Button"
        theming={theming}
        props={props}
        importStatement={importStatement}
        examples={buttons}
      />
    )
  }
}

const importStatement = "import { Button } from '@morpheus-ui/core'"

const normalButtonCode =
  "import { Button } from '@morpheus-ui/core'\n\n<Button \n onPress={console.log('clicked')} \n title='Normal button'\n/>"

const iconButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'\n\n<Button \n onPress={console.log('clicked')} \n title='Icon Button' \n Icon={CircleArrowRight} \n/>"

const smallButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='Small Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'small'}\n/>"

const largeButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='Large Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'large'}\n/>"

const disabledButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='Disabled Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'disabled'}\n/>"

const iconTopButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='Icon Top' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'icon-top'}\n/>"

const noBorderButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='No Border' \n Icon={CircleArrowRight} \n variant={'no-border'}\n/>"

const hoverShadowButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={console.log('clicked')} \n title='Hover Shadow' \n Icon={CircleArrowRight}\n variant={['no-border', 'hover-shadow']}\n/>"

const buttons = [
  {
    code: normalButtonCode,
    toRender: <Button onPress={console.log('clicked')} title="Normal Button" />,
  },
  {
    code: iconButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Icon Button"
        Icon={CircleArrowRight}
      />
    ),
  },
  {
    code: smallButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Small Button"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="small"
      />
    ),
  },
  {
    code: largeButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Large Button"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="large"
      />
    ),
  },
  {
    code: disabledButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Disabled"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        disabled
      />
    ),
  },
  {
    code: iconTopButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Icon Top"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="icon-top"
      />
    ),
  },
  {
    code: noBorderButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="No Border"
        Icon={CircleArrowRight}
        variant="no-border"
      />
    ),
  },
  {
    code: hoverShadowButtonCode,
    toRender: (
      <Button
        onPress={console.log('clicked')}
        title="Hover Shadow"
        Icon={CircleArrowRight}
        variant={['no-border', 'hover-shadow']}
      />
    ),
  },
]

const props = [
  {
    name: 'title',
    type: '?string',
    required: false,
    description: 'Button title',
  },
  {
    name: 'Icon',
    type: '?any',
    required: false,
    description: 'Pass any icon imported from @morpheus-ui/icons',
  },
  {
    name: 'HoverIcon',
    type: '?any',
    required: false,
    description:
      'Pass any icon to show on hover, imported from @morpheus-ui/icons',
  },
  {
    name: 'submit',
    type: '?boolean',
    required: false,
    description:
      'Whether or not the button should act as a submit button for a form.',
  },
  {
    name: 'variant',
    type: '?string | ?Array<string>',
    required: false,
    description:
      'Style variant, options are large, small, icon-top, no-border, hover-shadow',
  },
  {
    name: 'theme',
    type: 'Object',
    required: true,
    description: 'Pass a theme file for global styling, for examples visit...',
  },
  {
    name: 'disabled',
    type: '?boolean',
    required: false,
    description: 'Whether the button should be clickable or not',
  },
  {
    name: 'onPress',
    type: '?() => void',
    required: false,
    description: 'Action to occur when the button is pressed',
  },
]

const theming = [
  {
    name: 'iconPosition',
    description:
      'Icon alignment within the button, "right", "left" are options.',
    default: '"right"',
  },
  {
    name: 'iconWidth',
    description: 'Width of the icon',
    default: '24',
  },
  {
    name: 'iconHeight',
    description: 'Height of the icon',
    default: '24',
  },
  {
    name: 'iconMargin',
    description: 'Margin around the icon',
    default: '15',
  },
  {
    name: 'iconColor',
    description: 'Color of the icon',
    default: '"#979797"',
  },
  {
    name: 'iconHoverColor',
    description: 'Color of the icon on hover',
    default: '"#DA1157"',
  },
  {
    name: 'iconDisabledColor',
    description: 'Color of the icon when the button is disabled',
    default: '"#D3D3D3"',
  },
  {
    name: 'titleColor',
    description: 'Color of the title',
    default: '"#979797"',
  },
  {
    name: 'titleHoverColor',
    description: 'Color of the title on hover',
    default: '"#DA1157"',
  },
  {
    name: 'titleDisabledColor',
    description: 'Color of the title when the button is disabled',
    default: '"#D3D3D3"',
  },
  {
    name: 'borderRadius',
    description: 'Border radius value',
    default: '5',
  },
  {
    name: 'borderWidth',
    description: 'Border width value',
    default: '1',
  },
  {
    name: 'borderColor',
    description: 'Border color value',
    default: '"#979797"',
  },
  {
    name: 'borderHoverColor',
    description: 'Color of the border on hover',
    default: '"#DA1157"',
  },
  {
    name: 'borderDisabledColor',
    description: 'Color of the border when the button is disabled',
    default: '"#D3D3D3"',
  },
  {
    name: 'backgroundColor',
    description: 'Button background color',
    default: '"transparent"',
  },
  {
    name: 'backgroundHoverColor',
    description: 'Background color on hover',
    default: '"transparent"',
  },
  {
    name: 'backgroundDisabledColor',
    description: 'Background color when the button is disabled',
    default: '"transparent"',
  },
  {
    name: 'shadow',
    description: 'Button shadow',
    default: 'false',
  },
  {
    name: 'hoverShadow',
    description: 'Button shadow on hover',
    default: 'false',
  },
  {
    name: 'padding',
    description: 'Padding value',
    default: '10',
  },
  {
    name: 'fontSize',
    description: 'Font size',
    default: '13',
  },
  {
    name: 'fontFamily',
    description: 'Font family',
    default: '"Muli"',
  },
  {
    name: 'fontWeight',
    description: 'Font weight',
    default: '"bold"',
  },
]
