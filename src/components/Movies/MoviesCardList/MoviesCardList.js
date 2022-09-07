import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

class MoviesCardList extends React.Component {

  render() {
    return (
      <section className="MoviesCardList">
        {(this.props.path === '/saved-movies' && !this.props.isSearchInitialized) &&
          <ul className="movies-card-list__list">
            {this.props.savedMovies.map(movie => (
              <MoviesCard
                savedMovies={this.props.savedMovies}
                movieData={movie}
                onDeleteIconClick={this.props.onDeleteIconClick}
                duration={movie.duration}
                title={movie.nameRU}
                key={movie._id}
                image={movie.image}
                path={this.props.path}
                trailerLink={movie.trailerLink}
              />
            ))}
          </ul>}
        {(this.props.path === '/saved-movies' && this.props.isSearchInitialized && this.props.foundedSavedMovies.length > 0) &&
          <ul className="movies-card-list__list">
            {this.props.foundedSavedMovies.map(movie => (
              <MoviesCard
                savedMovies={this.props.savedMovies}
                movieData={movie}
                onDeleteIconClick={this.props.onDeleteIconClick}
                duration={movie.duration}
                title={movie.nameRU}
                key={movie._id}
                image={movie.image}
                trailerLink={movie.trailerLink}
                path={this.props.path}
                />
                ))}
          </ul>}
        {this.props.path === '/movies' &&
          <ul className="movies-card-list__list">
            {this.props.movies.slice(0, this.props.cardCounter).map(movie => (
              <MoviesCard
                savedMovies={this.props.savedMovies}
                movieData={movie}
                onBookmarkIconClick={this.props.onBookmarkIconClick}
                duration={movie.duration}
                title={movie.nameRU}
                key={movie.id}
                image={movie.image}
                trailerLink={movie.trailerLink}
                path={this.props.path}
              />
            ))}
          </ul>}
          {this.props.path === '/movies' &&
          <button type="button" onClick={this.props.onLoadMore} className={`
            movies-card-list__more-button
            ${this.props.cardCounter > this.props.movies.length
            ?
            'movies-card-list__more-button_disabled'
            :
            ''}
            opacity-animation
            opacity-animation_type_darkening`}>
              Ещё
          </button>}
      </section>
    )
  }
}

export default MoviesCardList
