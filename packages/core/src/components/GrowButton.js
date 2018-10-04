import React, { Component } from 'react'
import { Text } from 'react-native-web'
import styled, { css } from 'styled-components/native'

import plusSymbol from '../../src/images/plus-symbol.svg'
import HoverView from './HoverView'

const Logo = styled.View`
  background-image: url(${plusSymbol});
  background-size: contain;
  background-position: 10px 10px;
  height: 10px;
  width: 10px;
`

const mainStyles = css`
  cursor: pointer;
  height: 18px;
  width: 24px;
  border-radius: 25px;
  border: 1px white solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

const hoverStyles = css`
  width: 70px;
  transition: all 0.5s;
  align-items: flex-start;
`

type Props = {
  hover?: String,
  onPress?: Function,
}

export default class GrowButton extends Component<Props, State> {
  render() {
    const { hover, onPress } = this.props
    return (
      <HoverView
        styles={mainStyles}
        hoverStyles={hover ? hoverStyles : null}
        onClick={onPress}
        showText={hover}>
        <Logo />
      </HoverView>
    )
  }
}
