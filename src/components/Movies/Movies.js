import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader'

class Movies extends React.Component {

  componentDidMount = () => {
    this.props.onResetSearchInitializer()
    this.props.onResetMovieSearchFailure()
    const localStorageData = {
      keyWord: localStorage.getItem('key-word'),
      movies: JSON.parse(localStorage.getItem('found-movies')),
    }
      this.props.onHandleComponentMount(localStorageData)
  }

  render() {
    return (
      <div className="Movies">
        <SearchForm
          onShortFilmSwitchChange={this.props.onShortFilmSwitchChange}
          isShortFilmSwitchActive={this.props.isShortFilmSwitchActive}
          keyWord={this.props.keyWord}
          onFindMovies={this.props.onFindMovies}/>
        {this.props.renderLoader && 
          <Preloader/>
        }
          {(!this.props.renderLoader
            &&
            this.props.movies.length <= 0
            &&
            this.props.isSearchInitialized
            &&
            !this.props.isMovieSearchFailed
            ) &&
            <span className="notification notification_place_movies-list">Ничего не найдено</span>
          }
          {(!this.props.renderLoader
            &&
            this.props.movies.length <= 0
            &&
            this.props.isSearchInitialized
            &&
            this.props.isMovieSearchFailed
            ) &&
            <span className="notification notification_place_movies-list">
              Во время запроса произошла ошибка.
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз
            </span>
          }
        {!this.props.renderLoader &&
          <MoviesCardList
            isSearchInitialized={this.props.isSearchInitialized}
            savedMovies={this.props.savedMovies}
            onBookmarkIconClick={this.props.onBookmarkIconClick}
            onLoadMore={this.props.onLoadMore}
            cardCounter={this.props.cardCounter}
            movies={this.props.movies}
            path={this.props.path}
          />
        }
      </div>
    )
  }
}

export default Movies
