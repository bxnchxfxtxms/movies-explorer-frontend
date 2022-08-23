import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <section className="Profile">
        <h3 className="profile__title">
          Привет, Дмитрий!
        </h3>
        <div className="profile__user-data-container">
          <p className="profile__user-data-line profile__user-data-line_weight_medium">
            Имя
          </p>
          <p className="profile__user-data-line">
            Дмитрий
          </p>
        </div>
        <div className="profile__user-data-container">
          <p className="profile__user-data-line profile__user-data-line_weight_medium">
            E-mail
          </p>
          <p className="profile__user-data-line">
            pochta@yandex.ru
          </p>
        </div>
        <button className="profile__button opacity-animation">
          Редактировать
        </button>
        <button className="profile__button profile__button_color_red opacity-animation">
          Выйти из аккаунта
        </button>
      </section>
    )
  }
}

export default Profile
