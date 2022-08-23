import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

class Movies extends React.Component {
  render() {
    return (
      <div className="Movies">
        <SearchForm/>
        <MoviesCardList
          movies={this.props.movies}
          path={this.props.path}
        />
      </div>
    )
  }
}

export default Movies
