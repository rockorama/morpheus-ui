// @flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'

type Props = {
  length?: number,
  control?: number | (() => number),
}

type State = {
  active: number,
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

export default class ProgressBar extends Component<Props, State> {
  state = {
    active: 0,
  }

  handleActive() {
    if (this.props.control == null) {
      return this.state.active
    } else if (typeof this.props.control === 'function') {
      return this.props.control()
    } else {
      return this.props.control
    }
  }

  render() {
    const length = this.props.length ? this.props.length : 2

    return (
      <Container>
        <Number active={this.handleActive()} which={0}>
          {1}
        </Number>
        <BarWidth length={length}>
          <ActiveBar active={this.handleActive()} />
        </BarWidth>
        <Number active={this.handleActive()} which={length - 1} length={length}>
          {length}
        </Number>
      </Container>
    )
  }
}
