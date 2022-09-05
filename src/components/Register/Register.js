// import React from 'react'
// import FormPage from '../FormPage/FormPage'

// class Register extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       email: '',
//       password: ''
//     }
//   }

//   handleChange = event => {
//     const { name, value } = event.target
//     this.setState({
//       [name]: value
//     })
//   }


//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.onLogin(this.state)
//   }

//   render() {
//     return (
//       <FormPage
//         title='Добро пожаловать!'
//         buttonText='Зарегистрироваться'
//         linkCaption='Уже зарегистрированы?'
//         redirectDestination='/signin'
//         linkText='Войти'>
//           <form className="form" onSubmit={this.handleSubmit}>
//           <fieldset className="form__input-fields">
//             <h3 className="form__title">
//               Добро пожаловать!
//             </h3>
//           <label className="form__form-field">
//             <p className="form__input-field-title">
//               Имя
//             </p>
//             <input
//               className="form__input-field"
//               required
//               placeholder="Имя"
//               id="name"
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <span className="form__input-error"></span>
//           </label>
//           <label className="form__form-field">
//             <p className="form__input-field-title">
//               E-mail
//             </p>
//             <input
//               className="form__input-field"
//               required
//               id="email"
//               name="email"
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               placeholder="E-mail"/>
//             <span className="form__input-error"></span>
//           </label>
//           <label className="form__form-field">
//             <p className="form__input-field-title">
//               Пароль
//             </p>
//             <input
//               className="form__input-field"
//               placeholder="Пароль"
//               required
//               id="password"
//               name="password"
//               type="password"
//               value={this.state.password}
//               onChange={this.handleChange}/>
//             <span className="form__input-error">
//               Что-то пошло не так...
//             </span>
//           </label>
//           <button className={`
//               form__submit-button
//               // ${this.props.buttonText === 'Войти' ? 'form__submit-button_place_login' : ''}
//               opacity-animation`}              
//               type="submit">
//                 Зарегистрироваться
//             </button>
//           </fieldset>
//         </form>
//       </FormPage>
//     )
//   }
// }

// export default Register

import React from 'react'
import { useFormWithValidation } from '../../utils/useForm'
import FormPage from '../FormPage/FormPage'

function Register(props) {

  const [notification, setNotification] = React.useState('')
  
  React.useEffect(() => {
    function getNotification(message) {
      setNotification(message)
    }
    getNotification(props.authMessage)
    return function cleanup() {
      props.onResetNotification()
    }
  }, [])
  
  React.useEffect(() => {
      function getNotification(message) {
        setNotification(message)
      }
      getNotification(props.authMessage)
    })

  const { values, focus, handleChange, errors, isValid, resetForm, resetFocus } = useFormWithValidation()

  function handleSubmit(event) { 
    event.preventDefault() 
    props.onRegister(values)
  }
  
  return (
    <FormPage
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkCaption='Уже зарегистрированы?'
      redirectDestination='/signin'
      linkText='Войти'>
        <form
          className="form"
          noValidate
          onSubmit={handleSubmit}>
        <fieldset className="form__input-fields">
          <h3 className="form__title">
            Добро пожаловать!
          </h3>
        <label className="form__form-field">
          <p className="form__input-field-title">
            Имя
          </p>
          <input
            className={`form__input-field ${!errors.name ? '' : 'form__input-field_error' }`}
            required
            minLength={2}
            maxLength={30}
            placeholder="Имя"
            id="name"
            name="name"
            type="text"
            value={values.name || ''}
            onChange={handleChange}
            onBlur={resetFocus}
            />
          <span className="form__input-error">
            { focus === 'name' ? errors.name : '' }
          </span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            E-mail
          </p>
          <input
            className={`form__input-field ${!errors.email ? '' : 'form__input-field_error' }`}
            required
            id="email"
            name="email"
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            onBlur={resetFocus}
            placeholder="E-mail"/>
          <span className="form__input-error">
            { focus === 'email' ? errors.email : '' }
          </span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            Пароль
          </p>
          <input
            className={`form__input-field ${!errors.password ? '' : 'form__input-field_error' }`}
            placeholder="Пароль"
            required
            id="password"
            name="password"
            type="password"
            value={values.password || ''}
            onBlur={resetFocus}
            onChange={handleChange}/>
          <span className="form__input-error">
            { focus === 'password' ? errors.password : '' }
          </span>
        </label>
        <span className="notification">{ notification }</span>
        <button className={`
            form__submit-button
            ${!isValid ? `form__submit-button_disabled` : `opacity-animation`}
            ${props.buttonText === 'Войти' ? 'form__submit-button_place_login' : ''}`}              
            disabled={!isValid}
            type="submit">
              Зарегистрироваться
          </button>
        </fieldset>
      </form>
    </FormPage>
  )
}

export default Register
