import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo'


class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Logo/>
        <Route exact path='/'>
          <div className="header__link-container">
            <Link className="header__signup-link opacity-animation" to='/signup'>
              Регистрация
            </Link>
            <Link to='/signin'>
              <button type="button" className="header__signin-button opacity-animation">
                Войти
              </button>
            </Link>
          </div>
        </Route>
        <Route path='/movies'>
          <Navigation/>
          <button className="header__menu-button opacity-animation" type="button" onClick={this.props.onMenuClick}></button>
        </Route>
        <Route path='/profile'>
          <Navigation/>
          <button className="header__menu-button opacity-animation" type="button" onClick={this.props.onMenuClick}></button>
        </Route>
        <Route path='/saved-movies'>
          <Navigation/>
          <button className="header__menu-button opacity-animation" type="button" onClick={this.props.onMenuClick}></button>
        </Route>
      </header>
    )
  }
}

export default withRouter(Header);
