// @flow

import React, { Component } from 'react'
import { Button as RNWButtom } from 'react-native-web'

type Props = {}

export default class Button extends Component<Props> {
  render() {
    return <RNWButtom {...this.props} />
  }
}
