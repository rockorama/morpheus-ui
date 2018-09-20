// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import styled from 'styled-components'

type Props = {
  header: string,
  subhead?: string,
}

const HeaderStyle = styled.text`
  font-size: 5em;
  text-align: left;
  color: #1f3464;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`

const SubHeaderStyle = styled.text`
  font-size: 1.5em;
  text-align: left;
  color: #1f3464;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  margin-top: 0;
`

export default class Header extends Component<Props> {
  render() {
    if (this.props.subhead) {
      return (
        <View>
          <HeaderStyle>{this.props.header}</HeaderStyle>
          <SubHeaderStyle>{this.props.subhead}</SubHeaderStyle>
        </View>
      )
    } else {
      return (
        <View>
          <HeaderStyle>{this.props.header}</HeaderStyle>
        </View>
      )
    }
  }
}
