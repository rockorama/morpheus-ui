//@flow
import React, { Component } from 'react'
import styled from 'styled-components/native'
import memoize from 'memoize-one'
import transition from '../transitionClass'
import OverlayBaloon from './OverlayBaloon'

import Theme, { getTheme } from './ThemeProvider'

type Props = {
  children: any,
  top?: boolean,
  offset?: number,
}

type State = {
  hover: boolean,
}

const SvgQuestionMark = props => (
  <svg width="18" height="18" viewBox="0 0 18 18" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M9.003 0A8.996 8.996 0 0 1 18 8.997C18 13.967 13.973 18 9.003 18A9 9 0 0 1 0 9.003v-.006A8.996 8.996 0 0 1 9.003 0zm0 1C4.59 1 1 4.587 1 8.997 1.006 13.412 4.596 17 9.003 17 13.413 17 17 13.41 17 8.997 17 4.587 13.413 1 9.003 1zm.205 10.806a.724.724 0 0 1 .217.532.726.726 0 0 1-.217.53.725.725 0 0 1-.53.216.71.71 0 0 1-.52-.216.722.722 0 0 1-.218-.53.72.72 0 0 1 .217-.531.707.707 0 0 1 .52-.218c.21 0 .386.072.531.217zm1.901-6.284c.445.404.667.957.667 1.657 0 .78-.213 1.34-.639 1.68-.427.34-1.059.512-1.897.52v1.322H8.07V8.534h.52c.448.007.815-.026 1.1-.098.285-.072.507-.206.666-.4.16-.196.24-.48.24-.856 0-.383-.112-.683-.332-.9-.22-.216-.525-.325-.915-.325s-.698.104-.92.314c-.225.21-.337.502-.337.877h-1.16c0-.433.098-.819.293-1.159.195-.34.475-.603.84-.79.364-.189.79-.282 1.273-.282.737 0 1.327.202 1.771.606z"
        fill="currentColor"
      />
    </g>
  </svg>
)

const Container = styled.View`
  margin: ${({ muistyles }) => muistyles.margin};
  flex-direction: row;
`

const IconContainer = styled.Text`
  position: relative;
  display: flex;
  flex-direction: row;
  color: ${props =>
    props.hover ? props.muistyles.iconHoverColor : props.muistyles.iconColor};
`

export default class Tooltip extends Component<Props, State> {
  static contextType = Theme

  state = {
    hover: false,
  }

  getTooltipTheme = memoize((props: Props, context: Object) =>
    getTheme('Tooltip', props, context),
  )

  onMouseOver = () => {
    this.setState({
      hover: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      hover: false,
    })
  }

  render() {
    const { children } = this.props
    const muistyles: Object = this.getTooltipTheme(this.props, this.context)

    const baloonTheme: Object = {
      baloonWidth: muistyles.tooltipWidth,
      baloonBackgroundColor: muistyles.tooltipBackgroundColor,
      baloonBorderRadius: muistyles.tooltipBorderRadius,
      baloonPadding: muistyles.tooltipPadding,
      baloonShadow: muistyles.tooltipShadow,
      baloonBorderWidth: muistyles.tooltipBorderWidth,
      baloonBorderColor: muistyles.tooltipBorderColor,
      zIndex: muistyles.zIndex,
    }

    return (
      <Container muistyles={muistyles}>
        <IconContainer
          className={transition}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
          hover={this.state.hover}
          muistyles={muistyles}>
          <SvgQuestionMark
            width={muistyles.iconSize}
            height={muistyles.iconSize}
          />
          <OverlayBaloon
            theme={baloonTheme}
            hoverable
            offset={this.props.offset}
            top={this.props.top}>
            {children}
          </OverlayBaloon>
        </IconContainer>
      </Container>
    )
  }
}
