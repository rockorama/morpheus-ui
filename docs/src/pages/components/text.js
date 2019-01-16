//@flow
import React, { Component } from 'react'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'
import Table from '../../components/Table'

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
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 0px;
  background-color: ${props => props.theme.codeContainer} !important;
`
const DemoContainer = styled.View`
  background-color: ${props => props.theme.demoContainer} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const TitleContainer = styled.View`
  padding-top: 30px;
`

const props = [
  {
    name: 'variant',
    type: 'string | Array<string>',
    required: false,
    description:
      'Possible variations of Text component. Options are: "bold", "italic", "h1", or "h2"',
  },
  {
    name: 'children',
    type: 'any',
    required: true,
    description: 'Text to be displayed',
  },
  {
    name: 'bold',
    type: 'boolean',
    required: false,
    description: 'Renders bold text',
  },
  {
    name: 'italic',
    type: 'boolean',
    required: false,
    description: 'Renders italic text',
  },
  {
    name: 'size',
    type: 'number',
    required: false,
    description: 'Size of the text',
  },
  {
    name: 'color',
    type: 'string',
    required: false,
    description: 'Text color',
  },
  {
    name: 'uppercase',
    type: 'boolean',
    required: false,
    description: 'Renders the text as uppercase',
  },
  {
    name: 'styles',
    type: 'string',
    required: false,
    description: 'Additional styles',
  },
]

const theming = [
  {
    name: 'fontFamily',
    description: 'Font family',
    default: '"Muli"',
  },
  {
    name: 'fontSize',
    description: 'Font size',
    default: '14',
  },
  {
    name: 'fontWeight',
    description: 'Font weight',
  },
  {
    name: 'fontStyle',
    description: 'Font style',
  },
  {
    name: 'fontVariant',
    description: 'Font variant',
  },
  {
    name: 'color',
    description: 'Color of text',
    default: '"#1F3464"',
  },
  {
    name: 'direction',
    description: 'Direction',
  },
  {
    name: 'letterSpacing',
    description: 'Letter spacing',
  },
  {
    name: 'lineHeight',
    description: 'Line height',
  },
  {
    name: 'textAlign',
    description: 'Text align',
  },
  {
    name: 'textDecoration',
    description: 'Text decoration',
  },
  {
    name: 'textIndent',
    description: 'Text indent',
  },
  {
    name: 'textShadow',
    description: 'Text shadow',
  },
  {
    name: 'textTransform',
    description: 'Text transform',
  },
  {
    name: 'textOverflow',
    description: 'Text overflow',
  },
  {
    name: 'unicodeBidi',
    description: 'Unicode bidirectional text handling',
  },
  {
    name: 'verticalAlign',
    description: 'Vertical alignment property',
  },
  {
    name: 'whiteSpace',
    description: 'White space',
  },
  {
    name: 'wordSpacing',
    description: 'Word spacing',
  },
]

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'Text'}</Text>
          <Row inner>
            <TitleContainer>
              <Text variant="h3">{'Import statement'}</Text>
            </TitleContainer>
          </Row>
          <Row inner>
            <Column lg={10}>
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
              <TitleContainer>
                <Text>
                  {
                    'All css that applies to an ordinary RNW <Text> component will apply to the Morpheus-UI <Text> Component.'
                  }
                </Text>
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
          {textExamples.map(text => (
            <Row inner>
              <Column lg={5}>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {text.code}
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
              <Column sm={5}>
                <DemoContainer>
                  <Container>{text.toRender}</Container>
                </DemoContainer>
              </Column>
            </Row>
          ))}
        </Background>
      </Layout>
    )
  }
}
