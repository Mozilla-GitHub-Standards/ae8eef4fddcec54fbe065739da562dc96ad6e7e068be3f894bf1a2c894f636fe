/** @format */

import React from 'react'
import Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import About from '../containers/AboutPage'

test('Page: About', () => {
  const component = Renderer.create(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
