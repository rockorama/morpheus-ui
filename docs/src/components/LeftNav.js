// @flow

import React, { Component } from 'react'
import { StaticQuery, graphql, Link, navigateTo } from 'gatsby'
import { Text } from '@morpheus-ui/core'
import styled from 'styled-components/native'

const Container = styled.View`
  padding: ${props => props.theme.spacing}px;
  width: 250px;
  background: ${props => props.theme.leftNavColor};
`

const ListContainer = styled.ScrollView`
  margin-top: ${props => props.theme.spacing}px;
  flex: 1;
`

const Button = styled.TouchableOpacity`
  padding: 5px 0;
  margin: 5px 0;
  border-bottom: 1px solid ${props => props.theme.linkColor};
`

const LinkText = styled.Text`
  color: ${props => props.theme.linkColor};
  font-size: 18px;
`

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

type Props = {
  allSitePage: Object,
}

class LeftNav extends Component<Props> {
  render() {
    const regex = /\/(\w+)\/(\w+)/
    let lastMatch = ''
    return (
      <Container>
        <Text variant="h2">Morpheus-UI</Text>
        <ListContainer>
          <ButtonContainer>
            {this.props.allSitePage.edges.map(edge => {
              const match = edge.node.path.match(regex)
              if (match) {
                const renderHeader = match[1] !== lastMatch && (
                  <Text variant={'h3'}>{match[1]}</Text>
                )
                lastMatch = match[1]
                return (
                  <>
                    {renderHeader}
                    <Button
                      onPress={() => navigateTo(edge.node.path)}
                      variant={'grayHover'}>
                      <LinkText>{match[2]}</LinkText>
                    </Button>
                  </>
                )
              }
            })}
          </ButtonContainer>
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
