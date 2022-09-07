import React from 'react';

class MoviesCard extends React.Component {

  isBookmarked = () => {
    return this.props.savedMovies.some(movie => movie.movieId === this.props.movieData.id)
  }

  handleDeleteIconClick = () => {
    this.props.onDeleteIconClick(this.props.movieData)
  }

  handleBookmarkIconClick = () => {
    this.props.onBookmarkIconClick(this.props.movieData)
  }

  render() {
    return (
      <li className="MoviesCard">
        <h2 className="movies-card__movie-title">{this.props.title}</h2>
        <p className="movies-card__movie-duration">
          {`${parseInt(this.props.duration / 60)}ч ${this.props.duration % 60}м`}
        </p>
        {this.props.path === '/saved-movies' ? (
          <button type="button" onClick={this.handleDeleteIconClick} className='movies-card__bookmark-button movies-card__bookmark-button_type_saved'>
          </button>
          ) : (
            <button type="button" onClick={this.handleBookmarkIconClick} className={`
              movies-card__bookmark-button
              ${this.isBookmarked() ? 'movies-card__bookmark-button_type_bookmarked' : ''}`}>
            </button>
          )}
        <a href={this.props.trailerLink} target="_blank" rel="noreferrer" className="movies-card__movie-picture">
          <img
            className="movies-card__movie-picture"
            src={this.props.path === '/saved-movies' ? this.props.image : `https://api.nomoreparties.co/${this.props.image.url}`}
            alt={this.props.title}/>
        </a>
      </li>
    )
  }
}

export default MoviesCard
