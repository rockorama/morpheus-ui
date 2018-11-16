// @flow

import React, { Component, type Node } from 'react'
import { Text } from 'react-native'
import { css } from 'styled-components/native'
import { turnIntoField } from '@morpheus-ui/forms'

import HoverView from './HoverView'

type ContainerProps = {
  submit?: boolean,
  disabled?: boolean,
  outlined?: boolean,
  onPress?: () => {},
  submitForm?: () => {},
}

type Props = ContainerProps & {
  children?: Node,
  title?: string,
}

const mainStyle = css`
  cursor: pointer;
  border-radius: 23px;
  padding: 10px;
  background-color: #da1157;
  color: white;
  font-size: 13pt;
  border: 0;
  text-align: center;
  border: 2px solid #da1157;
  transition: all 0.3s;
  ${props =>
    props.outlined &&
    css`
      background-color: transparent;
      color: #da1157;
      border: 2px solid #da1157;
    `};
  ${props =>
    props.disabled &&
    css`
      background-color: #ffc1dc;
      border-color: #ffc1dc;
      cursor: auto;
    `};
`

const hoverStyle = css`
  background-color: #fff;
  color: #da1157;
  transition: all 0.2s;
  ${props =>
    props.outlined &&
    css`
      background-color: #da1157;
      color: #fff;
      border: 2px solid #da1157;
    `};
`

export class Button extends Component<Props> {
  onPress = () => {
    if (this.props.submit) {
      this.props.submitForm && this.props.submitForm()
    }
    this.props.onPress && this.props.onPress()
  }

  render() {
    const { children, title, disabled, ...other } = this.props

    return (
      <HoverView
        styles={mainStyle}
        hoverStyles={disabled ? null : hoverStyle}
        onClick={disabled ? null : this.onPress}
        disabled={disabled}
        {...other}>
        {children ? children : <Text>{title}</Text>}
      </HoverView>
    )
  }
}

export default turnIntoField(Button)
