/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

/**
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native-web'
import AppText from './AppText'
import ExternalLink from './ExternalLink'
import insertBetween from './insertBetween'

type UIType = {
  children?: any,
  description?: string,
  sections?: string,
  title: string,
  url?: string,
}

const Title = ({ children }) => (
  <AppText style={styles.title}>{children}</AppText>
)

export const Description = ({ children }: Object) => (
  <AppText style={styles.description}>
    {insertBetween(
      () => (
        <Divider key={Math.random()} />
      ),
      React.Children.toArray(children),
    )}
  </AppText>
)

const Divider = () => <View style={styles.divider} />

const SourceLink = uri => (
  <ExternalLink
    href={`https://github.com/MainframeHQ/morpheus-ui/tree/master/packages/core/src${uri}`}
    style={styles.link}>
    View source code on GitHub
  </ExternalLink>
)

const UIExplorer = ({
  children,
  description,
  sections,
  title,
  url,
}: UIType) => (
  <View style={styles.root}>
    <Title>{title}</Title>
    {description}
    {children}
    {url && <SourceLink uri={url} />}
  </View>
)

const styles = StyleSheet.create({
  root: {
    padding: '1rem',
    flex: 1,
    flexBasis: 'auto',
  },
  divider: {
    height: '1.3125rem',
  },
  title: {
    fontSize: '2rem',
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    marginTop: 'calc(0.5 * 1.3125rem)',
    marginBottom: 'calc(1.5 * 1.3125rem)',
  },
  link: {
    color: '#1B95E0',
    fontSize: '1rem',
    marginTop: 'calc(0.5 * 1.3125rem)',
    textDecorationLine: 'underline',
  },
})

export default UIExplorer
