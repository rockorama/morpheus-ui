// @flow

import React, { Component } from 'react'
import { Button as RNWButtom, StyleSheet } from 'react-native-web'

export default class Button extends Component<{}> {
	render() {
		return <RNWButtom {...this.props} />
	}
}

const styles = StyleSheet.create({})
