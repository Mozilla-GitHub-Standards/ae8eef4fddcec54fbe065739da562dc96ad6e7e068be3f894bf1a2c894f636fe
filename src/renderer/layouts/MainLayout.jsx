/** @format */

import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import ContentRoutes from './ContentRoutes'

const GlobalStyle = createGlobalStyle`
  @import '~typeface-roboto';

  html, body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: #303341;

    /* Prevent dragging of HTML elements and text selection. */
    *, *::after, *::before {
      -webkit-user-drag: none;
      user-select: none;
      -webkit-app-region: no-drag;
      cursor: default;
    }
  }
`

export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ContentRoutes />
      </React.Fragment>
    )
  }
}
