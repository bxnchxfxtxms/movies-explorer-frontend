import React from 'react';

class Techs extends React.Component {
  render() {
    return (
      <section id="Techs" className="Techs">
        <h2 className="section__title">
          Технологии
        </h2>
        <h3 className="techs__title">
          7 технологий
        </h3>
        <p className="main__paragraph main__paragraph_place_techs">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <ul className="main__list main__list_place_techs">
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              HTML
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              CSS
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              JS
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              React
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              Git
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              Express.js
            </button>
          </li>
          <li className="main__list-item main__list-item_place_techs">
            <button type="button" className="main__list-button main__list-button_place_techs">
              mongoDB
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Techs