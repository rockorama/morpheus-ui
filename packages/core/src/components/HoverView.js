// @flow

import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'

type ContainerProps = {
  styles?: any,
  hoverStyles?: any,
  hoverText?: any,
  textHoverStyles?: any,
}

type Props = ContainerProps & {
  children: any,
}

const HoverText = styled.Text`
  display: none;
  ${props => props.isHover && props.textHoverStyles};
`

const Container: ReactComponentStyled<ContainerProps> = styled.View`
  cursor: pointer;
  border-radius: 23px;
  background-color: #da1157;
  color: white;
  font-size: 13pt;
  border: 0;
  text-align: center;
  ${props => props.styles};
  ${props => props.isHover && props.hoverStyles};
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
          <HoverText
            isHover={this.state.isHover}
            textHoverStyles={this.props.textHoverStyles}>
            {this.props.hoverText}
          </HoverText>
        </Container>
      </View>
    )
  }
}
