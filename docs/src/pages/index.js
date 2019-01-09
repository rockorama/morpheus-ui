//@flow
import React, { Component } from 'react'

import { Button, Column, Row, Text } from '@morpheus-ui/core'

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../components/Layout'

import SEO from '../components/seo'

const Background = styled.View`
  padding: 50px;
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
            <Text variant="h3">
              Get started using Morpheus-UI in your project now.
            </Text>
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
            <Text>Demo:</Text>
          </Row>
          <Row size={2}>
            <Button title="Large Button" variant={'large'} />
          </Row>
        </Background>
      </Layout>
    )
  }
}
