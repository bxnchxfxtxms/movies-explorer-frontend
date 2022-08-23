import React from 'react'
import { Link } from 'react-router-dom'

class PageNotFound extends React.Component {
  render() {
    return (
      <section className="PageNotFound">
        <h3 className="page-not-found__title">
          404
        </h3>
        <p className="page-not-found__subtitle">
          Страница не найдена
        </p>
        <Link className="page-not-found__go-back-button opacity-animation" to="/">
          Назад
        </Link>
      </section>
    )
  }
}

export default PageNotFound
