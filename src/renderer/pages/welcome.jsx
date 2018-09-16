/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Title = Styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = Styled.section`
  padding: 4em;
  background: papayawhip;
`

export default class Welcome extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <Link to="/about" id="start">
            About
          </Link>
        </Title>
      </Wrapper>
    )
  }
}
