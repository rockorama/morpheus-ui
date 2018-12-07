//@flow

import React, { createContext, Component } from 'react'

import { BUTTON_THEME, TEXT_FIELD_THEME } from '../themes'

export const DEFAULT_THEME = {
  Button: BUTTON_THEME,
  TextField: TEXT_FIELD_THEME,
  Grid: {
    default: {
      spacing: 15,
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: 'Poppins',
  },
  spacing: {
    basic: 15,
    small: 5,
    large: 30,
  },
  borders: {
    width: 1,
    roundness: 5,
  },
  colors: {
    main: {
      primary: '#102043',
      secondary: '#D72323',
      error: '#D72323',
      alert: '#E51111',
      success: 'green',
      border: '#F9F9F9',
      text: '#232323',
      activeText: '#1F3464',
    },
    dark: {
      primary: 'black',
      secondary: 'red',
      error: 'red',
      alert: 'yellow',
      success: 'green',
    },
    light: {
      primary: 'gray',
      secondary: 'red',
      error: 'red',
      alert: 'yellow',
      success: 'green',
    },
  },
}

// Get a theme property and provide trace info so a developer can see where
// a particular property is coming from. Use `traceTheme={true}` on the
// component to show trace.
const getKeyTrace = (themeProps : Object, key: string, trace: string) => {
  if (themeProps.hasOwnProperty(key) && !!themeProps[key]) {
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
        ? getKeyTrace(DEFAULT_THEME[componentName], key, `${componentName}/${key}`)
        : {}),
      ...(context[componentName] 
        ? getKeyTrace(context[componentName], key, `context/${componentName}/${key}`)
        : {}),
    }
  })

  if (props.traceTheme) {
    console.log("theme", theme)
  }
  
  return { ...theme, ...(props.theme || {}) }
}

const ThemeContext = createContext(DEFAULT_THEME)

const { Provider } = ThemeContext

type Props = {
  theme: Object,
  children: any,
}

export class ThemeProvider extends Component<Props> {
  render() {
    return <Provider value={this.props.theme}>{this.props.children}</Provider>
  }
}

export default ThemeContext
