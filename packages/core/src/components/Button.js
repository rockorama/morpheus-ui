// @flow

import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web'

type Props = {
  title: string,
  disabled?: boolean,
  buttonStyle?: number | Array<number | Object> | Object,
  textStyle?: number | Array<number | Object> | Object,
  outlineStyle?: boolean,
  onPress?: Function,
}

export default class Button extends Component<Props> {
  render() {
    const {
      title,
      disabled,
      outlineStyle,
      buttonStyle,
      textStyle,
      onPress,
    } = this.props

    const buttonStyles = [styles.button]
    const textStyles = [styles.text]

    if (disabled) {
      buttonStyles.push(styles.disabled)
    }

    if (outlineStyle) {
      buttonStyles.push(styles.outline)
      textStyles.push(styles.redText)
    }

    if (buttonStyle) {
      buttonStyles.push(buttonStyle)
    }

    if (textStyle) {
      textStyles.push(textStyle)
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        disabled={disabled}
        onPress={onPress}>
        <Text style={textStyles}>{this.props.title}</Text>
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
  redText: {
    color: '#DA1157',
  },
  disabled: {
    backgroundColor: '#ffc1dc',
  },
  outline: {
    borderColor: '#DA1157',
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,0,0)',
  },
})
