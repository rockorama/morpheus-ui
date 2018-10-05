// @flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-web'

type State = {
  on: boolean,
}

type Props = {
  defaultState?: boolean,
  disabled?: boolean,
  dark?: boolean,
  control?: () => boolean | boolean,
  onPress?: (value: boolean) => void,
}

const Dot = styled.View`
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
  ${props =>
    props.on === false &&
    css`
      left: 0px;
      transition: all 0.3s;
    `};
  ${props =>
    props.on === true &&
    css`
      left: 20px;
      transition: all 0.3s;
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
  justify-content: center;
  display: flex;
  cursor: pointer;
  border-radius: 25px;
  ${props =>
    props.disabled &&
    css`
      cursor: auto;
    `};
`

export default class Switch extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      on: this.props.defaultState ? this.props.defaultState : false,
    }
  }

  onPressed = () => {
    if (!this.props.disabled && this.props.control === undefined) {
      const currentState = !this.state.on
      this.setState({ on: currentState })
      this.props.onPress && this.props.onPress(currentState)
    }
  }

  handleOn() {
    if (this.props.control == null) {
      return this.state.on
    } else if (typeof this.props.control === 'function') {
      return this.props.control()
    } else {
      return this.props.control
    }
  }

  render() {
    const { disabled, dark } = this.props
    return (
      <TouchableOpacity onPress={this.onPressed}>
        <Container disabled={disabled}>
          <DotBackground dark={dark} />
          <Dot on={this.handleOn()} dark={dark} disabled={disabled} />
        </Container>
      </TouchableOpacity>
    )
  }
}
