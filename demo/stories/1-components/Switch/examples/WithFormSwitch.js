// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Switch } from '@morpheus-ui/core'
import { Form } from '@morpheus-ui/forms'

const styles = {
  background: {
    backgroundColor: '#1a2d57',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class WithFormSwitch extends Component<{}> {
  render() {
    return (
      <View style={styles.background}>
        <Form>
          <Switch onChange={action('clicked')} name="switch" />
        </Form>
      </View>
    )
  }
}
