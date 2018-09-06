// @flow

import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web'

type Props = {
  title: string,
  whichStyle: string,
  onPress?: Function,
}

export default class NewButton extends Component<Props> {
  render() {
    const { title, whichStyle, onPress } = this.props

    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#DA1157',
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
})
