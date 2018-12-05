//@flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'

import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'
import Theme from '../theme'

type Props = FieldProps & {
  title?: string,
  Icon?: any,
  HoverIcon?: any,
  iconSize: { width: number, height: number },
  backgroundColor?: string,
  backgroundHoverColor?: string,
  iconPosition?: 'top' | 'right' | 'left' | 'bottom',
  titleColor?: string,
  titleHoverColor?: string,
  iconColor?: string,
  iconHoverColor?: string,
  borderColor?: string,
  borderHoverColor?: string,
  shadow?: boolean,
  hoverShadow?: boolean,
  noBorder?: boolean,
  submit?: boolean,

  onPress?: () => void,
}

type State = {
  isHover: boolean,
}

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`

const Clicker = styled.TouchableWithoutFeedback``

const InnerContainer = styled.View`
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: ${props => props.muitheme.spacing.basic}px;
  border-radius: ${props => props.muitheme.borders.roundness}px;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
    !props.noBorder &&
    css`
      border-color: ${props =>
        props.borderColor || props.muitheme.colors.main.border};
      border-width: ${props => props.muitheme.borders.width}px;
    `};

  ${props =>
    (props.iconPosition === 'top' || props.iconPosition === 'bottom') &&
    css`
      flex-direction: column;
    `};

  ${props =>
    props.shadow &&
    css`
        shadow-color: #000;
        shadow-offset: {width: 0, height: 0};
        shadow-opacity: 0.1;
        shadow-radius: 8;
        `};

  ${props => props.containerStyles};

  ${props =>
    props.isHover &&
    css`
      ${props =>
        !props.noBorder &&
        css`
          border-color: ${props =>
            props.borderHoverColor ||
            props.borderColor ||
            props.muitheme.colors.main.border};
        `};

      ${props =>
        props.hoverShadow &&
        css`
          shadow-color: #000;
          shadow-offset: {width: 0, height: 0};
          shadow-opacity: 0.1;
          shadow-radius: 8;
          `};

      ${props =>
        props.backgroundHoverColor &&
        css`
          background-color: ${props.backgroundHoverColor ||
            props.backgroundColor ||
            'transparent'};
        `};

      ${props => props.containerHoverStyles};
    `};
`

const IconContainer = styled.View`
  transition: all 0.3s
  align-items: center;
  justify-content: center;
  ${props =>
    props.iconColor &&
    css`
      color: ${props.iconColor};
    `};

  ${props =>
    !!props.title &&
    props.iconPosition === 'top' &&
    css`
      margin-bottom: 10px;
    `};

  ${props =>
    !!props.title &&
    props.iconPosition === 'right' &&
    css`
      margin-left: 20px;
    `};

  ${props =>
    !!props.title &&
    props.iconPosition === 'bottom' &&
    css`
      margin-top: 10px;
    `};

  ${props =>
    !!props.title &&
    props.iconPosition === 'left' &&
    css`
      margin-right: 20px;
    `};

  ${props =>
    props.isHover &&
    css`
      ${props =>
        (props.iconHoverColor || props.iconColor) &&
        css`
          color: ${props.iconHoverColor || props.iconColor};
        `};
      ${props => props.iconHoverStyles};
    `};
`

const Title = styled.Text`
  font-family: 'Muli';
  font-size: ${props => props.muitheme.typography.fontSize - 2}px;
  color: #a9a9a9;
  transition: all 0.3s;
  font-weight: bold;
  color: ${props => props.titleColor || props.muitheme.colors.main.text};
  ${props => props.titleStyles};

  ${props =>
    props.isHover &&
    css`
      color: ${props =>
        props.titleHoverColor ||
        props.titleColor ||
        props.muitheme.colors.main.activeText};
      ${props => props.titleHoverStyles};
    `};
`
export class Button extends Component<Props, State> {
  static contextType = Theme

  static defaultProps = {
    iconPosition: 'right',
    iconSize: {
      width: 24,
      height: 24,
    },
    titleColor: '#979797',
    titleHoverColor: '#DA1157',
    iconColor: '#979797',
    iconHoverColor: '#DA1157',
    borderColor: '#979797',
    borderHoverColor: '#DA1157',
  }

  state = {
    isHover: false,
  }

  onMouseOver = () => {
    this.setState({
      isHover: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      isHover: false,
    })
  }

  onSubmit = () => {
    if (this.props.inForm && this.props.submit) {
      this.props.submitForm()
    }
    this.props.onPress && this.props.onPress()
  }

  renderIcon() {
    const { Icon, HoverIcon } = this.props
    if (!Icon) return null

    const TheIcon = this.state.isHover ? HoverIcon || Icon : Icon
    return (
      <IconContainer {...this.props} isHover={this.state.isHover}>
        <TheIcon
          width={this.props.iconSize.width}
          height={this.props.iconSize.height}
        />
      </IconContainer>
    )
  }

  render() {
    const { title, iconPosition } = this.props

    return (
      <Container>
        <Clicker onPress={this.onSubmit}>
          <InnerContainer
            {...this.props}
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
            muitheme={this.context}
            isHover={this.state.isHover}>
            {(iconPosition === 'left' || iconPosition === 'top') &&
              this.renderIcon()}
            <Title
              {...this.props}
              isHover={this.state.isHover}
              muitheme={this.context}>
              {title}
            </Title>
            {(iconPosition === 'right' || iconPosition === 'bottom') &&
              this.renderIcon()}
          </InnerContainer>
        </Clicker>
      </Container>
    )
  }
}

export default turnIntoField(Button)
