//@flow

import React, { createContext, Component } from 'react'

import { BUTTON_THEME, TEXT_FIELD_THEME, TEXT_THEME } from '../themes'

export const DEFAULT_THEME = {
  Button: BUTTON_THEME,
  TextField: TEXT_FIELD_THEME,
  Text: TEXT_THEME,
  Grid: {
    default: {
      spacing: 15,
    },
  },
}

// Get a theme property and provide trace info so a developer can see where
// a particular property is coming from. Use `traceTheme={true}` on the
// component to show trace.
const getKeyTrace = (themeProps: Object, key: string, trace: string) => {
  if (themeProps && themeProps.hasOwnProperty(key) && !!themeProps[key]) {
    return { ...themeProps[key], trace: trace }
  } else {
    return {}
  }
}

export const getTheme = (
  componentName: string,
  props: Object,
  context: Object,
) => {
  const variants = Array.isArray(props.variant)
    ? props.variant
    : [props.variant]

  let theme = {
    ...getKeyTrace(DEFAULT_THEME[componentName], 'default', `root/default`),
    ...getKeyTrace(context[componentName], 'default', 'context/default'),
  }

  variants.forEach(key => {
    theme = {
      ...theme,
      ...(DEFAULT_THEME[componentName]
        ? getKeyTrace(
            DEFAULT_THEME[componentName],
            key,
            `${componentName}/${key}`,
          )
        : {}),
      ...(context[componentName]
        ? getKeyTrace(
            context[componentName],
            key,
            `context/${componentName}/${key}`,
          )
        : {}),
    }
  })

  if (props.traceTheme) {
    /*eslint-disable*/
    console.log('theme', theme)
    /*eslint-enable*/
  }

  return { ...theme, ...(props.theme || {}) }
}

const ThemeContext = createContext<Object>(DEFAULT_THEME)

const { Provider } = ThemeContext

type Props = {
  theme: Object,
  children: any,
}

const REPLACE_EXP = /([a-z])([A-Z])/g

const camelCaseToDash = (text: string): string => {
  return text.replace(REPLACE_EXP, '$1-$2').toLowerCase()
}

export const getPropertiesFromTheme = (theme: Object): string => {
  const keys = Object.keys(theme)
  const props = keys
    .filter(key => theme[key] !== 'initial' && theme[key] !== 'inherit')
    .map(key => `${camelCaseToDash(key)}: ${theme[key]};`)
    .join(' ')

  return props
}

export class ThemeProvider extends Component<Props> {
  render() {
    return <Provider value={this.props.theme}>{this.props.children}</Provider>
  }
}

export default ThemeContext
