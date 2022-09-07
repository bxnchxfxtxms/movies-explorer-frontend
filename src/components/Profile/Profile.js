import React from 'react'
import { useForm } from 'react-hook-form'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email
    }
  })

  console.log(currentUser)

  const handleProfileFormSubmit = (data) => {
    props.onEditProfile(data)
    reset({
      name: data.name,
      email: data.email
    })
  }
  
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        handleProfileFormSubmit(data)
      }
      )}
      className="Profile">
      <fieldset className="profile__fieldset">
        <h3 className="profile__title">
          {`Привет, ${currentUser.name}!`}
        </h3>
        <div className="profile__user-data-container">
          <p className={`
            profile__user-data-line
            profile__user-data-line_weight_medium
            ${errors.name ? 'profile__user-data-line_error' : ''}`}>
            {errors.name ? errors.name.message : 'Имя'}
          </p>
          <input className="profile__user-data-line"
            placeholder="Имя"
            id="name"
            {...register("name", {
              required: "Это поле не может быть пустым",
              minLength: {
                value: 2,
                message: "Имя должно содержать минимум 2 буквы"
              },
              maxLength: {
                value: 30,
                message: "Достигнуто максимальное количество символов"
              }
            })}
            />
        </div>
        <div className="profile__user-data-container">
        <p className={`
            profile__user-data-line
            profile__user-data-line_weight_medium
            ${errors.email ? 'profile__user-data-line_error' : ''}`}>
            {errors.email ? errors.email.message : 'E-mail'}
          </p>
          <input className="profile__user-data-line"
            id="email"
            {...register("email", {
              required: "Это поле не может быть пустым",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig,
                message: "Необходимо ввести адрес электронной почты"
              }
            }
            )}
            placeholder="E-mail"/>
        </div>
        <button
          disabled={!isDirty || !isValid}
          className={`
            profile__button
            ${(!isDirty || !isValid) ? 'profile__button_disabled' : 'opacity-animation' }
            `}
          type="submit">
          Редактировать
        </button>
      </fieldset>
      <button
        type="button"
        className="profile__button profile__button_color_red opacity-animation"
        onClick={props.onLogoutClick}>
          Выйти из аккаунта
      </button>
    </form>
    )
}
  
export default Profile

// import React from 'react'
// import { useFormWithValidation } from '../../utils/useForm'
// import { useForm } from 'react-hook-form'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext'

// function Profile(props) {

//   const currentUser = React.useContext(CurrentUserContext)

//   const [values, setValues] = React.useState({
//     name: currentUser.name,
//     email: currentUser.email
//   });

//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({...values, [name]: value});
//     // setErrors({...errors, [name]: target.validationMessage });
//     setIsValid(target.closest("form").checkValidity());
//     // setFocus(target.closest("input").name);
//   };

//   const compareValues = (values, currentUserData) => {
//     return values.name === currentUserData.name && values.email === currentUserData.email
//   }

//   // const [notification, setNotification] = React.useState('')
  
//   // React.useEffect(() => {
//   //   function getNotification(message) {
//   //     setNotification(message)
//   //   }
//   //   getNotification(props.authMessage)
//   //   return function cleanup() {
//   //     props.onResetNotification()
//   //   }
//   // }, [])
  
//   // React.useEffect(() => {
//   //     function getNotification(message) {
//   //       setNotification(message)
//   //     }
//   //     getNotification(props.authMessage)
//   //   })

//   // const { focus, handleChange, errors, isValid, resetForm, resetFocus } = useFormWithValidation()

  

//   function handleSubmit(event) { 
//     event.preventDefault() 
//     props.onEditProfile(values)
//   }
  
//   return (
//     <form
//       noValidate
//       onSubmit={handleSubmit}
//       className="Profile">
//       <fieldset className="profile__fieldset">
//         <h3 className="profile__title">
//           {`Привет, ${currentUser.name}!`}
//         </h3>
//         <div className="profile__user-data-container">
//           <p className="profile__user-data-line profile__user-data-line_weight_medium">
//             Имя
//           </p>
//           <input className="profile__user-data-line"
//             required
//             minLength={2}
//             maxLength={30}
//             placeholder="Имя"
//             id="name"
//             name="name"
//             type="text"
//             value={values.name}
//             onChange={handleChange}
//             // onBlur={resetFocus}
//           />
//         </div>
//         <div className="profile__user-data-container">
//           <p className="profile__user-data-line profile__user-data-line_weight_medium">
//             E-mail
//           </p>
//           <input className="profile__user-data-line"
//             required
//             id="email"
//             name="email"
//             type="email"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="E-mail"/>
//         </div>
//         <button
//           disabled={compareValues(values, currentUser) || !isValid}
//           className={`
//             profile__button
//             ${(compareValues(values, currentUser) || !isValid) ? 'profile__button_disabled' : 'opacity-animation' }
//             `}
//           type="submit">
//           Редактировать
//         </button>
//       </fieldset>
//       <button
//         type="button"
//         className="profile__button profile__button_color_red opacity-animation"
//         onClick={props.onLogoutClick}>
//           Выйти из аккаунта
//       </button>
//     </form>
//     )
// }
  
// export default Profile


// import React from 'react'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext'

// class Profile extends React.Component {

//   static contextType = CurrentUserContext

  

//   render() {
//     return (
//       <form className="Profile">
//         <fieldset className="profile__fieldset">
//           <h3 className="profile__title">
//             {`Привет, ${this.context.name}!`}
//           </h3>
//           <div className="profile__user-data-container">
//             <p className="profile__user-data-line profile__user-data-line_weight_medium">
//               Имя
//             </p>
//             <input className="profile__user-data-line"
//               value={this.context.name}
//               required
//               minLength={2}
//               maxLength={30}
//               placeholder="Имя"
//               id="name"
//               name="name"
//               type="text"
//               value={values.name || ''}
//               onChange={handleChange}
//               onBlur={resetFocus}
//             />
//           </div>
//           <div className="profile__user-data-container">
//             <p className="profile__user-data-line profile__user-data-line_weight_medium">
//               E-mail
//             </p>
//             <input className="profile__user-data-line"
//               value={this.context.email}
//             />
//           </div>
//           <button type="submit" className="profile__button opacity-animation">
//             Редактировать
//           </button>
//         </fieldset>
//         <button
//           type="button"
//           className="profile__button profile__button_color_red opacity-animation"
//           onClick={this.props.onLogoutClick}>
//             Выйти из аккаунта
//         </button>
//       </form>
//     )
//   }
// }
  
// export default Profile



//   render() {
//     return (
//       <section className="Profile">
//         <h3 className="profile__title">
//           {`Привет, ${this.context.name}!`}
//         </h3>
//         <div className="profile__user-data-container">
//           <p className="profile__user-data-line profile__user-data-line_weight_medium">
//             Имя
//           </p>
//           <p className="profile__user-data-line">
//             {this.context.name}
//           </p>
//         </div>
//         <div className="profile__user-data-container">
//           <p className="profile__user-data-line profile__user-data-line_weight_medium">
//             E-mail
//           </p>
//           <p className="profile__user-data-line">
//             {this.context.email}
//           </p>
//         </div>
//         <button type="button" className="profile__button opacity-animation">
//           Редактировать
//         </button>
//         <button
//           type="button"
//           className="profile__button profile__button_color_red opacity-animation"
//           onClick={this.props.onLogoutClick}>
//             Выйти из аккаунта
//         </button>
//       </section>
//     )
//   }
// }

// export default Profile
