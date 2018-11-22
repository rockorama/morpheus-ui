// @flow
import React, { Component } from 'react'
import styled, {
  css,
  type ReactComponentStyled,
} from 'styled-components/native'
import { View } from 'react-native'
import { PlusSymbol, Cross } from '@morpheus-ui/icons'

import Theme from '../theme'

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
  flex-direction: row;
  cursor: pointer;
  border-radius: 23px;
  padding: 10px 13px;
  border: 1px white solid;
  background-color: transparent;
  background-size: 12px 12px;
  background-position: 7px center;
  background-repeat: no-repeat;
`

const HoverText = styled.Text`
  font-size: 0;
  transition: all 0.3s;

  ${props =>
    props.isHover &&
    css`
      width: auto;
      overflow: auto;
      font-size: 12px;
      margin-left: 13px;
      color: white;
    `};
`

export default class GrowButton extends Component<Props, State> {
  static contextType = Theme

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
        <Container onClick={onPress} isHover={this.state.isHover}>
          {icon === 'cross' ? (
            <Cross color="white" />
          ) : (
            <PlusSymbol color="white" />
          )}
          <HoverText isHover={this.state.isHover}>
            {hover ? hover : 'Install'}
          </HoverText>
        </Container>
      </View>
    )
  }
}
