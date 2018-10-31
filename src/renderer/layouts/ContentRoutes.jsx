/** @format */

import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../containers/HomePage'
import AboutPage from '../containers/AboutPage'
import PreferencePage from '../containers/PreferencePage'

export const ROUTES_ITEMS = [
  {
    to: '/',
    exact: true,
    component: HomePage,
    text: 'Home'
  },
  {
    to: '/about',
    exact: true,
    component: AboutPage,
    text: 'About'
  },
  {
    to: '/preferences',
    exact: true,
    component: PreferencePage,
    text: 'Preferences'
  }
]

const ROUTES = ROUTES_ITEMS.map(route => (
  <Route key={route.to} path={route.to} exact={route.exact} component={route.component} />
))

export default class ContentRoutes extends React.Component {
  render() {
    return (
      <HashRouter hashType="noslash">
        <Switch>{ROUTES}</Switch>
      </HashRouter>
    )
  }
}
