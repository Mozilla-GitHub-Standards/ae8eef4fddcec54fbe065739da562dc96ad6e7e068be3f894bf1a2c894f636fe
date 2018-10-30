/**
 * @format
 * @flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { remote } from 'electron'
import styled, { keyframes, createGlobalStyle } from 'styled-components'

import logo from '../images/logo.svg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    background-color: #303341;
  }
`

const AppContainer = styled.div`
  text-align: center;
`

const AppIntro = styled.p`
  font-size: large;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const LogoSpinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${LogoSpinner} infinite 20s linear;
  height: 80px;
`

const GradientButton = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderradius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxshadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <AppHeader>
            <Logo src={logo} />
            <Title>Welcome to React in Electron packed with Parcel!</Title>
            Electron App Version: {remote.app.getVersion()}
          </AppHeader>
          <AppIntro>
            <Button component={Link} to="/" style={GradientButton}>
              Back
            </Button>
          </AppIntro>
        </AppContainer>
      </React.Fragment>
    )
  }
}
