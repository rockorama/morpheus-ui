import React, { Component } from 'react'
import { Text, View } from 'react-native-web'
import styled, { css } from 'styled-components/native'

import HoverView from './HoverView'

const mainStyles = css`
  cursor: pointer;
  height: 18px;
  width: 24px;
  border-radius: 25px;
  border: 1px white solid;
  display: flex;
  background-color: transparent;
`

const hoverStyles = css`
  width: 70px;
  transition: width 0.5s;
`

type Props = {
  hover?: String,
  logo?: String,
  onPress?: Function,
}

export default class GrowButton extends Component<Props, State> {
  render() {
    const { hover, onPress, logo } = this.props
    return (
      <HoverView
        styles={mainStyles}
        hoverStyles={hover ? hoverStyles : null}
        onClick={onPress}
        hoverText={hover}
        hoverLogo={logo ? logo : 'plus'}
      />
    )
  }
}
