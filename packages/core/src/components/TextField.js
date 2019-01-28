//@flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'
import memoize from 'memoize-one'

import {
  turnIntoField,
  removeFieldProps,
  type FieldProps,
} from '@morpheus-ui/forms'

import transition from '../transitionClass'
import Theme, { getTheme } from './ThemeProvider'

const Container = styled.View``

const FieldContainer = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${props => props.muitheme.backgroundColor};
  border-radius: ${props => props.muitheme.borderRadius};
  border-color: ${props => props.muitheme.borderColor};
  border-width: ${props => props.muitheme.borderWidth};
  padding: ${props => props.muitheme.padding}
    ${props =>
      props.muitheme.shadow &&
      ` shadow-color: #000;
          shadow-offset: {width: 0, height: 0};
          shadow-opacity: 0.1;
          shadow-radius: 8;
      `}
    ${props =>
      !props.disabled &&
      props.hasfocus.on &&
      css`
        background-color: ${props => props.muitheme.backgroundActiveColor};
        border-color: ${props => props.muitheme.borderActiveColor};
        ${props.muitheme.activeShadow &&
          ` shadow-color: #000;
          shadow-offset: {width: 0, height: 0};
          shadow-opacity: 0.1;
          shadow-radius: 8;
      `}
      `};

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.muitheme.backgroundDisabledColor};
      border-color: ${props => props.muitheme.borderDisabledColor};
      cursor: not-allowed;
    `};

  ${props =>
    props.showError &&
    css`
      border-color: ${props => props.muitheme.errorColor};
    `};
`
const TextContainer = styled.View`
  position: relative;
  flex: 1;
`

const Label = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  font-size: ${props => props.muitheme.fontSize};
  color: ${props => props.muitheme.labelColor};
  position: absolute;

  ${props =>
    (props.hasfocus.on || props.hascontent.on) &&
    css`
      color: ${props => props.muitheme.labelActiveColor};
      font-size: 6px;
      margin-top: -8px;
      text-transform: uppercase;
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.muitheme.labelDisabledColor};
      cursor: not-allowed;
    `};

  ${props =>
    !props.hasfocus.on &&
    props.hascontent.on &&
    css`
      color: ${props => props.muitheme.labelWithContentColor};
    `};

  ${props =>
    props.disabled &&
    !props.hasfocus.on &&
    props.hascontent.on &&
    css`
      color: ${props => props.muitheme.labelDisabledWithContentColor};
    `};
`

const Field = styled.TextInput`
  font-family: ${props => props.muitheme.fontFamily};
  outline: none;
  font-size: ${props => props.muitheme.fontSize};
  position: relative;
  color: ${props => props.muitheme.textColor};
  ${props =>
    props.hasfocus.on &&
    css`
      color: ${props => props.muitheme.textActiveColor};
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.muitheme.textDisabledColor};
      cursor: not-allowed;
    `};
`

const ErrorMessage = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  font-size: 10px;
  height: 18px;
  color: ${props => props.muitheme.errorColor};
  min-height: ${props => props.muitheme.fontSize};
  padding: 2px;
  margin-bottom: 2px;
`

const IconContainerPress = styled.TouchableWithoutFeedback``

const IconLeftHolder = styled.Text`
  display: flex;
  margin-right: ${props => props.muitheme.iconMargin};
  color: ${props => props.muitheme.iconColor};
  ${props =>
    props.hasfocus.on &&
    css`
      color: ${props => props.muitheme.iconActiveColor};
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.muitheme.iconDisabledColor};
    `};
`

const IconRightHolder = styled.Text`
  display: flex;
  margin-left: ${props => props.muitheme.iconMargin};
  color: ${props => props.muitheme.iconColor};
  ${props =>
    props.hasfocus.on &&
    css`
      color: ${props => props.muitheme.iconActiveColor};
    `};

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.muitheme.iconDisabledColor};
    `};
