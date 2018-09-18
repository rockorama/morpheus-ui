// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import { css } from 'styled-components/native'

import HoverView from './HoverView'

type ContainerProps = {
  disabled?: boolean,
  outlined?: boolean,
  onPress?: Function,
}

type Props = ContainerProps & {
  children: any,
  title: string,
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
  ${props =>
    props.outlined &&
    css`
      background-color: white;
      color: #da1157;
      border: 2px solid #da1157;
    `};
  ${props =>
    props.disabled &&
    css`
      background-color: #ffc1dc;
      cursor: auto;
    `};
`

const hoverStyle = css`
  background-color: black;
  transition: all 0.8s;
`

export default class Button extends Component<Props> {
  render() {
    const { children, title, onPress, disabled, ...other } = this.props

    return (
      <HoverView
        styles={mainStyle}
        hoverStyles={hoverStyle}
        onClick={disabled ? null : onPress}
        {...other}>
        {children ? children : <Text>{title}</Text>}
      </HoverView>
    )
  }
}
