// @flow

import React, { Component } from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import styled, { css, keyframes } from 'styled-components'
import { Header } from '../styles.js'

export default class NormalHeaderExample extends Component<{}> {
  render() {
    return (
      <View>
        <Header>Normal Header</Header>
      </View>
    )
  }
}
