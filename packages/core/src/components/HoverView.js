// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'

import plusSymbol from '../../src/images/plus-symbol.svg'

type ContainerProps = {
  styles?: any,
  hoverStyles?: any,
  hoverText?: String,
  hoverLogo?: String,
}

type Props = ContainerProps & {
  children: any,
}

const Logo = styled.View`
  opacity: 0;
  background-size: 15px 15px;
  background-position: center left;
  background-repeat: no-repeat;
  ${props =>
    props.logo === 'plus' &&
    props.isHover &&
    css`
      opacity: 1;
      background-image: url(${plusSymbol});
      transition: all 0.5s;
    `};
`

const HoverText = styled.Text`
  opacity: 0;
  ${props =>
    props.isHover &&
    css`
      color: white;
      position: absolute;
      top: 0;
      left: 20px;
      opacity: 1;
      transition: opacity 1s;
    `};
`

const Container: ReactComponentStyled<ContainerProps> = styled.View`
  cursor: pointer;
  border-radius: 23px;
  padding: 10px;
  background-color: #da1157;
  color: white;
  font-size: 13pt;
  border: 0;
  text-align: center;
  ${props => props.styles};
  ${props => props.isHover && props.hoverStyles};
  ${props =>
    props.isHover &&
    props.logo === 'plus' &&
    css`
      background-size: 15px 15px;
      background-position: center left;
      background-repeat: no-repeat;
      background-image: url(${plusSymbol});
    `};
`

type State = {
  isHover: boolean,
}

export default class HoverView extends Component<Props, State> {
  state = {
    isHover: false,
  }

  onMouseOver = () => {
    this.setState({
      isHover: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      isHover: false,
    })
  }

  render() {
    return (
      <View onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        <Container
          {...this.props}
          isHover={this.state.isHover}
          logo={this.props.hoverLogo}>
          <HoverText isHover={this.state.isHover}>
            {this.props.hoverText}
          </HoverText>
        </Container>
      </View>
    )
  }
}
