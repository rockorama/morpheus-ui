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
  values?: Object,
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

export type AddFieldParams = {
  name: FieldName,
  value: FieldValue,
  validate?: (value: FieldValue) => string,
}

export type FormContext = {
  addField: (params: AddFieldParams) => void,
  removeField: (name: FieldName) => void,
  valueChanged: (name: FieldName, value: FieldValue) => void,
  isSubmitted: () => boolean,
  submitForm: () => void,
  values: Object,
  errors: Object,
  inForm?: boolean,
}

export type PreFieldProps = {
  name: FieldName,
  value?: ?FieldValue,
  defaultValue?: ?FieldValue,
  label?: string,
  required?: ?boolean,
  onChange?: ?(value: ?FieldValue) => void,
  validation?: ?FieldValidateFunction | ?Array<FieldValidateFunction>,
  type?: ?string,
  errorMessages: DefaultErrorMessages,
  inForm?: boolean,
  formValid: boolean,
  renderIfValid?: FieldName | Array<FieldName>,
}

export type FieldProps = PreFieldProps & {
  dirty: boolean,
  fieldValue: ?FieldValue,
  errorMessage: ?string,
  values: Object,
  errors: Object,
  setDirty: () => void,
  isSubmitted: () => boolean,
  submitForm: () => void,
}
