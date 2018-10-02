import React, { Component, type Node } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import styled, { css } from 'styled-components/native'

const Dot = styled.View`
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  background-color: #1a2d57;
  opacity: 0.8;
  ${props =>
    !props.on &&
    css`
      left: 26px;
    `};
`
const DotBackground = styled.View`
  width: 45px;
  height: 20px;
  background-color: #1a2d57;
  opacity: 0.3;
  border-radius: 25px;
`

const Container = styled.View`
  cursor: pointer;
`

type State = {
  on: boolean,
}
type Props = {
  default: boolean,
}

export default class Switch extends Component<Props, State> {
  state = {
    on: this.props.default,
  }
  render() {
    return (
      <Container
        onClick={() => {
          this.setState({ on: !this.state.on })
        }}>
        <DotBackground />
        <Dot on={this.state.on} />
      </Container>
    )
  }
}
