//@flow
import React, { Component } from 'react'
import styled from 'styled-components/native'
import Theme, { getTheme, getPropertiesFromTheme } from './ThemeProvider'

type Props = {
  variant: string | Array<string>,
  children: any,
  bold?: boolean,
  italic?: boolean,
  size?: number,
  color?: string,
  uppercase?: boolean,
}

const TheThext = styled.Text`
  ${props =>
    getPropertiesFromTheme({
      ...props.muitheme,
      color: props.color || props.muitheme.color,
      fontWeight: props.bold ? 'bold' : props.muitheme.fontWeight,
      fontStyle: props.italic ? 'italic' : props.muitheme.fontStyle,
      fontSize: props.size || props.muitheme.fontSize,
      textTransform: props.uppercase
        ? 'uppercase'
        : props.muitheme.textTransform,
    })}
`

export default class Text extends Component<Props> {
  static contextType = Theme

  render() {
    const { children, ...other } = this.props
    const muitheme = getTheme('Text', this.props, this.context)

    return (
      <TheThext muitheme={muitheme} {...other}>
        {children}
      </TheThext>
    )
  }
}
