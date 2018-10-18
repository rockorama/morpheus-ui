import React, { Component } from 'react'
import { Text, View } from 'react-native-web'
import styled, { css } from 'styled-components/native'
import plusSymbol from '../../src/images/plus-symbol.svg'
import crossSymbol from '../../src/images/cross.svg'

import HoverView from './HoverView'

const mainStyles = css`
  cursor: pointer;
  padding: 10px 13px;
  border: 1px white solid;
  background-color: transparent;
  background-size: 12px 12px;
  background-position: 7px center;
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
    `};
`

const hoverStyles = css`
  padding: 3px 15px 4px 25px;
`

const textHoverStyles = css`
  display: block;
  color: white;
  height: auto;
  font-size: 12px;
  transition: visibility 1s ease-in-out;
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
        textHoverStyles={textHoverStyles}
        logo={logo ? logo : 'plus'}
      />
    )
  }
}
