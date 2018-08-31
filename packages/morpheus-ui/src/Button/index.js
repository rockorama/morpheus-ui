// @flow

import React, { Component } from 'react'
import { Button as RNWButtom, StyleSheet } from 'react-native-web'

export default class Button extends Component<{}> {
	render() {
		const {
			accessibilityLabel,
			color,
			disabled,
			onPress,
			testID,
			title
		} = this.props

		return <RNWButtom />
	}
}

const styles = StyleSheet.create({})
