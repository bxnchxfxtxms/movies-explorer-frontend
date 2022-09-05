import React from 'react';

class AboutProject extends React.Component {
  render() {
    return (
      <section id="AboutProject" className="AboutProject">
        <h2 className="section__title">
          О проекте
        </h2>
        <div className="about-project__paragraph-containers">
          <div className="about-project__paragraph-container">
            <p className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="main__paragraph">
              Составление плана, работу над бэкендом, вёрстку,
              добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__paragraph-container">
            <p className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="main__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__week-counter-container">
          <span className="about-project__week-counter about-project__week-counter_color_black">
            1 неделя
          </span>
          <span className="about-project__week-counter about-project__week-counter_color_grey">
            4 недели
          </span>
          <p className="about-project__week-counter-caption">
            Back-end
          </p>
          <p className="about-project__week-counter-caption">
            Front-end
          </p>
        </div>
      </section>
    )
  }
}

export default AboutProject
