import React, { Component } from 'react'
import { Text, Row, Column } from '@morpheus-ui/core'

export default class NormalTextExample extends Component {
  render() {
    return (
      <>
        <Row size={1}>
          <Column>
            <Text>Hello World </Text>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Text variant="bold">Hello Bold</Text>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Text variant="italic">Hello Italic</Text>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Text italic uppercase size={40} color="red">
              Hello Styles From Props
            </Text>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Text variant="h1">Hello Title H1</Text>
          </Column>
        </Row>
        <Row size={1}>
          <Column>
            <Text variant="h2">Hello Title H2</Text>
          </Column>
        </Row>
      </>
    )
  }
}
