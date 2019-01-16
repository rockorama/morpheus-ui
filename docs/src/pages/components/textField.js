//@flow
import React, { Component } from 'react'
import { Button, Row, Column, TextField, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import { Form } from '@morpheus-ui/forms'

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'
import Table from '../../components/Table'

const importStatement = "import { TextField } from '@morpheus-ui/core'"

const Background = styled.View`
  padding: 50px;
`
const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.codeContainer} !important;
`
const TitleContainer = styled.View`
  padding-top: 30px;
`
const DemoContainer = styled.View`
  background-color: ${props => props.theme.demoContainer} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px;
`
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

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'TextField'}</Text>
          <Row inner>
            <TitleContainer>
              <Text variant="h3">{'Import statement'}</Text>
            </TitleContainer>
          </Row>
          <Row inner>
            <Column lg={12}>
              <CodeContainer>
                <SyntaxHighlighter language="javascript" highlighter={'prism'}>
                  {importStatement}
                </SyntaxHighlighter>
              </CodeContainer>
            </Column>
          </Row>
          <Row size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Props'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Table data={props} props />
          <Row size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Theming'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Table data={theming} theming />
          <Row size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Demos + Code Samples'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField name="name" label="Name" required />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="name"\n  label="Name"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField
                    type="email"
                    placeholder="put the vault name here"
                    name="email"
                    label="Email"
                    required
                  />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="email"\n  type="email"\n  placeholder="put the vault name here"\n  label="Email"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField
                    name="password"
                    type="password"
                    label="Password"
                    required
                  />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="password"\n  type="password"\n  label="password"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    required
                    numberOfLines={6}
                  />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="message"\n  label="Message"\n  multiline\n  required\n  numberOfLines={6}\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField
                    name="disabled"
                    label="disabled"
                    required
                    disabled
                    defaultValue="This field can't be edited"
                  />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="disabled"\n  label="disabled"\n  required\n  disabled\n  defaultValue="This field can\'t be edited"\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={data => console.log(data)}>
            <Row size={2} inner>
              <Column>
                <DemoContainer>
                  <TextField
                    name="outlined"
                    label="Outlined"
                    required
                    variant="outlined"
                  />
                </DemoContainer>
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="outlined"\n  label="Outlined"\n  required\n  variant="outlined"\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
        </Background>
      </Layout>
    )
  }
}
