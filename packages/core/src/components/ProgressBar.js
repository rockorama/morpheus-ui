// @flow

import React, { Component, type Node } from 'react'
import { Text, View } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  children?: Node,
  title?: string,
}

const ActiveBar = styled.View`
  height: 2px;
  background-color: #1f3464;
  width: 75px;
  position: absolute;
  left: 0;
  ${props =>
    props.active &&
    css`
      left: ${props.active * 75};
    `};
`
const BarWidth = styled.View`
  border-radius: 1px;
  height: 2px;
  width: 150px;
  background-color: #d3d3d3;
`
const Numbers = styled.Text`
  &::before {
    content: '1';
  }
  &::after {
    content: '2';
  }
`

type State = {
  active: integer,
}

export default class ProgressBar extends Component<Props> {
  state = {
    active: 1,
  }
  render() {
    const { length } = this.props

    return (
      <Numbers>
        <BarWidth length={length}>
          <ActiveBar active={this.state.active} />
        </BarWidth>
      </Numbers>
    )
  }
}
