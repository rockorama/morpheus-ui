// @flow

import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web'
import COLORS from '../colors'

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
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_RED,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  redText: {
    color: COLORS.PRIMARY_RED,
  },
  disabled: {
    backgroundColor: COLORS.LIGHTEST_RED,
  },
  outline: {
    borderColor: COLORS.PRIMARY_RED,
    borderWidth: 2,
    backgroundColor: COLORS.TRANSPARENT_WHITE,
  },
})
