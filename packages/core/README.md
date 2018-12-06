<h1 align="center">Morpheus-UI</h1>

<div align="center">

[React](http://facebook.github.io/react/) components that implement [Mainframe Designs](https://mainframe.com).

[![npm package](https://img.shields.io/npm/v/@morpheus-ui/core/latest.svg)](https://www.npmjs.com/package/@morpheus-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@morpheus-ui/core.svg)](https://www.npmjs.com/package/@morpheus-ui/core)
[![CircleCI](https://circleci.com/gh/MainframeHQ/morpheus-ui.svg?style=svg)](https://circleci.com/gh/MainframeHQ/morpheus-ui)
[![Coverage Status](https://img.shields.io/codecov/c/github/MainframeHQ/morpheus-ui/master.svg)](https://codecov.io/gh/MainframeHQ/morpheus-ui/branch/master)

</div>

## Installation

Morpheus-UI is available as an [npm package](https://www.npmjs.com/package/@morpheus-ui/core).

You'll need to install `@morpheus-ui/fonts` and `react-native-web` as dependencies

```sh
// with npm
npm install react-native-web @morpheus-ui/fonts @morpheus-ui/core

// with yarn
yarn add react-native-web @morpheus-ui/fonts @morpheus-ui/core
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@morpheus-ui/core'

//Import the fonts in your root component
import '@morpheus-ui/fonts'

function App() {
  return <Button title="Hello World" />
}

ReactDOM.render(<App />, document.querySelector('#app'))
```

## Documentation

TO DO

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
