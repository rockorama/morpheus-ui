// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import styled, { css, keyframes } from 'styled-components'
import { Header, SubHeader } from '../styles.js'

export default class HeaderWithTextExample extends Component<{}> {
  render() {
    return (
      <View>
        <Header>Header With Text</Header>
        <SubHeader>sample subtext to display underneath</SubHeader>
      </View>
    )
  }
}
