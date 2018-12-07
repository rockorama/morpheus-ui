import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column } from '@morpheus-ui/core'
import { CircleArrowRight, User, UserFilled } from '@morpheus-ui/icons'

export default class NormalButtonExample extends Component {
  render() {
    return (
      <View>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Normal"
              Icon={CircleArrowRight}
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Small Button"
              Icon={User}
              HoverIcon={UserFilled}
              variant="small"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Large Button"
              Icon={User}
              HoverIcon={UserFilled}
              variant="large"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Disabled"
              Icon={User}
              HoverIcon={UserFilled}
              disabled
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Icon Top"
              Icon={User}
              HoverIcon={UserFilled}
              variant="icon-top"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="No Border"
              Icon={CircleArrowRight}
              variant="no-border"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Hover Shadow"
              Icon={CircleArrowRight}
              variant={['no-border', 'hover-shadow']}
            />
          </Column>
        </Row>
      </View>
    )
  }
}
