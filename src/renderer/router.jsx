/** @format */

import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Welcome from './pages/welcome'
import About from './pages/about'

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter hashType="noslash">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route component={() => <h1>Oops.</h1>} />
        </Switch>
      </HashRouter>
    )
  }
}
