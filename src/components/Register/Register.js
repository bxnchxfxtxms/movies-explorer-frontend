import React from 'react'
import { useForm } from 'react-hook-form'
import FormPage from '../FormPage/FormPage'

function Register(props) {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
  })
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
          onSubmit={handleSubmit((data) => 
            props.onRegister(data)
          )}>
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
            placeholder="Имя"
            id="name"
            {...register("name", {
              required: "Это поле необходимо заполнить",
              minLength: {
                value: 2,
                message: "Имя должно содержать минимум 2 буквы"
              },
              maxLength: {
                value: 30,
                message: "Максимальное количество символов - 30 "
              }
            })}
            />
          <span className="form__input-error">{errors?.name && errors.name.message}</span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            E-mail
          </p>
          <input
            className={`form__input-field ${!errors.email ? '' : 'form__input-field_error' }`}
            id="email"
            {...register("email", {
              required: "Это поле необходимо заполнить",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig,
                message: "Необходимо ввести адрес электронной почты"
              }
            }
            )}
            placeholder="E-mail"/>
              <span className="form__input-error">{errors?.email && errors.email.message}</span>
        </label>
        <label className="form__form-field">
          <p className="form__input-field-title">
            Пароль
          </p>
          <input
            className={`form__input-field ${!errors.password ? '' : 'form__input-field_error' }`}
            placeholder="Пароль"
            id="password"
            {...register("password", {
              required: "Это поле необходимо заполнить",
            }
            )}
            type="password"/>
          <span className="form__input-error">{errors?.password && errors.password.message}</span>
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

// import React from 'react'
// import { useFormWithValidation } from '../../utils/useForm'

// import FormPage from '../FormPage/FormPage'
// import Validator from 'validator'


// function Register(props) {

//   // const validateEmail = (email) => {
//   //   return String(email)
//   //     .toLowerCase()
//   //     .match(
//   //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   //     );
//   // };

//   // const validateEmail = (email) => {
//   //   return Validator.isEmail(email) || 'undefined' ? true : false
//   // }
  
//   const [notification, setNotification] = React.useState('')
//   // console.log('isEmail: ', Validator.isEmail('qwerty@qwe' || 'undefined'))
  
//   React.useEffect(() => {
//     function getNotification(message) {
//       setNotification(message)
//     }
//     getNotification(props.authMessage)
//     return function cleanup() {
//       props.onResetNotification()
//     }
//   }, [])
  
//   React.useEffect(() => {
//       function getNotification(message) {
//         setNotification(message)
//       }
//       getNotification(props.authMessage)
//     })

//   const { values, focus, handleChange, errors, isValid, resetForm, resetFocus } = useFormWithValidation()

//   function handleSubmit(event) { 
//     event.preventDefault() 
//     props.onRegister(values)
//   }
  
//   return (
//     <FormPage
//       title='Добро пожаловать!'
//       buttonText='Зарегистрироваться'
//       linkCaption='Уже зарегистрированы?'
//       redirectDestination='/signin'
//       linkText='Войти'>
//         <form
//           className="form"
//           noValidate
//           onSubmit={handleSubmit}>
//         <fieldset className="form__input-fields">
//           <h3 className="form__title">
//             Добро пожаловать!
//           </h3>
//         <label className="form__form-field">
//           <p className="form__input-field-title">
//             Имя
//           </p>
//           <input
//             className={`form__input-field ${!errors.name ? '' : 'form__input-field_error' }`}
//             required
//             minLength={2}
//             maxLength={30}
//             placeholder="Имя"
//             id="name"
//             name="name"
//             type="text"
//             value={values.name || ''}
//             onChange={handleChange}
//             onBlur={resetFocus}
//             />
//           <span className="form__input-error">
//             { focus === 'name' ? errors.name : '' }
//           </span>
//         </label>
//         <label className="form__form-field">
//           <p className="form__input-field-title">
//             E-mail
//           </p>
//           <input
//             className={`form__input-field ${!errors.email ? '' : 'form__input-field_error' }`}
//             required
//             id="email"
//             name="email"
//             // type="email"
//             // validators={true}
//             // validators={
//             //   validateEmail(values.email)
//             // }
//             // pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig}
//             // pattern={/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i}
//             // pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}
//             // pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}
//             // pattern={b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/b}
//             // pattern={[/^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/]}
//             // pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
//             // pattern={[/^[a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-z0-9]@[a-z0-9][-.]{0,1}([a-z][-.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([.-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/]}
//             // pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/}
//             value={values.email || ''}
//             onChange={handleChange}
//             onBlur={resetFocus}
//             placeholder="E-mail"/>
//           <span className="form__input-error">
//             { focus === 'email' ? errors.email : '' }
//           </span>
//         </label>
//         <label className="form__form-field">
//           <p className="form__input-field-title">
//             Пароль
//           </p>
//           <input
//             className={`form__input-field ${!errors.password ? '' : 'form__input-field_error' }`}
//             placeholder="Пароль"
//             required
//             id="password"
//             name="password"
//             type="password"
//             value={values.password || ''}
//             onBlur={resetFocus}
//             onChange={handleChange}/>
//           <span className="form__input-error">
//             { focus === 'password' ? errors.password : '' }
//           </span>
//         </label>
//         <span className="notification">{ notification }</span>
//         <button className={`
//             form__submit-button
//             ${!isValid ? `form__submit-button_disabled` : `opacity-animation`}
//             ${props.buttonText === 'Войти' ? 'form__submit-button_place_login' : ''}`}              
//             disabled={!isValid}
//             type="submit">
//               Зарегистрироваться
//           </button>
//         </fieldset>
//       </form>
//     </FormPage>
//   )
// }

// export default Register

