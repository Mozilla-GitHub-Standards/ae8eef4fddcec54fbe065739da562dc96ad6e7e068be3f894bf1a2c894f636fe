/** @format */

import getApp from './app'

let app

jest.setTimeout(30000)

afterEach(async () => {
  if (app && app.isRunning()) {
    return await app.stop()
  }
})

beforeEach(async () => {
  app = getApp()
  await app.start()
  await app.client.waitUntilWindowLoaded()
})

test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Electron-React-Parcel-Boilerplate')
})

test('go to Start', async () => {
  expect(
    await app.client
      .element('a#start')
      .click()
      .element('h1')
      .getText()
  ).toBe('Electron + React + Parcel')
})
