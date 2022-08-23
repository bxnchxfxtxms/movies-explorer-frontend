import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <section className="SearchForm">
        <form className="search-form">
          <fieldset className="search-form__input-fields">
            <div className="search-form__search-form-container">
              <input
                className="search-form__field"
                required
                id="email"
                name="email"
                type="email"
                placeholder="Фильм"
              />
              <button className="search-form__submit-button opacity-animation" type="submit" name="find">
                Найти
              </button>
            </div>
            <div className="search-form__short-film-switch-container">
              <input className="search-form__short-film-switch" type="checkbox" name="short-film-switch"></input>
              <span className="search-form__switch-caption">
                Короткометражки
              </span>
            </div>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default SearchForm
