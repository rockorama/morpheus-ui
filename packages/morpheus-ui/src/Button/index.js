// @flow

import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native-web'

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

		return <Button />
	}
}

const styles = StyleSheet.create({})
