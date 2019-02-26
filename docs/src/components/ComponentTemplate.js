//@flow
import React, { Component } from 'react'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from './Layout'
import Table from './Table'

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
const InlineCodeContainer = styled.View`
  padding: 0px;
  margin-top: -23px;
  background-color: ${props => props.theme.codeContainer} !important;
`
const DemoContainer = styled.View`
  background-color: ${props => props.theme.demoContainer} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100px;
`
const TitleContainer = styled.View`
  padding-top: 30px;
  width: 100%;
`
const TitleFlexContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`

export default class ComponentTemplate extends Component {
  render() {
    const {
      theming,
      props,
      title,
      importStatement,
      examples,
      extraThemingText,
    } = this.props
    return (
      <Layout>
        <Background>
          <Text variant="h2">{title}</Text>
          <Row inner size={12}>
            <TitleContainer>
              <Text variant="h3">{'Import statement'}</Text>
            </TitleContainer>
          </Row>
          <Row size={12}>
            <Column size={12}>
              <CodeContainer>
                <SyntaxHighlighter language="javascript" highlighter={'prism'}>
                  {importStatement}
                </SyntaxHighlighter>
              </CodeContainer>
            </Column>
          </Row>
          <Row size={12}>
            <Column size={12}>
              <TitleContainer>
                <Text variant="h3">{'Props'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          <Table data={props} props />
          <Row size={12}>
            <Column size={12}>
              <TitleContainer>
                <Text variant="h3">{'Theming'}</Text>
              </TitleContainer>
              {extraThemingText && <Text>{extraThemingText}</Text>}
            </Column>
          </Row>
          <Table data={theming} theming />
          <Row size={12}>
            <Column size={12}>
              <TitleContainer>
                <Text variant="h3">{'Demos + Code Samples'}</Text>
              </TitleContainer>
            </Column>
          </Row>
          {examples.map(example => (
            <Row inner size={12}>
              <Column lg={5} md={12} sm={12}>
                <CodeContainer>
                  <SyntaxHighlighter
                    language="javascript"
                    highlighter={'prism'}>
                    {example.code}
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
              <Column lg={5} md={12} sm={12}>
                <DemoContainer>
                  <Container>{example.toRender}</Container>
                </DemoContainer>
              </Column>
            </Row>
          ))}
        </Background>
      </Layout>
    )
  }
}
