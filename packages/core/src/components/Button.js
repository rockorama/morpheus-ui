import styled, { css } from 'styled-components'

type Props = {
  title: string,
  disabled?: boolean,
  buttonStyle?: number | Array<number | Object> | Object,
  textStyle?: number | Array<number | Object> | Object,
  outlined?: boolean,
  onClick?: Function,
}

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
`
