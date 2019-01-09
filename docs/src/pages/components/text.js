//@flow
import React, { Component } from 'react'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'

const importStatement = "import { Text } from '@morpheus-ui/core'"

const normalTextCode = "<Text>\n  {'Normal text'}\n</Text>"

const boldTextCode = "<Text variant='bold'>\n  {'Bold text'}\n</Text>"

const italicTextCode = "<Text variant='italic'>\n  {'Italic text'}\n</Text>"

const styledTextCode =
  "<Text \n  italic \n  uppercase \n  size={35} \n  color='#da1157'>\n    {'Styled text'}\n</Text>"

const h1Code = "<Text variant='h1'>\n  {'Header 1 (h1)'}\n</Text>"

const h2Code = "<Text variant='h2'>\n  {'Header 2 (h2)'}\n</Text>"

const textExamples = [
  {
    code: normalTextCode,
    toRender: <Text>{'Normal text'}</Text>,
  },
  {
    code: boldTextCode,
    toRender: <Text variant="bold">{'Bold text'}</Text>,
  },
  {
    code: italicTextCode,
    toRender: <Text variant="italic">{'Italic text'}</Text>,
  },
  {
    code: styledTextCode,
    toRender: (
      <Text italic uppercase size={35} color="#da1157">
        {'Styled text'}
      </Text>
    ),
  },
  {
    code: h1Code,
    toRender: <Text variant="h1">{'Header 1 (h1)'}</Text>,
  },
  {
    code: h2Code,
    toRender: <Text variant="h2">{'Header 2 (h2)'}</Text>,
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
          {textExamples.map(text => (
            <Row inner>
              <Column lg={5}>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {text.code}
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
              <Column sm={5}>
                <Container>{text.toRender}</Container>
              </Column>
            </Row>
          ))}
        </Background>
      </Layout>
    )
  }
}
