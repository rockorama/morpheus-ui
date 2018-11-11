// @flow

export type FieldName = string

export type FieldValue =
  | typeof undefined
  | null
  | string
  | boolean
  | number
  | Object
  | Date

export type DefaultErrorMessages = {
  invalidEmail: string,
  requiredField: string,
}

export type FieldValidateFunctionParams = {
  value?: FieldValue,
  name?: FieldName,
  errorMessages: DefaultErrorMessages,
}

export type FieldValidateFunction = (
  params: FieldValidateFunctionParams,
) => string

export type FormSubmitPayload = {
  valid: boolean,
  fields: Object,
  errors: Object,
}

export type FormChangePayload = FormSubmitPayload & {
  lastChanged: FieldName,
}

export type FormContext = {
  addField: ({
    name: FieldName,
    value: FieldValue,
    validate?: FieldValidateFunctionParams,
  }) => void,
  removeField: (name: FieldName) => void,
  valueChanged: (name: FieldName, value: FieldValue) => void,
  isSubmitted: () => boolean,
  submitForm: () => void,
  values: Object,
  errors: Object,
}
