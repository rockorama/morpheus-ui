// @flow

import React, { Component, type Node } from 'react'
import { Text, View } from 'react-native'
import styled, { css } from 'styled-components/native'
import _ from 'lodash'

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
  background-color: #d3d3d3;
  margin: 12px 20px;
  display: inline;
  position: absolute;
  ${props =>
    props.length &&
    css`
      width: ${props.length * 75};
    `};
`

const Number = styled.Text`
  font-size: 18px;
  font-family: 'Poppins';
  color: #d3d3d3;
  ${props =>
    props.active === props.which &&
    css`
      color: #1f3464;
    `};
  ${props =>
    props.which === 0 &&
    css`
      position: absolute;
      left: 0;
    `};
  ${props =>
    props.which === props.length - 1 &&
    css`
      position: absolute;
      left: ${props.length * 75 + 30};
    `};
`

const Container = styled.View`
  height: 20px;
`

type State = {
  active: integer,
}

export default class ProgressBar extends Component<Props> {
  state = {
    active: 0,
  }

  render() {
    const { length } = this.props
    const { active } = this.state

    return (
      <Container>
        <Number active={active} which={0}>
          {0}
        </Number>
        <BarWidth length={length}>
          {[...Array(length)].map((key, index) => {
            if (length === 2) {
              return <ActiveBar active={active} />
            } else if (index > 0 && index < length - 1) {
              return <ActiveBar active={active} />
            }
          })}
        </BarWidth>
        <Number active={active} which={length - 1} length={length}>
          {length - 1}
        </Number>
      </Container>
    )
  }
}
