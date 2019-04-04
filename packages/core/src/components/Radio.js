// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'

import memoize from 'memoize-one'

import transition from '../transitionClass'
import { RadioGroupContext } from './RadioGroup'

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

const RadioContainer = styled.View`
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
const CircleContainer = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  width: ${props => props.muitheme.circleSize};
  height: ${props => props.muitheme.circleSize};
  padding: ${props => props.muitheme.circlePadding};

    ${props =>
      props.value &&
      props.muitheme.circleCheckedShadow &&
      `
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.1;
    shadow-radius: 8;
  `}

  ${props => props.value && `opacity: 1;`}

  ${props => props.disabled && `color: ${props.muitheme.circleDisabledColor};`}
`

const Circle = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.muitheme.circleColor};
  border-radius: ${props => props.muitheme.containerBorderRadius};
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

type Props = {
  label?: string,
  checkedLabel?: string,
  value: string,
  disabled: boolean,
  variant?: string | Array<string>,
}

export default class RadioComponent extends Component<Props> {
  static contextType = RadioGroupContext

  getRadioTheme = memoize((props: Props) => this.context.getTheme(props))

  onPress = () => {
    this.context.onChange(this.props.value)
  }

  render() {
    const muitheme: Object = this.getRadioTheme(this.props)
    const value = this.props.value === this.context.value
    return (
      <OutterContainer>
        <Container>
          <Touchable disabled={this.props.disabled} onPress={this.onPress}>
            <InnerContainer muitheme={muitheme}>
              <RadioContainer
                disabled={this.props.disabled}
                muitheme={muitheme}
                className={transition}
                value={value}>
                <CircleContainer
                  disabled={this.props.disabled}
                  muitheme={muitheme}
                  className={transition}
                  value={value}>
                  <Circle muitheme={muitheme} />
                </CircleContainer>
              </RadioContainer>
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
        </Container>
      </OutterContainer>
    )
  }
}
