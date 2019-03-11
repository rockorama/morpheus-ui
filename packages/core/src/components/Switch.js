// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'

import memoize from 'memoize-one'

import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'

import transition from '../transitionClass'
import Theme, { getTheme } from './ThemeProvider'

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
const SwitchContainer = styled.View`
  background-color: ${props => props.muitheme.backgroundColor};
  width: ${props => props.muitheme.ballSize * 2 + 4};
  padding: 2px;
  border-radius: ${props => props.muitheme.containerRadius};

  ${props =>
    props.value &&
    `background-color: ${props.muitheme.backgroundCheckedColor};`}

  ${props =>
    props.disabled &&
    `background-color: ${props.muitheme.backgroundDisabledColor};`}
`
const Ball = styled.View`
  width: ${props => props.muitheme.ballSize};
  height: ${props => props.muitheme.ballSize};
  margin-left: 0;
  background-color: ${props => props.muitheme.ballColor};
  border-radius: ${props => props.muitheme.ballRadius};
  ${props =>
    !props.value &&
    props.muitheme.ballShadow &&
    `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

    ${props =>
      props.value &&
      props.muitheme.ballCheckedShadow &&
      `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

  ${props =>
    props.value &&
    `margin-left: ${props.muitheme.ballSize};
    background-color: ${props.muitheme.ballCheckedColor};
    `}

    ${props =>
      props.disabled &&
      `background-color: ${props.muitheme.ballDisabledColor};`}
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

export class SwitchComponent extends Component<Props, State> {
  static contextType = Theme

  constructor(props: Props) {
    super(props)

    this.state = {
      value: !!props.defaultValue || false,
    }
  }

  getSwitchTheme = memoize((props: Props, context: Object) =>
    getTheme('Switch', props, context),
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
    const muitheme: Object = this.getSwitchTheme(this.props, this.context)
    const value = this.getValue()
    const showError =
      (this.props.isSubmitted() || this.props.dirty) &&
      !!this.props.errorMessage

    return (
      <OutterContainer>
        <Container>
          <Touchable disabled={this.props.disabled} onPress={this.onPress}>
            <InnerContainer muitheme={muitheme}>
              <SwitchContainer
                disabled={this.props.disabled}
                muitheme={muitheme}
                className={transition}
                value={value}>
                <Ball
                  disabled={this.props.disabled}
                  muitheme={muitheme}
                  className={transition}
                  value={value}
                />
              </SwitchContainer>
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

export default turnIntoField(SwitchComponent)
