import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

class MoviesCardList extends React.Component {

  render() {
    return (
      <section className="MoviesCardList">
          <ul className="movies-card-list__list">
            {this.props.movies.map(movie => (
              <MoviesCard
                key={movie.id}
                image={movie.image}
                isBookmarked={movie.isBookmarked}
                path={this.props.path}
              />
            ))}
          </ul>
        <button type="button" className="movies-card-list__more-button opacity-animation opacity-animation_type_darkening">
          Ещё
        </button>
      </section>
    )
  }
}

export default MoviesCardList
