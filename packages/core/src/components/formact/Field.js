// @flow

import React, { Component, type Node } from 'react'
import hoistStatics from 'hoist-non-react-statics'

import { Consumer } from './Form'

import { REQUIRED, EMAIL } from './validation'

import type {
  FieldName,
  FieldValue,
  FieldValidateFunction,
  DefaultErrorMessages,
  FormContext,
} from './types'

type Props = FormContext & {
  name: FieldName,
  defaultValue?: ?FieldValue,
  label?: string,
  required?: ?boolean,
  onChange?: ?(value: ?FieldValue) => void,
  validation?: ?FieldValidateFunction | ?Array<FieldValidateFunction>,
  type?: ?string,
  errorMessages: DefaultErrorMessages,
}

type State = {
  dirty: boolean,
}

class Field extends Component<Props, State> {
  static defaultProps = {
    errorMessages: {
      invalidEmail: 'Please provide a valid e-mail address.',
      requiredField: '$label is required.',
    },
  }

  state = {
    dirty: false,
  }

  componentDidMount() {
    this.props.name &&
      this.props.addField({
        name: this.props.name,
        value: this.props.defaultValue,
        validate: this.validate,
      })
  }

  componentWillUnmount() {
    this.props.removeField(this.props.name)
  }

  onChange = (fieldValue: ?FieldValue) => {
    this.props.name && this.props.valueChanged(this.props.name, fieldValue)

    if (this.props.onChange) {
      this.props.onChange(fieldValue)
    }
  }

  validate = (fieldValue: ?FieldValue, props: Props = this.props) => {
    let { validation, required, type } = props
    let errorMessage = ''

    if (!validation) {
      validation = []
    } else if (!Array.isArray(validation)) {
      validation = [validation]
    }

    if (required) {
      validation = [REQUIRED, ...validation]
    }

    if (type === 'email') {
      validation = [EMAIL, ...validation]
    }

    errorMessage = validation
      .map(fun =>
        fun({
          value: fieldValue,
          name: props.label || props.name,
          errorMessages: props.errorMessages,
        }),
      )
      .filter(m => m)
      .join(' ')

    return errorMessage
  }

  setDirty = () => {
    this.setState({
      dirty: true,
    })
  }

  render() {
    const {
      addField,
      removeField,
      errorMessages,
      valueChanged,
      render,
      ...other
    } = this.props
    const props = {
      ...other,
      onChange: this.onChange,
      setDirty: this.setDirty,
      ...this.state,
      fieldValue: this.props.values[this.props.name],
      errorMessage: this.props.errors[this.props.name],
    }

    return render(props)
  }
}

export default (Component: Node) => {
  return props => {
    const FinalComponent = (
      <Consumer>
        {(value: FormContext) => {
          return (
            <Field
              {...props}
              {...value}
              render={(fieldProps: FieldProps) => <Component {...fieldProps} />}
            />
          )
        }}
      </Consumer>
    )
    //
    // FinalComponent.displayName = `withFormContext(${Component.displayName ||
    //   Component.name})`
    // FinalComponent.WrappedComponent = Component

    return hoistStatics(FinalComponent, Component)
  }
}
