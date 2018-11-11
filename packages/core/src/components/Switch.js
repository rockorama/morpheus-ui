// @flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'
import { TouchableWithoutFeedback, View } from 'react-native'

import { turnIntoField } from './formact'

type State = {
  on: boolean,
}

type Props = {
  defaultValue?: boolean,
  disabled?: boolean,
  dark?: boolean,
  control?: () => boolean | boolean,
  onChange?: (value: boolean) => void,
}

const Dot = styled.View`
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
  transition: left 0.3s;
  left: 0px;
  top: -1px;
  ${props =>
    props.on &&
    css`
      left: 20px;
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
  transition: all 0.3s;
  ${props =>
    props.on &&
    css`
      opacity: 0.6;
    `};
  ${props =>
    props.dark &&
    css`
      background-color: #1a2d57;
      opacity: 0.6;
    `};
  ${props =>
    props.dark &&
    props.on &&
    css`
      opacity: 0.85;
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

class Switch extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const initialValue =
      props.fieldValue == null ? props.defaultValue || false : props.fieldValue
    this.state = {
      on: initialValue,
    }
  }

  onPressed = () => {
    if (!this.props.disabled && this.props.control === undefined) {
      const currentState = !this.state.on
      this.setState({ on: currentState })
      this.props.onChange(currentState)
      if (!this.props.dirty) {
        this.props.setDirty()
      }
    }
  }

  handleOn() {
    if (this.props.control == null) {
      return this.props.fieldValue == null
        ? this.state.on
        : this.props.fieldValue
    } else if (typeof this.props.control === 'function') {
      return this.props.control()
    } else {
      return this.props.control
    }
  }

  render() {
    console.log(this.props)
    const { disabled, dark } = this.props
    const on = this.handleOn()
    const switchElement = (
      <Container disabled={disabled}>
        <DotBackground on={on} dark={dark} />
        <Dot on={on} dark={dark} disabled={disabled} />
      </Container>
    )

    if (disabled) {
      return <View>{switchElement}</View>
    }

    return (
      <TouchableWithoutFeedback onPress={this.onPressed}>
        {switchElement}
      </TouchableWithoutFeedback>
    )
  }
}

export default turnIntoField(Switch)
