/** @format */

import React from 'react'
import Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Welcome from '../containers/HomePage'

test('Page: HomePage', () => {
  const component = Renderer.create(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
