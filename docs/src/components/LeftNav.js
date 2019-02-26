// @flow

import React, { Component } from 'react'
import { StaticQuery, graphql, Link, navigate } from 'gatsby'
import { Image, View } from 'react-native-web'
import { Text } from '@morpheus-ui/core'
import styled, { css } from 'styled-components/native'
import { Modal } from 'react-overlays'
import screenSize from './hocs/ScreenSize'

const modalStyle = {
  position: 'fixed',
  zIndex: 99999999,
  margin: '0 auto',
  top: 100,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const H1Container = screenSize(styled.View`
  padding-top: 30px;
  ${props =>
    props.screenWidth <= 900 &&
    css`
      padding: 0;
    `};
`)

const Container = screenSize(styled.View`
  padding: 30px;
  width: 320px;
  background: ${props => props.theme.leftNavColor};
  ${props =>
    props.screenWidth <= 900 &&
    css`
      padding: 0 30px;
      width: 100%;
      height: 100px;
    `};
`)

const MobileContainer = screenSize(styled.View`
  ${props =>
    props.screenWidth <= 900 &&
    css`
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `};
`)

const ListContainer = screenSize(styled.ScrollView`
  margin-top: ${props => props.theme.spacing}px;
  flex: 1;
  ${props =>
    props.screenWidth <= 900 &&
    css`
      display: none;
    `};
  ${props =>
    props.open &&
    css`
      display: block;
      width: 100%;
      background-color: #fff;
      margin: 0 auto;
      text-align: center;
    `};
`)

const Button = styled.TouchableOpacity`
  padding: 5px;
  margin: 2px 0;
`

const Touchable = screenSize(styled.TouchableOpacity`
  padding: 0px;
  ${props =>
    props.screenWidth >= 900 &&
    css`
      display: none;
    `};
`)

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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

class LeftNav extends Component<Props> {
  state = { open: false }

  toggleMenu = () => {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }
  render() {
    const regex = /\/(\w+)\/(\w+)/
    let lastMatch = ''
    return (
      <Container>
        <MobileContainer>
          <H1Container>
            <Button onPress={() => navigate('/')}>
              <Text variant={'h1'}>{'Morpheus-UI'}</Text>
            </Button>
          </H1Container>
          <Touchable onPress={this.toggleMenu}>
            <Image
              source={require('../images/menu-icon.svg')}
              style={{ width: 20, height: 19 }}
            />
          </Touchable>
        </MobileContainer>
        <ListContainer open={this.state.open}>
          <ButtonContainer>
            {this.props.allSitePage.edges.map(edge => {
              const match = edge.node.path.match(regex)
              if (match) {
                const renderHeader = match[1] !== lastMatch && (
                  <Text variant={['h3', 'italic']}>{capitalize(match[1])}</Text>
                )
                lastMatch = match[1]
                return (
                  <View key={edge.node.path}>
                    {renderHeader}
                    <Button
                      onPress={() => navigate(edge.node.path)}
                      variant={'grayHover'}>
                      <LinkText>{capitalize(match[2])}</LinkText>
                    </Button>
                  </View>
                )
              }
            })}
          </ButtonContainer>
        </ListContainer>
        <Modal
          aria-labelledby="modal-label"
          show={this.state.open}
          style={modalStyle}>
          <ListContainer open={this.state.open}>
            <ButtonContainer>
              {this.props.allSitePage.edges.map(edge => {
                const match = edge.node.path.match(regex)
                if (match) {
                  const renderHeader = match[1] !== lastMatch && (
                    <Text variant={['h3', 'italic']}>
                      {capitalize(match[1])}
                    </Text>
                  )
                  lastMatch = match[1]
                  return (
                    <View key={edge.node.path}>
                      {renderHeader}
                      <Button onPress={() => navigate(edge.node.path)}>
                        <LinkText>{capitalize(match[2])}</LinkText>
                      </Button>
                    </View>
                  )
                }
              })}
            </ButtonContainer>
          </ListContainer>
        </Modal>
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
