// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from '@morpheus-ui/core'

type Props = {
  header: string,
  subhead?: string,
}

export default class HeaderExample extends Component<{}> {
  render() {
    if (this.props.subhead) {
      return (
        <View>
          <Header
            header="With Subhead"
            subhead="sample subhead to go with title"
          />
        </View>
      )
    } else {
      return (
        <View>
          <Header header="Normal" />
        </View>
      )
    }
  }
}
