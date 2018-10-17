// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'

type ContainerProps = {
  styles?: any,
  hoverStyles?: any,
  hoverText?: String,
}

type Props = ContainerProps & {
  children: any,
}

const HoverText = styled.Text`
  opacity: 0;
  ${props =>
    props.isHover &&
    css`
      color: white;
      position: absolute;
      top: 1px;
      right: 7px;
      opacity: 1;
      transition: opacity 1s ease-in-out;
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
  ${props => props.isHover && css``};
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
        <Container {...this.props} isHover={this.state.isHover}>
          <HoverText isHover={this.state.isHover}>
            {this.props.hoverText}
          </HoverText>
        </Container>
      </View>
    )
  }
}
