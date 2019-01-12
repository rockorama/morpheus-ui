//@flow
import React, { Component } from 'react'
import styled from 'styled-components/native'
import memoize from 'memoize-one'

import Theme, { getTheme, getPropertiesFromTheme } from './ThemeProvider'

type Props = {
  variant?: string | Array<string>,
  children: any,
  bold?: boolean,
  italic?: boolean,
  size?: number,
  color?: string,
  uppercase?: boolean,
  styles?: string,
}

const TheThext = styled.Text`
  ${props => props.muistyles}
  ${props => props.styles}
`

export default class Text extends Component<Props> {
  static contextType = Theme

  getTextTheme = memoize((props: Props, context: Object) => {
    // $FlowFixMe
    const { trace, ...theme }: Object = getTheme('Text', props, context)
    const { bold, italic, size, uppercase, color } = props
    return getPropertiesFromTheme({
      ...theme,
      color: color || theme.color,
      fontWeight: bold ? 'bold' : theme.fontWeight,
      fontStyle: italic ? 'italic' : theme.fontStyle,
      fontSize: size || theme.fontSize,
      textTransform: uppercase ? 'uppercase' : theme.textTransform,
    })
  })

  render() {
    const {
      children,
      bold,
      italic,
      uppercase,
      size,
      color,
      ...other
    } = this.props
    const muistyles = this.getTextTheme(this.props, this.context)
    return (
      <TheThext muistyles={muistyles} {...other}>
        {children}
      </TheThext>
    )
  }
}
