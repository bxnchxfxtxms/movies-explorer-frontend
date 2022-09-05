import React from 'react'
import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom'

class Logo extends React.Component {
  render() {
    return (
    <Link to="/">
      <img className={`
        Logo
        ${this.props.place === 'register' ? 'logo_place_register' : ''}
        opacity-animation`}
        src={logo}
        alt="Логотип сайта"/>
    </Link>
    )
  }
}

export default Logo
