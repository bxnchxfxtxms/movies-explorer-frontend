import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink'
import ProfileLink from '../ProfileLink/ProfileLink'

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <nav className="header__link-container header__link-container_route_main">
          <NavigationLink
            title='Фильмы'
            destination='/movies'
          />
          <NavigationLink
            title='Сохранённые Фильмы'
            destination='/saved-movies'
          />
        </nav>
        {/* <Link className="header__account-link opacity-animation opacity-animation_type_darkening" to='/profile'>Аккаунт</Link> */}
        <ProfileLink/>
        {/* <button className="header__menu-button opacity-animation"></button> */}
      </div>
    )
  }
}

export default Navigation