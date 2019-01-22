//@flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'
import memoize from 'memoize-one'

import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'

import transition from '../transitionClass'
import Theme, { getTheme } from './ThemeProvider'

type Props = FieldProps & {
  title?: string,
  Icon?: any,
  HoverIcon?: any,
  submit?: boolean,
  variant?: string | Array<string>,
  theme: Object,
  disabled: boolean,
  onPress?: () => void,
}

type State = {
  ishover: boolean,
}
const Container = styled.View`
  align-items: center;
  flex-direction: row;
`
const Clicker = styled.TouchableWithoutFeedback``

const InnerContainer = styled.View`
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ muitheme }) => muitheme.backgroundColor};
    border-color: ${({ muitheme }) => muitheme.borderColor};
    border-width: ${({ muitheme }) => muitheme.borderWidth};
    border-radius: ${({ muitheme }) => muitheme.borderRadius};
    ${({ muitheme }) =>
      (muitheme.iconPosition === 'top' || muitheme.iconPosition === 'bottom') &&
      `flex-direction: column;`} 
   ${({ muitheme }) =>
     muitheme.shadow &&
     ` shadow-color: #000;
       shadow-offset: {width: 0, height: 0};
       shadow-opacity: 0.1;
       shadow-radius: 8;
    `}

  ${({ ishover, muitheme, disabled }) =>
    ishover.on &&
    !disabled &&
    ` background-color: ${muitheme.backgroundHoverColor};
      border-color: ${muitheme.borderHoverColor};
      ${muitheme.hoverShadow &&
        ` shadow-color: #000;
          shadow-offset: {width: 0, height: 0};
          shadow-opacity: 0.1;
          shadow-radius: 8;
        `}
     `}


    ${({ muitheme, disabled }) =>
      disabled &&
      ` background-color: ${muitheme.backgroundDisabledColor};
      border-color: ${muitheme.borderDisabledColor};
      cursor: not-allowed;
     `}


`

const IconContainer = styled.Text`
  ${({ muitheme, title, ishover, disabled }) =>
    css`
      padding: ${muitheme.iconPadding};
      display: flex;
      background-color: ${muitheme.iconBackgroundColor};
      align-items: center;
      justify-content: center;
      color: ${muitheme.iconColor};
      ${!!title &&
        muitheme.iconPosition === 'top' &&
        `margin-bottom: ${muitheme.iconMargin};`}
      ${!!title &&
        muitheme.iconPosition === 'right' &&
        `margin-left: ${muitheme.iconMargin};`}
      ${!!title &&
        muitheme.iconPosition === 'bottom' &&
        `margin-top: ${muitheme.iconMargin};`}
      ${!!title &&
        muitheme.iconPosition === 'left' &&
        `margin-right: ${muitheme.iconMargin};`}

       ${ishover.on &&
         `color: ${muitheme.iconHoverColor};
          background-color: ${muitheme.iconHoverBackgroundColor};
`}
       ${disabled &&
         `
        color: ${muitheme.iconDisabledColor};
        background-color: ${muitheme.iconDisabledBackgroundColor};
        `}
  `}
`

const Title = styled.Text`
  ${({ muitheme, ishover, disabled }) =>
    css`
      padding: ${muitheme.titlePadding};
      font-family: ${muitheme.fontFamily};
      font-size: ${muitheme.fontSize};
      font-weight: ${muitheme.fontWeight};
      color: ${muitheme.titleColor};
      ${ishover.on && `color: ${muitheme.titleHoverColor};`}

      ${disabled &&
        `color: ${muitheme.titleDisabledColor}; cursor: not-allowed;`}
    `}
`

export class Button extends Component<Props, State> {
  static contextType = Theme

  state = {
    ishover: false,
  }

  onMouseOver = () => {
    this.setState({
      ishover: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      ishover: false,
    })
  }

  onSubmit = () => {
    if (!this.props.disabled) {
      if (this.props.inForm && this.props.submit) {
        this.props.submitForm()
      }
      this.props.onPress && this.props.onPress()
    }
  }

  renderIcon(muitheme: Object) {
    const { Icon, HoverIcon, disabled } = this.props
    if (!Icon) return null

    const TheIcon = this.state.ishover && !disabled ? HoverIcon || Icon : Icon
    return (
      <IconContainer
        className={transition}
        muitheme={muitheme}
        title={this.props.title}
        ishover={{ on: this.state.ishover }}
        disabled={disabled}>
        <TheIcon width={muitheme.iconWidth} height={muitheme.iconHeight} />
      </IconContainer>
    )
  }

  getButtonTheme = memoize((props: Props, context: Object) =>
    getTheme('Button', props, context),
  )

  render() {
    const { title, disabled } = this.props
    const muitheme: Object = this.getButtonTheme(this.props, this.context)

    return (
      <Container>
        <Clicker disabled={disabled} onPress={this.onSubmit}>
          <InnerContainer
            {...this.props}
            className={transition}
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
            muitheme={muitheme}
            disabled={disabled}
            ishover={{ on: this.state.ishover }}>
            {(muitheme.iconPosition === 'left' ||
              muitheme.iconPosition === 'top') &&
              this.renderIcon(muitheme)}
            <Title
              className={transition}
              ishover={{ on: this.state.ishover }}
              muitheme={muitheme}
              disabled={disabled}>
              {title}
            </Title>
            {(muitheme.iconPosition === 'right' ||
              muitheme.iconPosition === 'bottom') &&
              this.renderIcon(muitheme)}
          </InnerContainer>
        </Clicker>
      </Container>
    )
  }
}

export default turnIntoField(Button)
