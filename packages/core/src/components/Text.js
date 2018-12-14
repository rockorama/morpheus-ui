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
    const theme: Object = getTheme('Text', props, context)
    return getPropertiesFromTheme({
      ...theme,
      color: this.props.color || theme.color,
      fontWeight: this.props.bold ? 'bold' : theme.fontWeight,
      fontStyle: this.props.italic ? 'italic' : theme.fontStyle,
      fontSize: this.props.size || theme.fontSize,
      textTransform: this.props.uppercase ? 'uppercase' : theme.textTransform,
    })
  })

  render() {
    const { children, ...other } = this.props
    const muistyles = this.getTextTheme(this.props, this.context)

    return (
      <TheThext muistyles={muistyles} {...other}>
        {children}
      </TheThext>
    )
  }
}
