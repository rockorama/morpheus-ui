import React, { Component } from 'react'
import { Tooltip, Row, Column, Text } from '@morpheus-ui/core'

export default class NormalTooltipExample extends Component {
  render() {
    return (
      <>
        <Row size={1}>
          <Column>
            <Tooltip>
              <Text>Hello World</Text>
            </Tooltip>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Tooltip top>
              <Text>Hello World on Top</Text>
            </Tooltip>
          </Column>
        </Row>
      </>
    )
  }
}
