// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'

import memoize from 'memoize-one'

import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'

import transition from '../transitionClass'
import Theme, { getTheme } from './ThemeProvider'

const SvgCheckSymbol = props => (
  <svg width="11" height="7" viewBox="0 0 11 7" {...props}>
    <path
      d="M9.422.146L4 5.568.853 2.422a.5.5 0 0 0-.707.707l3.5 3.5a.498.498 0 0 0 .707 0L10.13.853a.5.5 0 0 0-.707-.707z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const OutterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const Container = styled.View`
  flex-direction: column;
`
const Touchable = styled.TouchableWithoutFeedback``

const InnerContainer = styled.View`
  margin: ${props => props.muitheme.margin};
  flex-direction: row;
  align-items: center;
`

const CheckboxContainer = styled.View`
  background-color: ${props => props.muitheme.backgroundColor};
  padding: 1px;
  border-width: ${props => props.muitheme.containerBorderWidth};
  border-color: ${props => props.muitheme.containerBorderColor};
  border-style: solid;
  border-radius: ${props => props.muitheme.containerBorderRadius};
  align-items: center;
  justify-content: center;

  
  ${props =>
    !props.value &&
    props.muitheme.containerShadow &&
    `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

    ${props =>
      props.value &&
      props.muitheme.containerCheckedShadow &&
      `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

  ${props =>
    props.value &&
    `background-color: ${props.muitheme.backgroundCheckedColor};
     border-width: ${props.muitheme.containerCheckedBorderWidth};
     border-color: ${props.muitheme.containerCheckedBorderColor};
    `}

  ${props =>
    props.disabled &&
    `background-color: ${props.muitheme.backgroundDisabledColor};`}
`
const CheckSymbol = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  width: ${props => props.muitheme.checkSymbolSize};
  height: ${props => props.muitheme.checkSymbolSize};
  color: ${props => props.muitheme.checkSymbolColor};


    ${props =>
      props.value &&
      props.muitheme.checkSymbolCheckedShadow &&
      `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

  ${props => props.value && `opacity: 1;`}

  ${props =>
    props.disabled && `color: ${props.muitheme.checkSymbolDisabledColor};`}
`

const Label = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  margin-left: ${props => props.muitheme.labelMargin};
  font-size: ${props => props.muitheme.fontSize};
  font-weight: ${props => props.muitheme.fontWeight};
  font-style: ${props => props.muitheme.fontStyle};
  color: ${props => props.muitheme.labelColor};

  ${props => props.value && `color: ${props.muitheme.labelCheckedColor};`}

  ${props => props.disabled && `color: ${props.muitheme.labelDisabledColor};`}
`

const ErrorMessage = styled.Text`
  font-family: ${props => props.muitheme.fontFamily};
  font-size: ${props => props.muitheme.errorFontSize};
  color: ${props => props.muitheme.errorColor};
  padding: 2px 0;
  margin-bottom: 2px;
`

type Props = FieldProps & {
  checkedLabel?: string,
  value?: ?boolean,
  defaultValue?: ?boolean,
  disabled: boolean,
  variant?: string | Array<string>,
}

type State = {
  value: boolean,
}

export class CheckboxComponent extends Component<Props, State> {
  static contextType = Theme

  constructor(props: Props) {
    super(props)

    this.state = {
      value: !!props.defaultValue || false,
    }
  }

  getCheckboxTheme = memoize((props: Props, context: Object) =>
    getTheme('Checkbox', props, context),
  )

  onPress = () => {
    if (!this.props.disabled) {
      const value = this.getValue()

      this.props.onChange && this.props.onChange(!value)
      !this.props.dirty && this.props.setDirty && this.props.setDirty()

      if (!this.props.inForm) {
        this.setState({
          value: !value,
        })
      }
    }
  }

  getValue() {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return fieldValue != null ? fieldValue : defaultValue || false
    }

    if (value != null) {
      return value || defaultValue || false
    }

    return this.state.value
  }

  render() {
    const muitheme: Object = this.getCheckboxTheme(this.props, this.context)
    const value = this.getValue()
    const showError =
      (this.props.isSubmitted() || this.props.dirty) &&
      !!this.props.errorMessage

    return (
      <OutterContainer>
        <Container>
          <Touchable disabled={this.props.disabled} onPress={this.onPress}>
            <InnerContainer muitheme={muitheme}>
              <CheckboxContainer
                disabled={this.props.disabled}
                muitheme={muitheme}
                className={transition}
                value={value}>
                <CheckSymbol
                  disabled={this.props.disabled}
                  muitheme={muitheme}
                  className={transition}
                  value={value}>
                  <SvgCheckSymbol />
                </CheckSymbol>
              </CheckboxContainer>
              {(this.props.checkedLabel || this.props.label) && (
                <Label
                  disabled={this.props.disabled}
                  muitheme={muitheme}
                  className={transition}
                  value={value}>
                  {value
                    ? this.props.checkedLabel || this.props.label
                    : this.props.label}
                </Label>
              )}
            </InnerContainer>
          </Touchable>
          <ErrorMessage muitheme={muitheme}>
            {showError ? this.props.errorMessage : ''}
          </ErrorMessage>
        </Container>
      </OutterContainer>
    )
  }
}

export default turnIntoField(CheckboxComponent)
