/** @format */

import React from 'react'
import Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../layouts/ContentRoutes'

test('Route: /', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/']}>
      <Router />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Route: /about', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/about']}>
      <Router />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Route: /preferences', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/preferences']}>
      <Router />
    </MemoryRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
