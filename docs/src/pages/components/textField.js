//@flow
import React, { Component } from 'react'
import { Button, Row, Column, TextField, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import { Form } from '@morpheus-ui/forms'
import ComponentTemplate from '../../components/ComponentTemplate'

export default class NormalButtonExample extends Component {
  render() {
    return (
      <ComponentTemplate
        title="TextField"
        theming={theming}
        props={props}
        importStatement={importStatement}
        examples={textfields}
      />
    )
  }
}

const importStatement = "import { TextField } from '@morpheus-ui/core'"
const nameCode = '<TextField\n  name="name"\n  label="Name"\n  required\n/>'
const emailCode =
  '<TextField\n  name="email"\n  type="email"\n  label="Email"\n  required\n/>'
const passwordCode =
  '<TextField\n  name="password"\n  type="password"\n  label="Password"\n  required\n/>'
const messageCode =
  '<TextField\n  name="message"\n  label="Message"\n  multiline\n  numberOfLines={6}\n/>'
const disabledCode =
  '<TextField\n  name="disabled"\n  label="This field can\'t be edited"\n  disabled\n />'
const outlinedCode =
  '<TextField\n  name="outlined"\n  label="Outlined"\n  variant="outlined"\n  required\n />'

function printData(data) {
  console.log(data)
}

const textfields = [
  {
    code: importStatement + '\n\n' + nameCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField name="name" label="Name" required />
      </Form>
    ),
  },
  {
    code: importStatement + '\n\n' + emailCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField
          type="email"
          placeholder="put the vault name here"
          name="email"
          label="Email"
          required
        />
      </Form>
    ),
  },
  {
    code: importStatement + '\n\n' + passwordCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField name="password" type="password" label="Password" required />
      </Form>
    ),
  },
  {
    code: importStatement + '\n\n' + messageCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField name="message" label="Message" multiline numberOfLines={6} />
      </Form>
    ),
  },
  {
    code: importStatement + '\n\n' + disabledCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField
          name="disabled"
          label="This field can't be edited"
          disabled
        />
      </Form>
    ),
  },
  {
    code: importStatement + '\n\n' + outlinedCode,
    toRender: (
      <Form onSubmit={printData}>
        <TextField
          name="outlined"
          label="Outlined"
          required
          variant="outlined"
        />
      </Form>
    ),
  },
]

const props = [
  {
    name: 'placeholder',
    type: '?string',
    required: false,
    description: 'Button title',
  },
  {
    name: 'value',
    type: '?any',
    required: false,
    description: 'Pass any icon imported from @morpheus-ui/icons',
  },
  {
    name: 'defaultValue',
    type: '?any',
    required: false,
    description:
      'Pass any icon to show on hover, imported from @morpheus-ui/icons',
  },
  {
    name: 'mulitline',
    type: '?boolean',
    required: true,
    description:
      'Whether or not the button should act as a submit button for a form.',
  },
  {
    name: 'disabled',
    type: '?string | ?Array<string>',
    required: true,
    description:
      'Style variant, options are large, small, icon-top, no-border, hover-shadow',
  },
  {
    name: 'variant',
    type: 'Object',
    required: false,
    description: 'Pass a theme file for global styling, for examples visit...',
  },
]

const theming = [
  {
    name: 'backgroundColor',
    description: 'The background color',
    default: '"#F9F9F9"',
  },
  {
    name: 'backgroundActiveColor',
    description: 'Background color when focus is on the TextField',
    default: '"#FFFFFF"',
  },
  {
    name: 'backgroundDisabledColor',
    description: 'The background color when a TextField is disabled',
    default: '"#E9E9E9"',
  },
  {
    name: 'borderColor',
    description: 'The border color',
    default: '"transparent"',
  },
  {
    name: 'borderActiveColor',
    description: 'The border color when focus is on the TextField',
    default: '"transparent"',
  },
  {
    name: 'labelColor',
    description: 'Color of the text label',
    default: '"#A9A9A9"',
  },
  {
    name: 'labelActiveColor',
    description: 'Color of the text label when focus is on the TextField',
    default: '"#585858"',
  },
  {
    name: 'labelDisabledColor',
    description: 'Color of the text label when the TextField is disabled',
    default: '"#D3D3D3"',
  },
  {
    name: 'errorColor',
    description:
      'The color of the error message and border when an error occurs',
    default: '"#E51111"',
  },
  {
    name: 'textColor',
    description: 'Color of the main textTransform',
    default: '"#232323"',
  },
  {
    name: 'textActiveColor',
    description: 'Color of the text when focus is on the TextField',
    default: '"#1F3464"',
  },
  {
    name: 'borderRadius',
    description: 'Border radius',
    default: '5',
  },
  {
    name: 'borderWidth',
    description: 'Border width',
    default: '1',
  },
  {
    name: 'borderHoverColor',
    description: 'Border color on hover',
    default: '"#DA1157"',
  },
  {
    name: 'borderDisabledColor',
    description: 'Border color when the TextField is disabled',
    default: '"transparent"',
  },
  {
    name: 'shadow',
    description: 'Whether there is a shadow on the TextField or not',
    default: 'false',
  },
  {
    name: 'activeShadow',
    description: 'Whether a shadow appears when focused on TextField or not',
    default: 'true',
  },
  {
    name: 'padding',
    description: 'Padding',
    default: '15',
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
