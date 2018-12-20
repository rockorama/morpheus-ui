// @flow

import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Text } from '@morpheus-ui/core'
import styled from 'styled-components/native'

const Container = styled.View`
  padding: ${props => props.theme.spacing}px;
  width: 300px;
  background: ${props => props.theme.leftNavColor};
`

const ListContainer = styled.ScrollView`
  margin-top: ${props => props.theme.spacing}px;
  flex: 1;
`

type Props = {
  sllSitePage: Object,
}

class LeftNav extends Component<Props> {
  render() {
    // console.log(this.props)
    return (
      <Container>
        <Text variant="h2">Morpheus-UI</Text>
        <ListContainer>
          <Text>Menu items</Text>
        </ListContainer>
      </Container>
    )
  }
}

const QueryRenderer = () => (
  <StaticQuery query={query} render={data => <LeftNav {...data} />} />
)

const query = graphql`
  query SiteTitleQuery {
    allSitePage {
      edges {
        node {
          path
          fields {
            slug
          }
        }
      }
    }
  }
`

export default QueryRenderer
