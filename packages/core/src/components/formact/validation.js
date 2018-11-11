// @flow

import type { FieldValidateFunctionParams } from './types'

/* eslint-disable */
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/* eslint-enable */

export const EMAIL = (params: FieldValidateFunctionParams): string => {
  if (!params.value) {
    return ''
  }

  if (typeof params.value === 'string') {
    return EMAIL_REGEX.test(params.value)
      ? ''
      : params.errorMessages.invalidEmail
  }

  return params.errorMessages.invalidEmail
}

export const REQUIRED = (params: FieldValidateFunctionParams): string => {
  if (params.value) {
    return ''
  }

  const fieldName = params.name || 'Field'

  return params.errorMessages.requiredField.replace('$label', fieldName)
}
