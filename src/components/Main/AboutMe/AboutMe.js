import React from 'react';
import studentImage from '../../../images/student-image.jpeg'
import Portfolio from '../Portfolio/Portfolio'


class AboutMe extends React.Component {
  render() {
    return (
      <section id="AboutMe" className="AboutMe">
        <h2 className="section__title">
          Студент
        </h2>
        <div className="about-me__student-info-container">
          <div className="about-me__student-info-text-container">
            <h3 className="about-me__name">
              Дмитрий
            </h3>
            <p className="about-me__bio">
              Фронтенд-разработчик, 35 лет
            </p>
            <p className="main__paragraph main__paragraph_place_about-me">
              Я родился и живу в городе Тверь, закончил факультет музыкального искусства этсрады
              и художественной коммуникации Санкт-Петербургского института кльтуры и искусств, работаю 
              в кавер-группах.
            </p>
            <ul className="main__list">
              <li className="main__list-item main__list-item_place_about-me">
                <a className="
                  main__social-media-link
                  main__social-media-link_place_about-me
                  opacity-animation"
                  href="https://vk.com/id186116064" rel="noreferrer" target="_blank">
                    VK
                </a>
              </li>
              <li className="main__list-item main__list-item_place_about-me">
              <a className="
                  main__social-media-link
                  main__social-media-link_place_about-me
                  opacity-animation"
                  href="https://github.com/bxnchxfxtxms" rel="noreferrer" target="_blank">
                    Github
                </a>
              </li>
            </ul>
          </div>
          <img className="about-me__student-photo" src={studentImage} alt="Фото студента"/>
        </div>
        <Portfolio/>
      </section>
    )
  }
}

export default AboutMe
