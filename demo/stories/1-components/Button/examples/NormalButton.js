import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'

export default class NormalButtonExample extends Component {
  state = {
    large: false,
  }

  render() {
    return (
      <View>
        <Row size={1}>
          <Column>
            <Button
              onPress={() => {
                this.setState({ large: !this.state.large })
                console.log(!this.state.large)
              }}
              title="Normal"
              Icon={CircleArrowRight}
              variant={this.state.large ? 'large' : null}
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Small Button"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="small"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Large Button"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              variant="large"
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Disabled"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
              disabled
            />
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Button
              onPress={action('clicked')}
              title="Icon Top"
              Icon={WalletsMd}
              HoverIcon={WalletsMdFilled}
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
