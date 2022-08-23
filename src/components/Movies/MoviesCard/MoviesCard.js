import React from 'react';

class MoviesCard extends React.Component {
  render() {
    return (
      <li className="MoviesCard">
        <h2 className="movies-card__movie-title">33 слова о дизайне</h2>
        <p className="movies-card__movie-duration">1ч 47м</p>
        <button className={`
          movies-card__bookmark-button
          ${this.props.isBookmarked ? 'movies-card__bookmark-button_type_bookmarked' : ''}
          ${this.props.path === '/saved-movies' ? 'movies-card__bookmark-button_type_saved' : ''}`}></button>
        <img className="movies-card__movie-picture" src={this.props.image} alt="33 слова о дизайне"/>
      </li>
    )
  }
}

export default MoviesCard
