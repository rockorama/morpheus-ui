// @flow

import React, { Component, createContext, type Node } from 'react'
import { keys, findIndex } from 'lodash'

import type {
  FieldName,
  FieldValue,
  FormChangePayload,
  FormSubmitPayload,
  FormContext,
  AddFieldParams,
} from './types'

/* eslint-disable */
const DEFAULT_CONTEXT: FormContext = {
  addField: ({ name, value }: AddFieldParams) => {},
  removeField: (name: FieldName) => {},
  valueChanged: (name: FieldName, value: FieldValue) => {},
  isSubmitted: () => {
    return false
  },
  submitForm: () => {},
  values: {},
  errors: {},
}
/* eslint-enable */
export const { Provider, Consumer } = createContext<FormContext>(
  DEFAULT_CONTEXT,
)

type Props = {
  onSubmit?: (payload: FormSubmitPayload) => void,
  onChange?: (payload: FormChangePayload) => void,
  children: Node,
}

type State = {
  submitted: boolean,
  values: Object,
  errors: Object,
}

export default class Form extends Component<Props, State> {
  state = {
    submitted: false,
    values: {},
    errors: {},
  }

  fields: Object = {}
  errors: Object = {}
  validators: Object = {}

  addField = ({
    name,
    value,
    validate,
  }: {
    name: FieldName,
    value: FieldValue,
    validate?: (value: FieldValue) => string,
  }) => {
    this.fields[name] = value
    this.validators[name] = {
      validate,
    }
    this.validate()
    this.triggerOnChange(name)
  }

  removeField = (name: FieldName) => {
    const newFields = {}
    const newErrors = {}
    keys(this.fields).forEach(field => {
      if (name !== field) {
        newFields[field] = this.fields[field]
        newErrors[field] = this.errors[field]
      }
    })
    this.fields = newFields
    this.errors = newErrors
    this.validators[name] = null
    this.validate()
    this.triggerOnChange(name)
  }

  checkSubmitted = () => {
    return this.state.submitted
  }

  triggerOnChange = (name: FieldName) => {
    const { onChange } = this.props
    this.setState({
      values: this.fields,
      errors: this.errors,
    })
    if (onChange) {
      onChange({
        fields: this.fields,
        errors: this.errors,
        lastChanged: name,
        valid: this.isValid(),
      })
    }
  }

  valueChanged = (name: FieldName, value: FieldValue) => {
    if (name) {
      this.fields[name] = value

      this.validate()
      this.triggerOnChange(name)
    }
  }

  validate = () => {
    keys(this.fields).forEach(field => {
      this.errors[field] = this.validateField(field)
    })
  }

  validateField = (field: FieldName) => {
    const { validate } = this.validators[field]
    if (!validate || typeof validate !== `function`) {
      return ''
    }
    return validate(this.fields[field])
  }

  isValid = () => {
    const errorKeys = keys(this.errors)
    const errors = findIndex(errorKeys, field => this.errors[field])
    return errors < 0
  }

  onSubmit = () => {
    const valid = this.isValid()
    this.setState({
      submitted: true,
    })

    if (this.props.onSubmit) {
      this.props.onSubmit({
        valid,
        fields: this.fields,
        errors: this.errors,
      })
    }
  }

  render() {
    const { errors, values } = this.state

    return (
      <Provider
        value={{
          addField: this.addField,
          removeField: this.removeField,
          valueChanged: this.valueChanged,
          isSubmitted: this.checkSubmitted,
          submitForm: this.onSubmit,
          inForm: true,
          values,
          errors,
        }}>
        {this.props.children}
      </Provider>
    )
  }
}
