// import React from 'react'
// import FormPage from '../FormPage/FormPage'
// import Validator from 'validator'

// class Login extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: '',
//       password: '',
//       errors: '',
//     }
//   }

//   handleChange = event => {
//     const { name, value } = event.target
//     this.setState({
//       [name]: value
//     })
//     console.log(event)
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.onLogin(this.state)
//   }

//   render() {
//     return (
//       <FormPage
//         title={'Рады видеть!'}
//         buttonText={'Войти'}
//         linkCaption={'Ещё не зарегистрированы?'}
//         redirectDestination={'/signup'}
//         linkText={'Регистрация'}>
//         <form
//           className="form"
//           onSubmit={this.handleSubmit}
//           noValidate
//         >
//           <fieldset className="form__input-fields">
//             <h3 className="form__title">
//               Рады видеть!
//             </h3>
//             <label className="form__form-field">
//               <p className="form__input-field-title">
//                 E-mail
//               </p>
//               <input
//                 className={`form__input-field`}
//                 required
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 placeholder="email"
//               />
//               <span className="form__input-error">
//                 {Validator.isEmail(this.state.email) || this.state.email === '' ? '' : 'Необходимо ввести адрес электронной почты'}
//               </span>
//             </label>
//             <label className="form__form-field">
//               <p className="form__input-field-title">
//                 Пароль
//               </p>
//               <input
//                 className="form__input-field"
//                 required
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 placeholder="Пароль"/>
//               <span className="form__input-error">
                
//               </span>
//             </label>
//             <button className={`
//               form__submit-button
//               form__submit-button_place_login
//               opacity-animation`}              
//               type="submit">
//                 Войти
//             </button>
//           </fieldset>
//         </form>
//       </FormPage>
//     )
//   }
// }

// export default Login


import React, { useContext } from 'react'
import { useFormWithValidation } from '../../utils/useForm'
import FormPage from '../FormPage/FormPage'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Login(props) {
  const currentUser = useContext(CurrentUserContext)

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
    props.onLogin(values)  
  }

  return (
    <FormPage
      title={'Рады видеть!'}
      buttonText={'Войти'}
      linkCaption={'Ещё не зарегистрированы?'}
      redirectDestination={'/signup'}
      linkText={'Регистрация'}>
      <form
        className="form"
        onSubmit={handleSubmit}
        noValidate>
        <fieldset className="form__input-fields">
          <h3 className="form__title">
            Рады видеть!
          </h3>
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
              placeholder="email"
              onBlur={resetFocus}/>
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
              required
              id="password"
              name="password"
              type="password"
              value={values.password || ''}
              onChange={handleChange}
              onBlur={resetFocus}
              placeholder="Пароль"/>
            <span className="form__input-error">
              { focus === 'password' ? errors.password : '' }
            </span>
          </label>
          <span className="notification">{ notification }</span>
          <button className={`
            form__submit-button
            form__submit-button_place_login
            ${!isValid ? `form__submit-button_disabled` : `opacity-animation`}`}
            disabled={!isValid}
            type="submit">
              Войти
          </button>
        </fieldset>
      </form>
    </FormPage>
  )
}

export default Login
