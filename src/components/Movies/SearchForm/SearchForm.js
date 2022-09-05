import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      // isShortFilmSwitchActive: this.props.isShortFilmSwitchActive === 'true' ? true : false,
      isShortFilmSwitchActive: this.props.isShortFilmSwitchActive,
      isSearchInitiaized: false
    }
  }

  componentDidMount = () => {
    this.props.path === '/saved-movies'
    ?
    this.setState({
      word: '',
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
      [name]: value
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
    this.props.onFindSavedMovies(this.state)
    :
    this.props.onFindMovies(this.state)
  }

  handleShortFilmSwitchClick = () => {
    this.handleShortMovieSwitchToggle()
    this.props.onShortFilmSwitchChange(!this.state.isShortFilmSwitchActive)
    this.handleMovieSearch()
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.handleMovieSearch()
  }

  render() {
    return (
      <section className="SearchForm">
        <form onSubmit={this.handleSubmit} className="search-form">
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
                className="search-form__submit-button opacity-animation"
                type="submit"
                name="find">
                  Найти
              </button>
            </div>
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
