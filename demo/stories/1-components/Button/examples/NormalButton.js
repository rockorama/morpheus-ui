// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column } from '@morpheus-ui/core'
import { CircleArrowRight, User, UserFilled } from '@morpheus-ui/icons'

export default class NormalButtonExample extends Component<{}> {
  render() {
    return (
      <View>
        <Row size={2}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="NORMAL BUTTON"
              Icon={CircleArrowRight}
              // backgroundColor="yellow"
              // backgroundHoverColor="red"
              iconPosition="right"
              // titleColor="red"
              // titleHoverColor="blue"
              // iconColor="red"
              // iconHoverColor="blue"
              // noBorder
              // borderColor="red"
              // borderHoverColor="blue"
              // hoverShadow
            />
          </Column>

          <Column>
            <Button
              onPress={action('clicked')}
              title="NORMAL BUTTON"
              Icon={User}
              HoverIcon={UserFilled}
              iconSize={{ width: 60, height: 60 }}
              iconPosition="top"
              iconColor="red"
              titleHoverColor="red"
            />
          </Column>
        </Row>
      </View>
    )
  }
}
