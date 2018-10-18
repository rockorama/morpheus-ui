import React, { Component } from 'react'
import { Text, View } from 'react-native-web'
import styled, { css } from 'styled-components/native'
import plusSymbol from '../../src/images/plus-symbol.svg'
import crossSymbol from '../../src/images/cross.svg'

import HoverView from './HoverView'

const mainStyles = css`
  cursor: pointer;
  padding: 0;
  height: 20px;
  width: 27px;
  border-radius: 25px;
  border: 1px white solid;
  background-color: transparent;
  background-size: 13px 13px;
  background-position: 6px center;
  background-repeat: no-repeat;
  ${props =>
    props.logo === 'plus' &&
    css`
      background-image: url(${plusSymbol});
    `};
  ${props =>
    props.logo === 'cross' &&
    css`
      background-image: url(${crossSymbol});
      background-size: 12px 12px;
    `};
`

const hoverStyles = css`
  padding: 0 35px;
  transition: padding 0.5s;
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
