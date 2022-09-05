import React from 'react'
import Logo from '../Logo/Logo'
import { Link,  } from 'react-router-dom'

class FormPage extends React.Component {
  render() {
    return (
      <section className="FormPage">
        <Logo place="register"/>
        <form className="form">
          <fieldset className="form__input-fields">
            <h3 className="form__title">
              {this.props.title}
            </h3>
            {this.props.children}
            <button className={`
              form__submit-button
              ${this.props.buttonText === 'Войти' ? 'form__submit-button_place_login' : ''}
              opacity-animation`}              
              type="submit">
              {this.props.buttonText}
            </button>
          </fieldset>
        </form>
        <div className="form__redirect-link-container">
          <p className="form__redirect-link-caption">
            {this.props.linkCaption}
          </p>
          <Link className="form__redirect-link opacity-animation" to={this.props.redirectDestination}>
            {this.props.linkText}
          </Link>
        </div>
      </section>
    )
  }
}

export default FormPage
