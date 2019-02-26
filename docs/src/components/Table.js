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
        <Column size={12}>
          <Row size={12} inner>
            <Column size={props ? 2 : 3} smHidden>
              <Text variant="h3">{'name'}</Text>
            </Column>
            {props ? (
              <Column size={2} smHidden>
                <Text variant="h3">{'type'}</Text>
              </Column>
            ) : (
              <Column size={2} smHidden>
                <Text variant="h3">{'default'}</Text>
              </Column>
            )}
            {props && (
              <Column size={2} smHidden>
                <Text variant="h3">{'required'}</Text>
              </Column>
            )}
            <Column size={5} smHidden>
              <Text variant="h3">{'description'}</Text>
            </Column>
          </Row>
          {data.map((prop, index) => {
            return (
              <BorderRow last={index === data.length - 1} key={index}>
                <Row size={12} inner>
                  <Column sm={6} lgHidden mdHidden>
                    <Text variant="bold">{'name:'}</Text>
                  </Column>
                  <Column sm={6} lg={props ? 2 : 3} md={props ? 2 : 3}>
                    <Text>{prop.name}</Text>
                  </Column>
                  {props ? (
                    <>
                      <Column sm={6} lgHidden mdHidden>
                        <Text variant="bold">{'type:'}</Text>
                      </Column>
                      <Column lg={2} md={2} sm={6}>
                        <Text>{prop.type}</Text>
                      </Column>
                    </>
                  ) : (
                    <>
                      <Column sm={6} lgHidden mdHidden>
                        <Text variant="bold">{'default:'}</Text>
                      </Column>
                      <Column lg={2} md={2} sm={6}>
                        <Text>{prop.default}</Text>
                      </Column>
                    </>
                  )}
                  {props && (
                    <>
                      <Column sm={6} lgHidden mdHidden>
                        <Text variant="bold">{'required:'}</Text>
                      </Column>
                      <Column lg={2} md={2} sm={6}>
                        <Text>{prop.required.toString()}</Text>
                      </Column>
                    </>
                  )}
                  <Column sm={6} lgHidden mdHidden>
                    <Text variant="bold">{'description:'}</Text>
                  </Column>
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
