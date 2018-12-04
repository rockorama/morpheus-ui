//@flow

import React, { Component } from 'react'
import styled from 'styled-components/native'

import withSize, { type ScreenSizes } from '../../screenSize'

import { RowContext } from './Row'

type Props = ScreenSizes & {
  children: any,
  size: number,
  sm?: number,
  md?: number,
  lg?: number,
  offset: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  smHidden?: boolean,
  mdHidden?: boolean,
  lgHidden?: boolean,
}

const isHidden = ({ screenSize, smHidden, mdHidden, lgHidden }: Object) => {
  switch (screenSize) {
    case 'sm':
      return smHidden
    case 'md':
      return mdHidden
    case 'lg':
      return lgHidden
    default:
      return false
  }
}

const toPercent = (num, size) => {
  return num > size ? '100%' : `${(num / size) * 100}%`
}

const getColWidth = ({
  sm,
  md,
  lg,
  size,
  rowSize,
  screenSize,
}: Object): string => {
  switch (screenSize) {
    case 'sm':
      if (sm >= 0) {
        return toPercent(sm, rowSize)
      }
      break
    case 'md':
      if (md >= 0) {
        return toPercent(md, rowSize)
      } else if (sm >= 0) {
        return toPercent(sm, rowSize)
      }
      break
    case 'lg':
      if (lg >= 0) {
        return toPercent(lg, rowSize)
      } else if (md >= 0) {
        return toPercent(md, rowSize)
      } else if (sm >= 0) {
        return toPercent(sm, rowSize)
      }
      break
    default:
      return toPercent(size, rowSize)
  }

  return toPercent(size, rowSize)
}

const getColOffset = ({
  smOffset,
  mdOffset,
  lgOffset,
  offset,
  rowSize,
  screenSize,
}: Object): string => {
  return getColWidth({
    sm: smOffset,
    md: mdOffset,
    lg: lgOffset,
    size: offset,
    rowSize,
    screenSize,
  })
}

const ColumnView = styled.View`
  width: ${props => getColWidth(props)};
  padding: 0 ${props => props.muiTheme.spacing.basic / 2}px;
  margin-left: ${props => getColOffset(props)};
  ${props => (isHidden(props) ? 'display: none' : '')};
  ${props => props.styles};
`

class Column extends Component<Props> {
  static contextType = RowContext

  static defaultProps = {
    size: 1,
    offset: 0,
    nowrap: false,
    alignItems: 'center',
    justifyContent: 'center',
  }

  render() {
    return (
      <ColumnView
        {...this.props}
        rowSize={this.context.rowSize}
        muiTheme={this.context.theme}>
        {this.props.children}
      </ColumnView>
    )
  }
}

export default withSize(Column)
