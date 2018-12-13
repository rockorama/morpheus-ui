//@flow

import React, { Component, createContext } from 'react'
import styled from 'styled-components/native'

import Theme, { DEFAULT_THEME, getTheme } from '../ThemeProvider'
import withSize, { type ScreenSizes } from '../../screenSize'

type ContextType = { theme: Object, rowSize: number }

export const RowContext = createContext<ContextType>({
  theme: DEFAULT_THEME,
  rowSize: 12,
})

type Props = ScreenSizes & {
  size: number,
  children: any,
  nowrap: boolean,
  top: boolean,
  bottom: boolean,
  inner: boolean,
}

const RowView = styled.View`
  width: 100%;
  flex-direction: 'row';
  flex-wrap: ${props => (props.nowrap ? 'nowrap' : 'wrap')};
  justify-content: flex-start;
  margin: ${props => props.muiTheme.spacing / 2}px -${props => props.muiTheme.spacing / 2}px;
  ${props => (props.inner ? `margin: ${props.muiTheme.spacing / 2}px 0;` : '')};
  ${props => (props.top ? 'margin-top: 0' : '')};
  ${props => (props.bottom ? 'margin-bottom: 0' : '')};
`

class Row extends Component<Props> {
  static contextType = Theme

  static defaultProps = {
    size: 12,
    nowrap: false,
  }

  render() {
    const theme = getTheme('Grid', this.props, this.context)

    return (
      <RowView {...this.props} muiTheme={theme}>
        <RowContext.Provider value={{ rowSize: this.props.size, theme }}>
          {this.props.children}
        </RowContext.Provider>
      </RowView>
    )
  }
}

export default withSize(Row)
