import React from 'react'

import { Button } from '../src'

describe('Button', () => {
  it('renders', () => {
    expect(<Button title="Hello test" />).toMatchSnapshot()
  })
})
