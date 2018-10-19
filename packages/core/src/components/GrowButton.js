// @flow
import React, { Component } from 'react'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'
import { View } from 'react-native'
import plusSymbol from '../../src/components/images/plus-symbol.svg'
import crossSymbol from '../../src/components/images/cross.svg'

type ContainerProps = {
  logo?: String,
  isHover: boolean,
}

const Container: ReactComponentStyled<ContainerProps> = styled.View`
  cursor: pointer;
  border-radius: 23px;
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
  ${props =>
    props.isHover &&
    css`
      padding: 3px 15px 4px 25px;
    `};
`

const HoverText = styled.Text`
  display: none;
  ${props =>
    props.isHover &&
    css`
      display: block;
      color: white;
      font-size: 12px;
    `};
`

type Props = {
  hover?: String,
  logo?: String,
  onPress?: Function,
}

type State = {
  isHover: boolean,
}

export default class GrowButton extends Component<Props, State> {
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
    const { hover, onPress, logo } = this.props
    return (
      <View onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        <Container
          onClick={onPress}
          isHover={this.state.isHover}
          logo={logo ? logo : 'plus'}>
          <HoverText isHover={this.state.isHover}>
            {hover ? hover : 'Install'}
          </HoverText>
        </Container>
      </View>
    )
  }
}
