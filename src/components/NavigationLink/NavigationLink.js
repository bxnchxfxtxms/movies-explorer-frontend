import React from 'react'
import { NavLink } from 'react-router-dom'

class NavigationLink extends React.Component {
  render() {
    return (
      <NavLink
        className="header__movie-link opacity-animation"
        activeClassName="header__movie-link_active"
        exact to={this.props.destination}>
          {this.props.title}
      </NavLink>
    )
  }
}

export default NavigationLink