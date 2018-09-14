/* taken from React Native for Web's Storybook */
/* which is under MIT license */
/* RNW ui-explorer url: https://github.com/necolas/react-native-web/tree/0e81c6ef2758d4ca9b2099b1d04a4f8c417f0f43/packages/website/storybook/ui-explorer */

/* eslint-disable react/prop-types */

/**
 * @flow
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native-web'
import AppText from './AppText'
import insertBetween from './insertBetween'

type DocItemType = {
  description?: string,
  example?: Object,
  name?: string,
  typeInfo?: string,
  label?: string,
}

const Divider = () => <View style={styles.verticalDivider} />

const createDescription = description => {
  const nodeList = React.Children.toArray(description)
  let content
  if (nodeList.length === 1) {
    content = <Text>{nodeList}</Text>
  } else {
    content = insertBetween(() => <Divider key={Math.random()} />, nodeList)
  }
  return <Text style={styles.text}>{content}</Text>
}

const DocItem = ({
  description,
  example = {},
  name,
  typeInfo,
  label,
}: DocItemType) => (
  <View style={styles.example}>
    {name && (
      <AppText style={styles.title}>
        <PropText label={label} name={name} typeInfo={typeInfo} />
      </AppText>
    )}
    {description && (
      <View style={styles.description}>{createDescription(description)}</View>
    )}
    {(example.render || example.code) && (
      <View style={styles.renderBox}>
        <AppText style={styles.exampleText}>Example</AppText>
        {example.render && <View>{example.render()}</View>}
        {example.render &&
          example.code && <View style={styles.verticalDivider} />}
        {example.code && <Text style={styles.code}>{example.code}</Text>}
      </View>
    )}
  </View>
)

const PropText = ({ label, name, typeInfo }) => (
  <AppText>
    {label && (
      <Text style={[styles.label, label === 'web' && styles.webLabel]}>
        {label}
      </Text>
    )}
    <Text style={styles.propName}>{name}</Text>
    {typeInfo && (
      <Text>
        {': '}
        <Text style={styles.code}>{typeInfo}</Text>
      </Text>
    )}
  </AppText>
)

const styles = StyleSheet.create({
  code: {
    fontFamily: 'monospace, monospace',
    fontSize: '1rem',
    lineHeight: '1.3125em',
  },
  example: {
    marginBottom: 'calc(1.5 * 1.3125rem)',
  },
  title: {
    fontSize: '1rem',
  },
  text: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
    lineHeight: '1.3125em',
  },
  label: {
    backgroundColor: '#ddd',
    borderRadius: '1rem',
    color: '#555',
    marginRight: '0.5rem',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.5rem',
  },
  propName: {
    fontWeight: 'bold',
  },
  webLabel: {
    backgroundColor: '#bdebff',
    color: '#025268',
  },
  description: {
    marginTop: 'calc(0.5 * 1.3125rem)',
  },
  renderBox: {
    borderColor: '#E6ECF0',
    borderWidth: 1,
    padding: '1.3125rem',
    marginTop: '1.3125rem',
  },
  exampleText: {
    color: '#AAB8C2',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: 'calc(0.5 * 1.3125rem)',
    textTransform: 'uppercase',
  },
  verticalDivider: {
    height: '1rem',
  },
})

export default DocItem
