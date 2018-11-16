// @flow
import React, { Component } from 'react'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'
import { View } from 'react-native'
import plusSymbol from '../../src/components/images/plus-symbol.svg'
import crossSymbol from '../../src/components/images/cross.svg'

type Props = {
  hover?: string,
  icon?: string,
  onPress?: Function,
}

type State = {
  isHover: boolean,
}

type ContainerProps = {
  icon?: string,
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
    props.icon === 'plus' &&
    css`
      background-image: url(${plusSymbol});
    `};
  ${props =>
    props.icon === 'cross' &&
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
    const { hover, onPress, icon } = this.props
    return (
      <View onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        <Container
          onClick={onPress}
          isHover={this.state.isHover}
          icon={icon ? icon : 'plus'}>
          <HoverText isHover={this.state.isHover}>
            {hover ? hover : 'Install'}
          </HoverText>
        </Container>
      </View>
    )
  }
}
