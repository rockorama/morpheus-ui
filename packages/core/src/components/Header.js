// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import styled from 'styled-components'

const Header = styled.text`
  font-size: 5em;
  text-align: left;
  color: #1f3464;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`

const SubHeader = styled.text`
  font-size: 1.5em;
  text-align: left;
  color: #1f3464;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  margin-top: 0;
`

type Props = {
  header: string,
  subhead?: string,
}

export default class HeaderExample extends Component<Props> {
  render() {
    if (this.props.subhead) {
      return (
        <View>
          <Header>{this.props.header}</Header>
          <SubHeader>{this.props.subhead}</SubHeader>
        </View>
      )
    } else {
      return (
        <View>
          <Header>{this.props.header}</Header>
        </View>
      )
    }
  }
}
