import React, { Component } from 'react'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import styled, { css } from 'styled-components/native'

type Props = {
  data: Array<Object>,
  props: boolean,
  theming: boolean,
}
const BorderRow = styled.View`
  border-bottom: 1px solid ${props => props.theme.blue};
  width: 100%;
  ${props =>
    props.last &&
    css`
      border-bottom: 0px;
    `}
`
export default class Table extends Component<Props> {
  render() {
    const { data, props, theming } = this.props
    return (
      <Row inner>
        <Column lg={12}>
          <Row size={12} inner>
            <Column size={props ? 2 : 3}>
              <Text variant="h3">{'name'}</Text>
            </Column>
            {props ? (
              <Column size={2}>
                <Text variant="h3">{'type'}</Text>
              </Column>
            ) : (
              <Column size={2}>
                <Text variant="h3">{'default'}</Text>
              </Column>
            )}
            {props && (
              <Column size={2}>
                <Text variant="h3">{'required'}</Text>
              </Column>
            )}
            <Column size={5}>
              <Text variant="h3">{'description'}</Text>
            </Column>
          </Row>
          {data.map((prop, index) => {
            return (
              <BorderRow last={index === data.length - 1}>
                <Row size={12} inner>
                  <Column size={props ? 2 : 3}>
                    <Text>{prop.name}</Text>
                  </Column>
                  {props ? (
                    <Column size={2}>
                      <Text>{prop.type}</Text>
                    </Column>
                  ) : (
                    <Column size={2}>
                      <Text>{prop.default}</Text>
                    </Column>
                  )}
                  {props && (
                    <Column size={2}>
                      <Text>{prop.required.toString()}</Text>
                    </Column>
                  )}
                  <Column size={6}>
                    <Text>{prop.description}</Text>
                  </Column>
                </Row>
              </BorderRow>
            )
          })}
        </Column>
      </Row>
    )
  }
}
