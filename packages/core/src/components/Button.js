// @flow

import React, { Component } from 'react'
<<<<<<< HEAD
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web'

type Props = {
  title: string,
  disabled?: boolean,
  customStyle?: number | Array<number | Object> | Object,
  outlineStyle?: boolean,
  onPress?: Function,
}

export default class Button extends Component<Props> {
  render() {
    const {
      title,
      disabled,
      outlineStyle,
      customStyle,
      textStyle,
      onPress,
    } = this.props

    const containerStyles = [styles.container]
    containerStyles.push(styles.button)
    const textStyles = [styles.text]

    if (disabled) {
      containerStyles.push(styles.disabled)
    }

    if (outlineStyle) {
      containerStyles.push(styles.outline)
      textStyles.push(styles.redText)
    }

    if (customStyle) {
      containerStyles.push(customStyle)
    }

    if (textStyle) {
      textStyles.push(textStyle)
    }

    return (
      <TouchableOpacity
        style={containerStyles}
        disabled={disabled}
        onPress={onPress}>
        <Text style={textStyles}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    backgroundColor: '#fff',
  },
})
=======
import { Button as RNWButtom } from 'react-native-web'

type Props = {}

export default class Button extends Component<Props> {
  render() {
    return <RNWButtom {...this.props} />
  }
}
>>>>>>> 4079fb18c4d298c15d4df89cbf10a267722fe748
