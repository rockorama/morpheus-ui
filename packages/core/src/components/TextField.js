//@flow

import React, { Component } from 'react'
import styled, { css } from 'styled-components/native'

import {
  turnIntoField,
  removeFieldProps,
  type FieldProps,
} from '@morpheus-ui/forms'
import Theme from '../theme'

type Props = FieldProps & {
  placeholder?: string,
  value?: ?string,
  defaultValue?: ?string,
  multiline: boolean,
}

type State = {
  focus: boolean,
  innerValue: string,
}

const Container = styled.View``

const FieldContainer = styled.View`
  transition: all 0.3s
  background-color: ${props => props.muitheme.colors.main.border};
  border-radius: ${props => props.muitheme.borders.roundness}px;
  border-color: ${props => props.muitheme.colors.main.border};
  border-width: ${props => props.muitheme.borders.width}px;
  padding: ${props => props.muitheme.spacing.basic}px
    ${props => props.muitheme.spacing.basic}px
    ${props => props.muitheme.spacing.basic - 2}px
    ${props => props.muitheme.spacing.basic}px;

  ${props =>
    props.hasFocus &&
    css`
      background-color: #fff;
      shadow-color: #000;
      shadow-offset: {width: 0, height: 0};
      shadow-opacity: 0.1;
      shadow-radius: 8;
    `};

    ${props =>
      props.showError &&
      css`
        border-color: ${props => props.muitheme.colors.main.alert};
      `};
`

const Label = styled.Text`
  font-family: 'Muli';
  font-size: ${props => props.muitheme.typography.fontSize}px;
  color: #a9a9a9;
  position: absolute;
  transition: all 0.3s;

  ${props =>
    (props.hasFocus || props.hasContent) &&
    css`
      color: #a9a9a9;
      font-size: ${props => props.muitheme.typography.fontSize - 5}px;
      margin-top: -${props => props.muitheme.spacing.basic - 5}px;
      text-transform: uppercase;
    `};

  ${props =>
    !props.hasFocus &&
    props.hasContent &&
    css`
      color: transparent;
    `};
`

const Field = styled.TextInput`
  font-family: 'Muli';
  outline: none;
  font-size: ${props => props.muitheme.typography.fontSize}px;
  position: relative;
  color: ${props => props.muitheme.colors.main.text};
  ${props =>
    props.hasFocus &&
    css`
      color: ${props => props.muitheme.colors.main.activeText};
    `};
`

const ErrorMessage = styled.Text`
  font-family: 'Muli';
  font-size: 10px;
  color: ${props => props.muitheme.colors.main.alert};
  min-height: ${props => props.muitheme.typography.fontSize}px;
  padding: 2px;
  margin-bottom: 2px;
`

export class TextField extends Component<Props, State> {
  static contextType = Theme

  state: State = {
    focus: false,
    innerValue: '',
  }

  getValue() {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return fieldValue || defaultValue || ''
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

  render() {
    const { label, errorMessage, isSubmitted, dirty } = this.props
    const { placeholder, multiline, ...other } = removeFieldProps(this.props)

    const showError = (isSubmitted() || dirty) && !!errorMessage

    const value = this.getValue()
    const hasValue = !!value

    const type = this.getType()

    return (
      <Container>
        <FieldContainer
          muitheme={this.context}
          hasFocus={this.state.focus}
          hasContent={hasValue}
          showError={showError}>
          <Label
            muitheme={this.context}
            hasFocus={this.state.focus}
            hasContent={hasValue}>
            {label || placeholder}
          </Label>
          <Field
            hasFocus={this.state.focus}
            hasContent={hasValue}
            muitheme={this.context}
            value={value}
            onChangeText={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            textContentType={type}
            secureTextEntry={type === 'password'}
            onSubmitEditing={this.onSubmit}
            multiline={multiline}
            placeholder={this.state.focus ? placeholder : null}
            {...other}
          />
        </FieldContainer>
        <ErrorMessage muitheme={this.context}>
          {showError ? errorMessage : ''}
        </ErrorMessage>
      </Container>
    )
  }
}

export default turnIntoField(TextField)
