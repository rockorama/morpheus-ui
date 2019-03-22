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

const Container = styled.View`
  margin: ${props => props.muitheme.margin};
`

const FieldContainer = styled.View`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.muitheme.backgroundColor};
  border-radius: ${props => props.muitheme.borderRadius};
  border-color: ${props => props.muitheme.borderColor};
  border-width: ${props => props.muitheme.borderWidth};
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
  padding: ${props => props.muitheme.padding};
  position: relative;
  flex: 1;
`

const Label = styled.Text`
  font-family: ${props => props.muitheme.labelFontFamily};
  font-size: ${props =>
    props.muitheme.labelFontSize || props.muitheme.fontSize};
  color: ${props => props.muitheme.labelColor};
  margin: ${props => props.muitheme.labelMargin};
  text-transform: ${props => props.muitheme.labelTextTransform};
  position: ${props => props.muitheme.labelPosition};

  ${props =>
    (props.hasfocus.on || props.hascontent.on) &&
    css`
      color: ${props => props.muitheme.labelActiveColor};
      font-size: ${props => props.muitheme.labelActiveFontSize};
      margin: ${props => props.muitheme.labelActiveMargin};

      text-transform: ${props => props.muitheme.labelActiveTextTransform};
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
    props.disabledstyle.on &&
    css`
      color: ${props => props.muitheme.textDisabledColor};
      cursor: not-allowed;
    `};
`

const ErrorMessage = styled.Text`
  ${props => props.muitheme.noError && `display: none`};
  font-family: ${props => props.muitheme.errorFontFamily};
  font-size: ${props => props.muitheme.errorFontSize};
  min-height: ${props => props.muitheme.errorMinHeight};
  padding: ${props => props.muitheme.errorPadding};
  margin: ${props => props.muitheme.errorMargin};
  color: ${props => props.muitheme.errorColor};
  padding: 2px;
  margin-bottom: 2px;
`

const IconContainerPress = styled.TouchableWithoutFeedback``

const IconLeftHolder = styled.Text`
  display: flex;
  padding: ${props => props.muitheme.iconPadding};
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
  padding: ${props => props.muitheme.iconPadding};
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
  defaultValue?: string,
  multiline: boolean,
  disabled: boolean,
  disableEdit?: boolean,
  variant?: string | Array<string>,
  IconLeft?: ?any,
  IconRight?: ?any,
  onPressIcon?: (payload: { position: string, value: string }) => void,
  submitOnPressIcon?: boolean,
}

type State = {
  focus: boolean,
  innerValue: any,
}

export class TextField extends Component<Props, State> {
  static contextType = Theme

  constructor(props: Props) {
    super(props)

    this.state = {
      focus: false,
      innerValue: props.defaultValue || '',
    }
  }

  getValue = () => {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return value || fieldValue != null ? fieldValue : defaultValue || ''
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

  onPressIcon = (position: string) => {
    if (this.props.onPressIcon) {
      // $FlowFixMe
      this.props.onPressIcon({ position, value: this.getValue() || '' })
    }
    this.props.submitOnPressIcon && this.onSubmit()
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
      submitOnPressIcon,
      disableEdit,
      ...other
    } = removeFieldProps(this.props)

    const showError = (isSubmitted() || dirty) && !!errorMessage

    const value = this.getValue()
    const hasValue = !!value

    const type = this.getType()

    const muitheme: Object = this.getTextFieldTheme(this.props, this.context)

    return (
      <Container muitheme={muitheme}>
        <FieldContainer
          className={transition}
          muitheme={muitheme}
          hasfocus={{ on: this.state.focus }}
          hascontent={{ on: hasValue }}
          showError={showError}
          disabled={disabled}>
          {IconLeft &&
            ((onPressIcon || submitOnPressIcon) && !disabled ? (
              <IconContainerPress onPress={() => this.onPressIcon('left')}>
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
          <TextContainer muitheme={muitheme}>
            <Label
              className={transition}
              muitheme={muitheme}
              hasfocus={{ on: this.state.focus }}
              hascontent={{ on: hasValue }}
              disabled={disabled}>
              {label}
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
              disabledstyle={{ on: disabled }}
              disabled={disabled || disableEdit}
              {...other}
            />
          </TextContainer>
          {IconRight &&
            ((onPressIcon || submitOnPressIcon) && !disabled ? (
              <IconContainerPress onPress={() => this.onPressIcon('right')}>
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
