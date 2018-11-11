import React from 'react'

import { Button } from '../src/components/Button'

describe('Button', () => {
  it('renders', () => {
    expect(<Button title="Hello test" />).toMatchSnapshot()
  })
})
