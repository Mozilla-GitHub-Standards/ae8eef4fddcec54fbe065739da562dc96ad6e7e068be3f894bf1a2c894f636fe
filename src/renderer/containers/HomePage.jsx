/**
 * @format
 * @flow
 */

import React from 'react'
import { remote } from 'electron'
import styled, { keyframes } from 'styled-components'

import RoundButton from '../components/Button'

import logo from '../images/logo.svg'

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const LogoSpinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${LogoSpinner} infinite 20s linear;
  height: 80px;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const AppIntro = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
`

export default class HomePage extends React.Component<{}, {}> {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Logo src={logo} />
          <Title>Welcome to React in Electron packed with Parcel!</Title>
          Electron App Version: {remote.app.getVersion()}
        </AppHeader>

        <AppIntro>
          <RoundButton to="/about" size="200">
            ABOUT
          </RoundButton>
        </AppIntro>
      </AppContainer>
    )
  }
}
