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
        <ProfileLink/>
      </div>
    )
  }
}

export default Navigation