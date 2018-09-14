import styled, { css, keyframes } from 'styled-components'
import * as React from 'react'

type Props = {
  title: string,
  disabled?: boolean,
  buttonStyle?: number | Array<number | Object> | Object,
  textStyle?: number | Array<number | Object> | Object,
  outlined?: boolean,
  animation?: boolean,
  onClick?: Function,
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(5deg);
  }
  66%{
    transform: rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
`

export default styled.button`
  cursor: pointer;
  border-radius: 23px;
  height: 45px;
  background-color: #da1157;
  color: white;
  font-size: 13pt;
  border: 0;
  text-align: center;
  ${props =>
    props.outlined &&
    css`
      background-color: white;
      color: #da1157;
      border: 2px solid #da1157;
    `};
  ${props =>
    props.disabled &&
    css`
      background-color: #ffc1dc;
      cursor: auto;
    `};
  ${props =>
    props.animation &&
    css`
      :hover {
        animation: ${fadeIn} 1.5s linear both;
      }
    `};
`: React.ComponentType<Props>