`

type Props = FieldProps & {
  placeholder?: string,
  value?: ?string,
  defaultValue?: ?string,
  multiline: boolean,
  disabled: boolean,
  variant?: string | Array<string>,
  IconLeft?: ?any,
  IconRight?: ?any,
  onPressIcon?: ?(position?: string) => void,
}

type State = {
  focus: boolean,
  innerValue: string,
}

export class TextField extends Component<Props, State> {
  static contextType = Theme

  state: State = {
    focus: false,
    innerValue: '',
  }

  getValue() {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return fieldValue != null ? fieldValue : defaultValue || ''
    }

    if (value != null) {
      return value || defaultValue || ''
    }

    return this.state.innerValue
  }

  getType() {
    const { type } = this.props
    if (type === 'text') return null

    if (type === 'email') return 'emailAdreess'

    return type
  }

  onChange = (text: string) => {
    this.setState({
      innerValue: text,
    })
    this.props.onChange && this.props.onChange(text)
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  onBlur = () => {
    this.props.setDirty()
    this.setState({ focus: false })
  }

  onSubmit = () => {
    if (this.props.inForm) {
      this.props.submitForm()
    }
  }

  getTextFieldTheme = memoize((props: Props, context: Object) =>
    getTheme('TextField', props, context),
  )

  render() {
    const { label, errorMessage, isSubmitted, dirty } = this.props
    const {
      placeholder,
      multiline,
      disabled,
      inForm,
      IconLeft,
      IconRight,
      onPressIcon,
      ...other
    } = removeFieldProps(this.props)

    const showError = (isSubmitted() || dirty) && !!errorMessage

    const value = this.getValue()
    const hasValue = !!value

    const type = this.getType()

    const muitheme: Object = this.getTextFieldTheme(this.props, this.context)

    return (
      <Container>
        <FieldContainer
          className={transition}
          muitheme={muitheme}
          hasfocus={{ on: this.state.focus }}
          hascontent={{ on: hasValue }}
          showError={showError}
          disabled={disabled}>
          {IconLeft &&
            (onPressIcon && !disabled ? (
              <IconContainerPress onPress={() => onPressIcon('left')}>
                <IconLeftHolder
                  className={transition}
                  disabled={disabled}
                  hasfocus={{ on: this.state.focus }}
                  hascontent={{ on: hasValue }}
                  muitheme={muitheme}>
                  <IconLeft
                    width={muitheme.iconWidth}
                    height={muitheme.iconHeight}
                  />
                </IconLeftHolder>
              </IconContainerPress>
            ) : (
              <IconLeftHolder
                className={transition}
                disabled={disabled}
                hasfocus={{ on: this.state.focus }}
                hascontent={{ on: hasValue }}
                muitheme={muitheme}>
                <IconLeft
                  width={muitheme.iconWidth}
                  height={muitheme.iconHeight}
                />
              </IconLeftHolder>
            ))}
          <TextContainer>
            <Label
              className={transition}
              muitheme={muitheme}
              hasfocus={{ on: this.state.focus }}
              hascontent={{ on: hasValue }}
              disabled={disabled}>
              {label || placeholder}
            </Label>
            <Field
              hasfocus={{ on: this.state.focus }}
              hascontent={{ on: hasValue }}
              muitheme={muitheme}
              value={value}
              onChangeText={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              textContentType={type}
              secureTextEntry={type === 'password'}
              onSubmitEditing={this.onSubmit}
              multiline={multiline}
              placeholder={this.state.focus ? placeholder : null}
              disabled={disabled}
              {...other}
            />
          </TextContainer>
          {IconRight &&
            (onPressIcon && !disabled ? (
              <IconContainerPress onPress={() => onPressIcon('right')}>
                <IconRightHolder
                  className={transition}
                  disabled={disabled}
                  hasfocus={{ on: this.state.focus }}
                  hascontent={{ on: hasValue }}
                  muitheme={muitheme}>
                  <IconRight
                    width={muitheme.iconWidth}
                    height={muitheme.iconHeight}
                  />
                </IconRightHolder>
              </IconContainerPress>
            ) : (
              <IconRightHolder
                className={transition}
                disabled={disabled}
                hasfocus={{ on: this.state.focus }}
                hascontent={{ on: hasValue }}
                muitheme={muitheme}>
                <IconRight
                  width={muitheme.iconWidth}
                  height={muitheme.iconHeight}
                />
              </IconRightHolder>
            ))}
        </FieldContainer>
        <ErrorMessage muitheme={muitheme}>
          {showError ? errorMessage : ''}
        </ErrorMessage>
      </Container>
    )
  }
}

export default turnIntoField(TextField)
