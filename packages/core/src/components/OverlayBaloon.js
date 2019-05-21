//@flow
import React, { Component, createRef, type ElementRef } from 'react'
import styled from 'styled-components/native'
import memoize from 'memoize-one'
import { Modal } from 'react-overlays'

import getElementPosition from '../getElementPosition'
import getElementSize from '../getElementSize'
import getScreenSize from '../getScreenSize'

import Theme, { getTheme } from './ThemeProvider'

type Props = {
  children: any,
  top?: boolean,
  offset?: number,
  visible?: boolean,
  hoverable?: boolean,
}

type State = {
  hover: boolean,
  containerPos: Object,
  containerSize: Object,
  screenSize: Object,
}

const BACKSTYLE = {
  position: 'fixed',
  maxWidth: '90vw',
}

const SvgOverlayBaloonUp = props => (
  <svg width="21" height="21" viewBox="0 0 21 12" {...props}>
    <path
      d="M11.942 1.414l8.338 8.338a.915.915 0 0 1-.648 1.562H1.37a.893.893 0 0 1-.632-1.525l8.376-8.375a2 2 0 0 1 2.828 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const SvgOverlayBaloonDown = props => (
  <svg width="21" height="21" viewBox="0 0 21 12" {...props}>
    <path
      d="M11.942 10.597L20.28 2.26a.915.915 0 0 0-.648-1.562H1.37a.893.893 0 0 0-.632 1.524l8.376 8.375a2 2 0 0 0 2.828 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ArrowContainer = styled.Text`
  position: fixed;

  color: ${props => props.muistyles.baloonBackgroundColor};
`

const BaloonContainer = styled.View`
  width: 100%;
  background-color: ${props => props.muistyles.baloonBackgroundColor};
  border-radius: ${props => props.muistyles.baloonBorderRadius};
  padding: ${props => props.muistyles.baloonPadding};

  border-width: ${props => props.muistyles.baloonBorderWidth};
  border-color: ${props => props.muistyles.baloonBorderColor};

  ${({ muistyles }) =>
    muistyles.baloonShadow &&
    ` shadow-color: #000;
       shadow-offset: {width: 0, height: 0};
       shadow-opacity: 0.1;
       shadow-radius: 8;
    `}
`

export default class Baloon extends Component<Props, State> {
  static contextType = Theme

  // $FlowFixMe: React Ref
  containerRef: ElementRef<'div'> = createRef()

  state = {
    containerPos: {},
    containerSize: {},
    screenSize: {},
    hover: false,
  }

  componentDidMount() {
    this.getPositionAndSize()

    window.addEventListener('scroll', this.getPositionAndSize)
    window.addEventListener('resize', this.getPositionAndSize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getPositionAndSize)
    window.removeEventListener('resize', this.getPositionAndSize)
  }

  getPositionAndSize = () => {
    this.setState({
      containerSize: getElementSize(this.containerRef.current),
      containerPos: getElementPosition(this.containerRef.current),
      screenSize: getScreenSize(),
    })
  }

  getBaloonTheme = memoize((props: Props, context: Object) =>
    getTheme('OverlayBaloon', props, context),
  )

  onMouseOver = () => {
    this.setState(
      {
        hover: true,
      },
      this.getPositionAndSize,
    )
  }

  onMouseLeave = () => {
    this.setState({
      hover: false,
    })
  }

  getBaloonStyles(theme: Object) {
    if (!this.state.containerPos) {
      return {}
    }

    const baloonWidth =
      theme.baloonWidth < this.state.screenSize.width * 0.9
        ? theme.baloonWidth
        : this.state.screenSize.width * 0.9

    let marginLeft =
      ((baloonWidth - this.state.containerSize.width) / 2) * -1 +
      (this.props.offset || 0)

    if (this.state.containerPos.x + marginLeft < 0) {
      marginLeft = -(this.state.containerPos.x - 10)
    }

    if (
      this.state.containerPos.x + baloonWidth + marginLeft >
      this.state.screenSize.width
    ) {
      marginLeft =
        (baloonWidth +
          10 -
          (this.state.screenSize.width - this.state.containerPos.x)) *
        -1
    }

    const baseStyles = {
      ...BACKSTYLE,
      width: baloonWidth,
      left: this.state.containerPos.x,
      zIndex: theme.zIndex,
      marginLeft,
    }

    if (!this.props.top) {
      return {
        ...baseStyles,
        top: this.state.containerPos.y + this.state.containerSize.height + 15,
      }
    }
    return {
      ...baseStyles,
      bottom: this.state.screenSize.height - this.state.containerPos.y + 20,
    }
  }

  getArrowStyles() {
    if (!this.state.containerPos) {
      return {}
    }

    if (!this.props.top) {
      return {
        top: this.state.containerPos.y + this.state.containerSize.height,
        left:
          this.state.containerPos.x + this.state.containerSize.width / 2 - 10,
      }
    }

    return {
      bottom: this.state.screenSize.height - this.state.containerPos.y + 2,
      left: this.state.containerPos.x + this.state.containerSize.width / 2 - 10,
    }
  }

  render() {
    const { children } = this.props
    const muistyles: Object = this.getBaloonTheme(this.props, this.context)
    return (
      <Container
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        hover={this.state.hover}
        muistyles={muistyles}>
        <div style={DivStyles} ref={this.containerRef} />

        {((this.props.hoverable && this.state.hover) || this.props.visible) && (
          <Modal show style={this.getBaloonStyles(muistyles)}>
            <div>
              <BaloonContainer muistyles={muistyles}>
                <div>{children}</div>
              </BaloonContainer>
              <ArrowContainer
                muistyles={muistyles}
                style={this.getArrowStyles()}>
                {!this.props.top ? (
                  <SvgOverlayBaloonUp />
                ) : (
                  <SvgOverlayBaloonDown />
                )}
              </ArrowContainer>
            </div>
          </Modal>
        )}
      </Container>
    )
  }
}

const DivStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
}
