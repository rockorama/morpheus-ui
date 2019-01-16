//@flow
import React, { Component } from 'react'

import { Button, Column, Row, Text } from '@morpheus-ui/core'

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../components/Layout'

import SEO from '../components/seo'

const Background = styled.View`
  padding: 40px;
`

const Padding = styled.View`
  padding: 20px 0;
`
const DemoTextContainer = styled.View`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const DemoContainer = styled.View`
  background-color: ${props => props.theme.demoContainer} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px;
  margin-top: 20px;
`

export default class IndexPage extends Component<{}> {
  render() {
    const importStatement =
      "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport Button from '@material-ui/core/Button'\n\nfunction App() {\n  return (\n    <Button title='Large Button' variant='large' >\n        Hello World\n    </Button>\n  );\n}\n\nReactDOM.render(<App />, document.querySelector('#app'));\n"

    return (
      <Layout>
        <Background>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <Row size={1}>
            <Text variant="h1">Usage</Text>
          </Row>
          <Row size={1}>
            <Padding>
              <Text variant="h3">
                Get started using Morpheus-UI in your project now.
              </Text>
            </Padding>
          </Row>
          <Row size={1}>
            <Text variant="h2">Quick Start</Text>
          </Row>
          <Row size={1}>
            <SyntaxHighlighter
              language="javascript"
              highlighter={'prism' || 'hljs'}>
              {importStatement}
            </SyntaxHighlighter>
          </Row>
          <Row size={2}>
            <DemoTextContainer>
              <Text variant="h3">Demo:</Text>
              <DemoContainer>
                <Button title="Large Button" variant={'large'} />
              </DemoContainer>
            </DemoTextContainer>
          </Row>
        </Background>
      </Layout>
    )
  }
}
