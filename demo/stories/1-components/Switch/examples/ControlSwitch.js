// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Switch } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#1a2d57',
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

type State = {
  myBool: boolean,
}

export default class ControlSwitchExample extends Component<{}, State> {
  state = {
    myBool: false,
  }

  copyState = () => {
    this.setState({ myBool: !this.state.myBool })
  }

  render() {
    return (
      <View style={styles.background}>
        <Switch onPress={this.copyState} />
        <Switch control={this.state.myBool} />
      </View>
    )
  }
}
