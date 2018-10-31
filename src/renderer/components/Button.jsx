/** @format */
import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const ButtonLink = Styled(Link)`
  display: block;
  width: ${props => props.size || 200}px;
  height: ${props => props.size || 200}px;
  line-height: ${props => props.size || 200}px;
  border: 0px;
  border-radius: 50%;
  color: white;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  font-size: ${props => props.size / 10 || 20}px;
  font-weight: bold;

  :hover {
    background: linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%);
  }

  :active {
    transform: scale(0.98);
    transition:all 0.23s ease;
  }
`

const RoundButton = ({ to, props, children }) => {
  return (
    <ButtonLink to={to} {...props}>
      {children}
    </ButtonLink>
  )
}

export default RoundButton
