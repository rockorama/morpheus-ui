// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native-web'

export default class Card extends Component<{}> {
  render() {
    return <View {...this.props} style={[styles.container, styles.flexi]} />
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  flexi: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
