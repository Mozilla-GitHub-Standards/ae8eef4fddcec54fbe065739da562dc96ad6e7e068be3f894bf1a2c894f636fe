/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}

class AboutPage extends React.Component {
  state = { value: 0 }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div>
        <p>Sample project for an Electron based application.</p>

        <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
          <BottomNavigationAction label="Home" to="/" component={Link} icon={<HomeIcon />} />
          <BottomNavigationAction label="Settings" to="/preferences" component={Link} icon={<SettingsIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AboutPage)
