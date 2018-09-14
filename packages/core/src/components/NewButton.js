import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../colors'

type Props = {
  title: string,
  disabled?: boolean,
  buttonStyle?: number | Array<number | Object> | Object,
  textStyle?: number | Array<number | Object> | Object,
  outlineStyle?: boolean,
  onPress?: Function,
}

export default styled.button`
  background-color: COLORS.RED;
`
