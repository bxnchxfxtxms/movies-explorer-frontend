import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

class SavedMovies extends React.Component {
  
  componentDidMount = () => {
    this.props.onResetSearchInitializer()
    this.props.onResetMovieSearchFailure()
    this.props.onHandleComponentMount()
  }

  render() {
    return (
      <div className="Movies">
        <SearchForm
          onShortFilmSwitchChange={this.props.onShortFilmSwitchChange}
          isShortFilmSwitchActive={this.props.isShortFilmSwitchActive}
          keyWord={this.props.keyWord}
          onFindSavedMovies={this.props.onFindSavedMovies}
          path={this.props.path}/>
          {(this.props.foundedSavedMovies.length <= 0
            &&
            this.props.isSearchInitialized
            &&
            !this.props.isMovieSearchFailed
            ) &&
            <h1>Ничего не найдено</h1>
          }
        <MoviesCardList
          isSearchInitialized={this.props.isSearchInitialized}
          movies={this.props.movies}
          savedMovies={this.props.savedMovies}
          foundedSavedMovies={this.props.foundedSavedMovies}
          onDeleteIconClick={this.props.onDeleteIconClick}
          onLoadMore={this.props.onLoadMore}
          cardCounter={this.props.cardCounter}
          path={this.props.path}/>
      </div>
    )
  }
}

export default SavedMovies
