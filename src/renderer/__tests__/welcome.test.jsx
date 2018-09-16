/** @format */

import React from 'react'
import Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Welcome from '../pages/welcome'

test('Page: Welcome', () => {
  const component = Renderer.create(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
