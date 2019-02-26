// @flow

import React, { Component } from 'react'

import styled, { css } from 'styled-components/native'
import { ThemeProvider } from '@morpheus-ui/core'
import THEME from '../theme'
import screenSize from './hocs/ScreenSize'

import LeftNav from './LeftNav'

import '@morpheus-ui/fonts'
import './layout.css'

const Container = screenSize(styled.View`
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  background-color: ${props => props.theme.backgroundColor};
  ${props =>
    props.screenWidth <= 900 &&
    css`
      flex-direction: column;
    `};
`)

const ChildrenContainer = styled.ScrollView`
  padding: 20px;
  flex: 1;
`

type Props = {
  children?: any,
}

export default class Layout extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Container>
          <LeftNav />
          <ChildrenContainer>{this.props.children}</ChildrenContainer>
        </Container>
      </ThemeProvider>
    )
  }
}
