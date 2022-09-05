import React from 'react'
import NavigationLink from '../NavigationLink/NavigationLink'
import ProfileLink from '../ProfileLink/ProfileLink'

class NavigationPopupMenu extends React.Component {
  render() {
    return (
      <section className={`NavigationPopupMenu ${this.props.isOpen ? 'navigation-popup-menu_opened' : ''}`}>
        <div className="navigation-popup-menu__container">
          <button className="navigation-popup-menu__close-button" type="button" onClick={this.props.onClose}></button>
          <nav className="navigation-popup-menu__links-container">
            <NavigationLink
              title="Главная"
              destination="/"/>
            <NavigationLink
              title="Фильмы"
              destination="/movies"/>
            <NavigationLink
              title="Сохранённые фильмы"
              destination="/saved-movies"/>
            <ProfileLink/>
          </nav>
        </div>
      </section>
    )
  }
}

export default NavigationPopupMenu
