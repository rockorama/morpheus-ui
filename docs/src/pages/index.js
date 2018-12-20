//@flow
import React, { Component } from 'react'

import { Text } from '@morpheus-ui/core'

import Layout from '../components/Layout'

import SEO from '../components/seo'

export default class IndexPage extends Component<{}> {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <Text variant="h1">Hi people</Text>
      </Layout>
    )
  }
}
