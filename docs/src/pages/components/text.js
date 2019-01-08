//@flow
import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'

const importStatement = "import { Text } from '@morpheus-ui/core'"

const normalTextCode =
  "import { Text } from '@morpheus-ui/core'\n\n<Text>\n  {'Hello World'}\n</Text>"

const boldTextCode =
  "import { Text } from '@morpheus-ui/core'\n\n<Text variant='bold'>\n  {'Hello World'}\n</Text>"

const italicTextCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Small Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'small'}\n/>"

const styledTextCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Large Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'large'}\n/>"

const h1Code =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Disabled Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'disabled'}\n/>"

const h2Code =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Icon Top' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'icon-top'}\n/>"

const textExamples = [
  {
    code: normalTextCode,
    title: 'Normal text',
    toRender: <Text>{'Hello World'}</Text>,
  },
  {
    code: boldTextCode,
    title: 'Bold text',
    toRender: <Text variant="bold">{'Hello World'}</Text>,
  },
  {
    code: italicTextCode,
    title: 'Italic text',
    toRender: <Text variant="italic">{'Hello World'}</Text>,
  },
  {
    code: styledTextCode,
    title: 'Styled text',
    toRender: (
      <Text italic uppercase size={40} color="red">
        {'hello world'}
      </Text>
    ),
  },
  {
    code: h1Code,
    title: 'h1',
    toRender: <Text variant="h1">{'Hello World'}</Text>,
  },
  {
    code: h2Code,
    title: 'h2',
    toRender: <Text variant="h2">{'Hello World'}</Text>,
  },
]

const Background = styled.View`
  padding: 50px;
`
const Container = styled.View`
  padding: 0 0 30px 0;
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 30px;
  background-color: ${props => props.theme.codeContainer} !important;
`

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'Text'}</Text>
          <Row inner>
            <Text variant="h3">{'Import statement'}</Text>
          </Row>
          <Row inner>
            <Column lg={10}>
              <CodeContainer>
                <SyntaxHighlighter
                  customStyle={{ backgroundColor: '#fff' }}
                  language="javascript"
                  highlighter={'prism'}>
                  {importStatement}
                </SyntaxHighlighter>
              </CodeContainer>
            </Column>
          </Row>
          {textExamples.map(button => (
            <Row inner>
              <Column sm={3}>
                <Container>
                  <Text variant="h3">{button.title}</Text>
                </Container>
                {button.toRender}
              </Column>
              <Column lg={7}>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {button.code}
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          ))}
        </Background>
      </Layout>
    )
  }
}
