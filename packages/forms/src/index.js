// @flow

export { default as Form } from './Form'
export { default as turnIntoField } from './Field'
export * from './types'

export const removeFieldProps = (props: Object) => {
  const {
    name,
    defaultValue,
    label,
    required,
    onChange,
    validation,
    type,
    errorMessages,
    dirty,
    fieldValue,
    errorMessage,
    values,
    errors,
    setDirty,
    isSubmitted,
    submitForm,
    ...other
  } = props
  return other
}

export const getFieldProps = (props: Object) => {
  const {
    name,
    defaultValue,
    label,
    required,
    onChange,
    validation,
    type,
    errorMessages,
    dirty,
    fieldValue,
    errorMessage,
    values,
    errors,
    setDirty,
    isSubmitted,
    submitForm,
  } = props

  return {
    name,
    defaultValue,
    label,
    required,
    onChange,
    validation,
    type,
    errorMessages,
    dirty,
    fieldValue,
    errorMessage,
    values,
    errors,
    setDirty,
    isSubmitted,
    submitForm,
  }
}
