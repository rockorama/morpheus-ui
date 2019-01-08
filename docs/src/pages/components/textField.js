//@flow
import React, { Component } from 'react'

import { TextField } from '@morpheus-ui/core'
import Layout from '../../components/Layout'

import SEO from '../../components/seo'

export default class IndexPage extends Component<{}> {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <TextField
          type="email"
          placeholder="put the vault name here"
          name="email"
          label="Email"
          defaultValue="some@email.com"
          required
        />
      </Layout>
    )
  }
}
