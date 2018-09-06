// @flow

import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native-web'

const BASIC_SPACING = 10
const INPUT_HEIGHT = 46

type Props = {
  title: string,
  disabled?: boolean,
  outlineStyle?: boolean,
  style?: number | Array<number | Object> | Object,
  textStyle?: number | Array<number | Object> | Object,
  onPress?: Function,
}

export default class Button extends Component<Props> {
  render() {
    const {
      disabled,
      onPress,
      title,
      outlineStyle,
      style,
      textStyle,
    } = this.props

    const containerStyles = [styles.container]
    const textStyles = [styles.text]

    if (outlineStyle) {
      containerStyles.push(styles.outlineContainer)
      textStyles.push(styles.redText)
    }

    if (disabled) {
      containerStyles.push(styles.disabledContainer)
    }

    if (style) {
      containerStyles.push(style)
    }

    if (textStyle) {
      textStyles.push(textStyle)
    }

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={containerStyles}>
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: INPUT_HEIGHT,
    backgroundColor: '#DA1157',
    borderRadius: INPUT_HEIGHT / 2,
    flex: 1,
    marginVertical: BASIC_SPACING,
    paddingHorizontal: BASIC_SPACING * 3,
    justifyContent: 'center',
    flexShrink: 0,
  },
  outlineContainer: {
    borderWidth: 2,
    borderColor: '#DA1157',
    backgroundColor: 'rgba(0,0,0,0)',
    height: INPUT_HEIGHT + 4,
    borderRadius: (INPUT_HEIGHT + 3) / 2,
  },
  disabledContainer: {
    backgroundColor: '#ffc1dc',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  redText: {
    color: '#DA1157',
  },
})
