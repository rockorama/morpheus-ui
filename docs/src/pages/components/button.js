import React, { Component } from 'react'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'

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

const Background = styled.View`
  padding: 50px;
`
const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 30px;
  background-color: ${props => props.theme.codeContainer} !important;
`
const DemoContainer = styled.View`
  background-color: ${props => props.theme.demoContainer} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const BorderRow = styled.View`
  border-bottom: 1px solid ${props => props.theme.blue};
  width: 100%;
`
const TitleContainer = styled.View`
  padding-top: 30px;
`

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'Button'}</Text>
          <Row size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Import statement'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Row inner size={1}>
            <Column>
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
          <Row inner>
            <Column lg={12}>
              <Row size={12} inner>
                <Column size={2}>
                  <Text variant="h3">{'name'}</Text>
                </Column>
                <Column size={2}>
                  <Text variant="h3">{'type'}</Text>
                </Column>
                <Column size={2}>
                  <Text variant="h3">{'required'}</Text>
                </Column>
                <Column size={5}>
                  <Text variant="h3">{'description'}</Text>
                </Column>
              </Row>
              {props.map(prop => {
                return (
                  <BorderRow>
                    <Row size={12} inner>
                      <Column size={2}>
                        <Text>{prop.name}</Text>
                      </Column>
                      <Column size={2}>
                        <Text>{prop.type}</Text>
                      </Column>
                      <Column size={2}>
                        <Text>{prop.required.toString()}</Text>
                      </Column>
                      <Column size={6}>
                        <Text>{prop.description}</Text>
                      </Column>
                    </Row>
                  </BorderRow>
                )
              })}
            </Column>
          </Row>
          <Row size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Theming'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Row inner>
            <Column lg={12}>
              <Row size={12} inner>
                <Column size={3}>
                  <Text variant="h3">{'name'}</Text>
                </Column>
                <Column size={2}>
                  <Text variant="h3">{'default'}</Text>
                </Column>
                <Column size={7}>
                  <Text variant="h3">{'description'}</Text>
                </Column>
              </Row>
              {theming.map(cssValue => {
                return (
                  <BorderRow>
                    <Row size={8} inner>
                      <Column size={2}>
                        <Text>{cssValue.name}</Text>
                      </Column>
                      <Column size={2}>
                        <Text>{cssValue.default}</Text>
                      </Column>
                      <Column size={4}>
                        <Text>{cssValue.description}</Text>
                      </Column>
                    </Row>
                  </BorderRow>
                )
              })}
            </Column>
          </Row>
          <Row inner size={1}>
            <Column>
              <TitleContainer>
                <Text variant="h3">{'Demos + Code Samples'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          {buttons.map(button => (
            <Row size={10} inner>
              <Column sm={10} lg={5}>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {button.code}
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
              <Column sm={10} lg={4}>
                <DemoContainer>{button.toRender}</DemoContainer>
              </Column>
            </Row>
          ))}
        </Background>
      </Layout>
    )
  }
}
