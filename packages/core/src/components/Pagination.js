// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'

import memoize from 'memoize-one'

import Theme, { getTheme } from './ThemeProvider'

const SvgArrowRight = props => (
  <svg width="5" height="8" viewBox="0 0 5 8" {...props}>
    <path
      d="M.147.854L3.293 4 .147 7.147a.5.5 0 0 0 .707.707l3.5-3.5a.498.498 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.707.708z"
      fill={props.muitheme.arrowColor}
      fillRule="evenodd"
    />
  </svg>
)

const SvgArrowLeft = props => (
  <svg width="5" height="8" viewBox="0 0 5 8" {...props}>
    <path
      d="M4.853 7.146L1.707 4 4.853.853a.5.5 0 0 0-.707-.707l-3.5 3.5a.498.498 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .707-.708z"
      fill={props.muitheme.arrowColor}
      fillRule="evenodd"
    />
  </svg>
)

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${props => props.muitheme.padding};
`

const Label = styled.Text`
  color: ${props => props.muitheme.labelColor};
  font-size: ${props => props.muitheme.fontSize};
  margin: ${props => props.muitheme.labelMargin};
`

const ArrowButton = styled.TouchableOpacity`
  min-width: ${props => props.muitheme.buttonMinWidth};
  align-items: center;
  justify-content: center;
  padding: ${props => props.muitheme.buttonPadding};
  margin: ${props => props.muitheme.buttonMargin};
`

const PageButton = styled.TouchableOpacity`
  min-width: ${props => props.muitheme.buttonMinWidth};
  align-items: center;
  justify-content: center;
  padding: ${props => props.muitheme.buttonPadding};
  margin: ${props => props.muitheme.buttonMargin};
  border-width: ${props => props.muitheme.buttonBorderWidth};
  border-color: ${props => props.muitheme.buttonBorderColor};
  border-style: solid;
  border-radius: ${props => props.muitheme.buttonBorderRadius};

  ${props =>
    props.selected &&
    `border-color: ${props.muitheme.buttonSelectedBorderColor};`}
`

const PageText = styled.Text`
  color: ${props => props.muitheme.buttonColor};
  font-size: ${props => props.muitheme.fontSize};

  ${props => props.selected && `color: ${props.muitheme.buttonSelectedColor};`}
`

type Props = {
  numPages: number,
  defaultPage?: number,
  maxDisplay?: number,
  variant?: string | Array<string>,
  label?: ?string,
  onSelectPage: (page: number) => void,
}

type State = {
  currentPage: number,
}

export default class Pagination extends Component<Props, State> {
  static contextType = Theme

  constructor(props: Props) {
    super(props)

    this.state = {
      currentPage:
        props.defaultPage &&
        props.defaultPage > 0 &&
        props.defaultPage <= props.numPages
          ? props.defaultPage
          : 1,
    }
  }

  getPages = () => {
    const { currentPage } = this.state
    const displayCount =
      this.props.maxDisplay && this.props.maxDisplay < this.props.numPages
        ? this.props.maxDisplay
        : this.props.numPages

    let start = 1

    const middle = Math.floor(displayCount / 2)

    if (currentPage - middle >= 1) {
      start = currentPage - middle

      if (start + displayCount - 1 > this.props.numPages) {
        start = this.props.numPages - displayCount + 1
      }
    }

    const pagesArray = []
    for (let i = start; i < start + displayCount; i++) {
      pagesArray.push(i)
    }
    return pagesArray
  }

  getPaginationTheme = memoize((props: Props, context: Object) =>
    getTheme('Pagination', props, context),
  )

  onSelectPage = (page: number) => {
    this.props.onSelectPage && this.props.onSelectPage(page)
    this.setState({ currentPage: page })
  }

  render() {
    const muitheme: Object = this.getPaginationTheme(this.props, this.context)

    const pages = this.getPages()
    const first = pages.length ? pages[0] : 0
    const last = pages.length ? pages[pages.length - 1] : this.props.numPages

    return (
      <Container muitheme={muitheme}>
        {this.props.label && (
          <Label muitheme={muitheme}>{this.props.label}</Label>
        )}
        {first > 1 && (
          <ArrowButton
            muitheme={muitheme}
            onPress={() => this.onSelectPage(first - 1)}>
            <SvgArrowLeft muitheme={muitheme} />
          </ArrowButton>
        )}
        {pages.map(page => (
          <PageButton
            muitheme={muitheme}
            selected={this.state.currentPage === page}
            onPress={() => this.onSelectPage(page)}
            key={`page-${page}`}>
            <PageText
              muitheme={muitheme}
              selected={this.state.currentPage === page}>
              {page}
            </PageText>
          </PageButton>
        ))}
        {last < this.props.numPages && (
          <ArrowButton
            muitheme={muitheme}
            onPress={() => this.onSelectPage(last + 1)}>
            <SvgArrowRight muitheme={muitheme} />
          </ArrowButton>
        )}
      </Container>
    )
  }
}
