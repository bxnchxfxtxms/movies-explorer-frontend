import React from 'react'
import FormPage from '../FormPage/FormPage'

class Register extends React.Component {
  render() {
    return (
      <FormPage
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        linkCaption='Уже зарегистрированы?'
        redirectDestination='/signin'
        linkText='Войти'
      >
        <label className="form__form-field">
          <p className="form__input-field-title">
            Имя
          </p>
          <input className="form__input-field"
            placeholder="Имя"
            defaultValue="Дмитрий"
          />
          <span className="form__input-error"></span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            E-mail
          </p>
          <input className="form__input-field"
            placeholder="E-mail"
            defaultValue="pochta@yandex.ru"
            type="email"
          />
          <span className="form__input-error"></span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            Пароль
          </p>
          <input className="form__input-field"
            placeholder="Пароль"
            type="password"
          />
          <span className="form__input-error">
            Что-то пошло не так...
          </span>
        </label>
      </FormPage>
    )
  }
}

export default Register
