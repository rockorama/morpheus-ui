// @flow

import React, { Component } from 'react'
import { StaticQuery, graphql, Link, navigate } from 'gatsby'
import { Text } from '@morpheus-ui/core'
import styled from 'styled-components/native'

const H1Container = styled.View`
  padding-top: 30px;
`

const Container = styled.View`
  padding: 30px;
  width: 320px;
  background: ${props => props.theme.leftNavColor};
`

const ListContainer = styled.ScrollView`
  margin-top: ${props => props.theme.spacing}px;
  flex: 1;
`

const Button = styled.TouchableOpacity`
  padding: 5px;
  margin: 2px 0;
`

const LinkText = styled.Text`
  color: ${props => props.theme.linkColor};
  font-size: 16px;
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
  capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const regex = /\/(\w+)\/(\w+)/
    let lastMatch = ''
    return (
      <Container>
        <H1Container>
          <Button onPress={() => navigate('/')}>
            <Text variant={'h1'}>{'Morpheus-UI'}</Text>
          </Button>
        </H1Container>
        <ListContainer>
          <ButtonContainer>
            {this.props.allSitePage.edges.map(edge => {
              const match = edge.node.path.match(regex)
              if (match) {
                const renderHeader = match[1] !== lastMatch && (
                  <Text variant={['h3', 'italic']}>
                    {this.capitalize(match[1])}
                  </Text>
                )
                lastMatch = match[1]
                return (
                  <>
                    {renderHeader}
                    <Button
                      onPress={() => navigate(edge.node.path)}
                      variant={'grayHover'}>
                      <LinkText>{this.capitalize(match[2])}</LinkText>
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
