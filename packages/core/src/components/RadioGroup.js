// @flow

import React, { Component, createContext } from 'react'
import { turnIntoField, type FieldProps } from '@morpheus-ui/forms'
import Theme, { DEFAULT_THEME, getTheme } from './ThemeProvider'

type Props = FieldProps & {
  value?: ?string,
  defaultValue?: ?string,
  children?: ?any,
}

type State = {
  value: ?any,
}

type ContextType = {
  onChange: (props: Object) => Object,
  value?: ?any,
  onChange: (value?: ?string) => void,
}

export const RadioGroupContext = createContext<ContextType>({
  getTheme: () => {
    return DEFAULT_THEME.Radio.default
  },
  onChange: () => {},
})

export class RadioGroupComponent extends Component<Props, State> {
  static contextType = Theme

  constructor(props: Props) {
    super(props)

    this.state = {
      value: props.defaultValue,
    }
  }

  getValue() {
    const { inForm, defaultValue, value, fieldValue } = this.props

    if (inForm) {
      return fieldValue != null ? fieldValue : defaultValue || null
    }

    if (value != null) {
      return value || defaultValue || null
    }

    return this.state.value
  }

  onChangeValue = (value: any) => {
    this.props.onChange && this.props.onChange(value)

    if (!this.props.inForm) {
      this.setState({
        value: value,
      })
    }
  }

  getTheme = (props: Object) => getTheme('Radio', props, this.context)

  render() {
    const value = this.getValue()

    return (
      <RadioGroupContext.Provider
        value={{
          value,
          getTheme: this.getTheme,
          onChange: this.onChangeValue,
        }}>
        {this.props.children}
      </RadioGroupContext.Provider>
    )
  }
}

export default turnIntoField(RadioGroupComponent)
