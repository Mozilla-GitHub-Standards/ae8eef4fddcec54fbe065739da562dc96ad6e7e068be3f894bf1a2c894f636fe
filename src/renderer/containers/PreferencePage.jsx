/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default class PreferencePage extends React.Component {
  render() {
    return (
      <Button to="/" component={Link} variant="contained" color="secondary">
        Home
      </Button>
    )
  }
}
