/** @format */

import React from 'react'
import Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import App from '../components/App'

test('Component: App', () => {
  const component = Renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
