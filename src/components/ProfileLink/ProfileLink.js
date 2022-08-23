import React from 'react'
import { NavLink } from 'react-router-dom'

class ProfileLink extends React.Component {
  render() {
    return (
      <NavLink
        className="header__account-link opacity-animation opacity-animation_type_darkening"
        activeClassName="header__movie-link_active"
        to="/profile">
          Аккаунт
      </NavLink>
    )
  }
}

export default ProfileLink