// @flow

import React, { Component } from 'react'
import { Button as RNWButton, StyleSheet } from 'react-native-web'

export default class Button extends Component<{}> {
  render() {
    return <RNWButton {...this.props} />
  }
}

const styles = StyleSheet.create({})
