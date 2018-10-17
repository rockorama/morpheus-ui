import React, { Component } from 'react'
import { Text, View } from 'react-native-web'
import styled, { css } from 'styled-components/native'
import plusSymbol from '../../src/images/plus-symbol.svg'

import HoverView from './HoverView'

const mainStyles = css`
  cursor: pointer;
  height: 18px;
  width: 23px;
  border-radius: 25px;
  border: 1px white solid;
  display: flex;
  background-color: transparent;
  background-size: 15px 15px;
  background-position: 3px center;
  background-repeat: no-repeat;
  background-image: url(${plusSymbol});
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
        hoverStyles={hoverStyles}
        onClick={onPress}
        hoverText={hover ? hover : 'Install'}
        logo={logo ? logo : 'plus'}
      />
    )
  }
}
