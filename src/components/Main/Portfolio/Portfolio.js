import React from 'react'
import linkArrow from '../../../images/about-me-link-arrow.svg' 

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Potfolio">
        <h4 className="portfolio__title">
          Портфолио
        </h4>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link opacity-animation" href="https://bxnchxfxtxms.github.io/how-to-learn/" rel="noreferrer" target="_blank">
            Статичный сайт
          </a>
          <a className="portfolio__link" href="https://bxnchxfxtxms.github.io/how-to-learn/" rel="noreferrer" target="_blank">
            <img className="portfolio__link-arrow opacity-animation" src={linkArrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link opacity-animation" href="https://bxnchxfxtxms.github.io/russian-travel/" rel="noreferrer" target="_blank">
            Адаптивный сайт
          </a>
          <a className="portfolio__link" href="https://bxnchxfxtxms.github.io/russian-travel/" rel="noreferrer" target="_blank">
            <img className="portfolio__link-arrow opacity-animation" src={linkArrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link opacity-animation" href="https://mest0.students.nomoredomains.xyz/" rel="noreferrer" target="_blank">
            Одностраничное приложение
          </a>
          <a className="portfolio__link" href="https://mest0.students.nomoredomains.xyz/" rel="noreferrer" target="_blank">
            <img className="portfolio__link-arrow opacity-animation" src={linkArrow} alt="Стрелка"/>
          </a>
        </li>
      </ul>
      </div>
    )
  }
}

export default Portfolio
