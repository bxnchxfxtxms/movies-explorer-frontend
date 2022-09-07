import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      isShortFilmSwitchActive: this.props.isShortFilmSwitchActive === 'true' ? true : false,
      isSearchInitiaized: false,
      isButtonDisabled: true
    }
  }

  componentDidMount = () => {
    this.props.path === '/saved-movies'
    ?
    this.setState({
      word: null,
      isShortFilmSwitchActive: false,
    })
    :
    this.setState({
      word: localStorage.getItem('key-word'),
      isShortFilmSwitchActive: localStorage.getItem('short-film-switch-state') === 'true' ? true : false
    })
  }
 
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      isButtonDisabled: false
    })
  }

  enableShortMovieSwitch = () => {
    this.setState({
      isShortFilmSwitchActive: true
    })
    this.props.onShortFilmSwitchChange(this.state.isShortFilmSwitchActive)
  }
  
  disableShortMovieSwitch = () => {
    this.setState({
      isShortFilmSwitchActive: false
    })
    this.props.onShortFilmSwitchChange(this.state.isShortFilmSwitchActive)
  }

  handleShortMovieSwitchToggle = () => {
    this.state.isShortFilmSwitchActive
    ?
    this.disableShortMovieSwitch()
    :
    this.enableShortMovieSwitch()
  }

  handleMovieSearch = () => {
    this.props.path === '/saved-movies'
    ?
    this.props.onFindSavedMovies(this.state, this.state.isShortFilmSwitchActive)
    :
    this.props.onFindMovies(this.state, this.state.isShortFilmSwitchActive)
  }

  handleShortMovieSearch = () => {
    this.props.path === '/saved-movies'
    ?
    this.props.onFindSavedShortMovies(this.state, this.state.isShortFilmSwitchActive)
    :
    this.props.onFindShortMovies(this.state, this.state.isShortFilmSwitchActive)
  }

  handleShortFilmSwitchClick = () => {
    this.handleShortMovieSwitchToggle()
    this.props.onShortFilmSwitchChange(!this.state.isShortFilmSwitchActive)
    this.handleShortMovieSearch()
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.handleMovieSearch()
  }

  render() {
    return (
      <section className="SearchForm">
        <form
          onSubmit={this.handleSubmit}
          className="search-form"
          noValidate
        >
          <fieldset className="search-form__input-fields">
            <div className="search-form__search-form-container">
              <input
                className="search-form__field"
                required
                id="movie"
                name="word"
                type="text"
                value={this.state.word || ''}
                onChange={this.handleChange}
                placeholder="Фильм"/>
              <button
                className={`search-form__submit-button ${this.state.isButtonDisabled || this.state.word === '' ? `form__submit-button_disabled` : `opacity-animation`}`}
                type="submit"
                disabled={this.state.isButtonDisabled || this.state.word === ''}
                name="find">
                  Найти
              </button>
            </div>
            <span className="notification notification_place_search-form">{ this.state.word === '' ? 'Нужно ввести ключевое слово' : ''}</span>
            <div className="search-form__short-film-switch-container">
              <input
                className="search-form__short-film-switch"
                id="short-film-switch"
                type="checkbox"
                name="short-film-switch"
                checked={this.state.isShortFilmSwitchActive}
                onChange={this.handleShortFilmSwitchClick}>
              </input>
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
