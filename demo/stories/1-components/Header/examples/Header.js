// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { Header, SubHeader } from '../styles.js'

type Props = {
  subhead: boolean,
}

export default class HeaderExample extends Component<Props> {
  render() {
    if (this.props.subhead) {
      return (
        <View>
          <Header>Header With Text</Header>
          <SubHeader>{this.props.subhead}</SubHeader>
        </View>
      )
    }
    return (
      <View>
        <Header>Normal Header</Header>
      </View>
    )
  }
}
