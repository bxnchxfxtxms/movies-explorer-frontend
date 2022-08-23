import React from 'react';
import { HashLink as AnchorLink } from 'react-router-hash-link';

class Promo extends React.Component {
  render() {
    return (
      <section className="Promo">
        <h1 className="main__promo-title">
          Учебный проект студента факультета Веб-разработки. 
        </h1>
        <ul className="main__list">
          <li className="main__list-item main__list-item_place_promo">
            <AnchorLink to="#AboutProject">
              <button className="
              main__list-button
              main__list-button_place_promo
              opacity-animation
              opacity-animation_type_darkening
              ">
                О проекте
              </button>
            </AnchorLink>
          </li>
          <li className="main__list-item main__list-item_place_promo">
            <AnchorLink to="#Techs">
              <button className="
              main__list-button
              main__list-button_place_promo
              opacity-animation
              opacity-animation_type_darkening
              ">
                Технологии
              </button>
              </AnchorLink>
          </li>
          <li className="main__list-item main__list-item_place_promo">
            <AnchorLink to="#AboutMe">
              <button className="
              main__list-button
              main__list-button_place_promo
              opacity-animation
              opacity-animation_type_darkening
              ">
                Студент
              </button>
            </AnchorLink>
          </li>
        </ul>
      </section>
    )
  }
}

export default Promo