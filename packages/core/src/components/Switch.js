// @flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'

type State = {
  on: boolean,
}

type Props = {
  defaultState?: boolean,
  disabled?: boolean,
  dark?: boolean,
  onPress?: Function,
}

const Dot = styled.View`
  background-color: white;
  height: 20px;
  width: 20px;
  left: 20px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
  ${props =>
    !props.on &&
    css`
      left: 0px;
    `};
  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
    `};
  ${props =>
    props.dark &&
    css`
      background-color: #1a2d57;
    `};
`
const DotBackground = styled.View`
  width: 40px;
  height: 18px;
  background-color: #fff;
  opacity: 0.2;
  border-radius: 25px;
  ${props =>
    props.dark &&
    css`
      background-color: #1a2d57;
      opacity: 0.6;
    `};
`

const Container = styled.View`
  display: flex;
  cursor: pointer;
  justify-content: center;
  ${props =>
    props.disabled &&
    css`
      cursor: auto;
    `};
`

export default class Switch extends Component<Props, State> {
  state = {
    on: this.props.defaultState ? this.props.defaultState : false,
  }

  onClicked(onPress: Function, on: boolean) {
    if (!this.props.disabled) {
      onPress()
      this.setState({ on: !on })
    }
  }

  render() {
    const { disabled, dark, onPress } = this.props
    return (
      <Container
        onClick={() =>
          onPress
            ? this.onClicked(onPress, this.state.on)
            : this.setState({ on: !this.state.on })
        }
        disabled={disabled}>
        <DotBackground dark={dark} />
        <Dot on={this.state.on} dark={dark} disabled={disabled} />
      </Container>
    )
  }
}
