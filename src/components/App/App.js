import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import NavigationPopupMenu from '../NavigationPopupMenu/NavigationPopupMenu'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { moviesApi } from '../../utils/MoviesApi'
import { mainApi } from '../../utils/MainApi'
import { auth } from '../../utils/Auth'
import { getLoadStep, getInitialCount } from '../../utils/getLoadStep'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { findMovies } from '../../utils/findMovies'

class App extends React.Component {

  static contextType = CurrentUserContext

  constructor(props) {
    super(props)

    this.state = {
      authMessage: '',
      isNotificationSent: false,
      isLoginSuccessful: true,
      isMovieSearchFailed: false,
      isSearchInitialized: true,
      isShortFilmSwitchActive: false,
      keyWord: '',
      renderLoader: false,
      currentUser: {},
      loggedIn: false,
      isNavigationPopupMenuOpen: false,
      movies: [],
      savedMovies: [],
      foundedSavedMovies: [],
      width: window.innerWidth,
      cardCounter: getInitialCount(window.innerWidth),
      email: ''
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener)
    this.setUserInfo()
    console.log(this.state.loggedIn)
  }
  
  componentDidUpdate() {
    window.addEventListener('resize', this.resizeListener)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
  }

  setLocalStorageData = (data) => {
    localStorage.setItem('found-movies', JSON.stringify(findMovies(JSON.parse(localStorage.getItem('movies')), data.word, data.isShortFilmSwitchActive === 'true' ? true : false)))
    localStorage.setItem('short-film-switch-state', JSON.stringify(!data.isShortFilmSwitchActive))
    localStorage.setItem('key-word', data.word)
  }

  removeLocalStorageData = () => {
    localStorage.removeItem('found-movies')
    localStorage.removeItem('short-film-switch-state')
    localStorage.removeItem('key-word')
  }

  resizeListener = () => {
    setTimeout(() => {
      this.setState({
        width: window.innerWidth
      })
      console.log(this.state.width)
    }, 1500)
  }

  getSavedMovies = () => {
    mainApi.getSavedMovies()
    .then(res => {
      this.setState({
        savedMovies: res
      })
    })
  }

  setUserInfo = () => {
    auth.getUserInfo()
    .then(userData => {
      if (userData._id) {
        this.setState({
          currentUser: {
            _id: userData._id,
            name: userData.name,
            email: userData.email
          },
          loggedIn: true,
        })
        mainApi.getSavedMovies()
        .then(res => {
          this.setState({
            savedMovies: res
          })
        })
        this.props.history.push('/movies')
        .catch(err => { 
          console.log(err)
        })
      }
    })
    .catch(err => { 
      console.log(err)
    })
  }
  
  getAllMovies = (data) => {
    const localMovies = localStorage.getItem('movies')
    if (localMovies) {
      try {
        this.setState({
          movies: findMovies(JSON.parse(localMovies), data.word, data.isShortFilmSwitchActive)
        })
        this.resetMovieSearchFailure()
        this.setLocalStorageData(data)
      } catch(err) {
        localStorage.removeItem('movies')
        this.fetchMoives(data)
      }
    } else {
      this.fetchMovies(data)
    }
  }
  
  fetchMovies = (data) => {
    this.setState({
      renderLoader: true
    })
    moviesApi.getMovies()
    .then((res) => {
      this.resetMovieSearchFailure()
      localStorage.setItem('movies', JSON.stringify(res))
      this.setLocalStorageData(data)
      const localMovies = localStorage.getItem('movies')
      this.setState({
        movies: findMovies(JSON.parse(localMovies), data.word, data.isShortFilmSwitchActive === 'true' ? true : false)
      })
    })
    .catch((err) => {
      console.log(err)
      this.setState({
        isMovieSearchFailed: true
      })
    })
    .finally(() => {
      this.setState({
        renderLoader: false
      })
    })
  }
  
  handleFindMovies = data => {
    this.getSavedMovies()
    this.setState({
      isSearchInitialized: true
    })
    console.log(this.state)
    this.handleSetKeyWord(data.word)
    this.getAllMovies(data)
  }
  
  handleFindSavedMovies = data => {
    console.log("Switch state for movie search: ", data.isShortFilmSwitchActive === 'true' ? true : false)
    console.log("Switch state: ", data.isShortFilmSwitchActive)
    this.handleSetKeyWord(data.word)
    this.setState({
      isSearchInitialized: true,
      foundedSavedMovies: findMovies(this.state.savedMovies, data.word, data.isShortFilmSwitchActive)
    })
    console.log(this.state)
  }

  handleSetKeyWord = word => {
    this.setState({
      keyWord: word
    })
  }

  handleSetUserData = serverData => {
    this.setState({
      currentUser: {
        _id: serverData._id,
        email: serverData.email,
        name: serverData.name,
      }
    })
  }

  handleBookmarkButtonClick = newMovieData => {
    mainApi.postNewMovie(newMovieData)
    .then(newMovie => {
      this.setState({
        savedMovies: [newMovie, ...this.state.savedMovies]
      })
    })
  }

  loadMoreMovies = () => {
    this.setState({
      cardCounter: this.state.cardCounter + getLoadStep(this.state.width)
    })
  }

  handleOpenNavigationPopupMenu = () => {
    this.setState({
      isNavigationPopupMenuOpen: true
    })
  }
  
  handleCloseNavigationPopupMenu = () => {
    this.setState({
      isNavigationPopupMenuOpen: false
    })
  }

  handleBookmarkMovie = movie => {
    const isBookmarked = this.state.savedMovies.some(savedMovie => savedMovie.movieId === movie.id)
    const movieToRemove = this.state.savedMovies.find(savedMovie => savedMovie.movieId === movie.id)

    isBookmarked ?
    mainApi.removeMovie(movieToRemove._id)
    .then((newMovie) => {
      this.setState({
        savedMovies: this.state.savedMovies.map((savedMovie) => savedMovie.movieId === movie.id ? newMovie : savedMovie)
      })
    })
    .catch(err => { 
      console.log(err)
    }) :
    mainApi.postNewMovie(movie)
    .then((newMovie) => {
      this.setState({
        savedMovies: [newMovie, ...this.state.savedMovies]
      })
    })
    .catch(err => { 
      console.log(err)
    })
  }

  handleDeleteIconClick = movie => {
    mainApi.removeMovie(movie._id)
    .then(() => {
      this.setState({
        savedMovies: this.state.savedMovies.filter((savedMovie) => !(savedMovie._id === movie._id))
      })
    })
    .catch(err => { 
      console.log(err)
    })
  }

  handleChangeShortSwitchState = data => {
    // console.log('current switch state: ', !data)
    this.setState({
      isShortFilmSwitchActive: data === 'true' ? true : false,
    })
  }

  handleMoviesListMount = data => {
    if (data.movies) {
      this.getSavedMovies()
      this.setState({
        isShortFilmSwitchActive: data.isShortFilmSwitchActive === 'true' ? true : false,
        keyWord: data.keyWord,
        movies: data.movies,
      })
    }
  }

  handleSavedMoviesListMount = () => {
    this.getSavedMovies()
  }

  handleRegister = data => {
    auth.register(data.name, data.email, data.password)
    .then((res) => {
      if (res) {
        auth.authorize(data.email, data.password)
        .then((res) => {
          if (res) {
          this.setUserInfo()
          this.setState({
            loggedIn: true,
          })
          this.props.history.push('/movies')
        }
        })
        .catch(err => { 
          console.log(err)
        })
      }
    }) 
    .catch(err => { 
      this.setState({
        authMessage: 'При регистрации пользователя произошла ошибка',
        isNotificationSent: true
      })
      console.log(err)
    })
  }

  handleLogin = data => {
    this.setState({
      authorizationData: {
        email: data.email,
      }
    })
    auth.authorize(data.email, data.password)
    .then((res) => {
        if (res) {
        this.setUserInfo()
        this.setState({
          loggedIn: true,
        })
        this.props.history.push('/movies')
      }
    })
    .catch(err => { 
      this.setState({
        authMessage: 'При авторизации пользователя произошла ошибка'
      })
      console.log(err)
    })
  }

  handleUpdateProfile = newUserData => {
    mainApi.editUserInfo(newUserData)
    .then(userData => {
      this.handleSetUserData(userData)
    })
    .catch(err => { 
      console.log(err)
    })
  }

  resetSearchInitializer = () => {
    this.setState({
      isSearchInitialized: false
    })
  }

  resetMovieSearchFailure = () => {
    this.setState({
      isMovieSearchFailed: false
    })
  }

  resetNotification = () => {
    this.setState({
      authMessage: ''
    })
  }

  handleLogout = () => {
    console.log(this.state)
    auth.handleLogout()
    .then(() => {
    this.setState({
      currentUser: {},
      loggedIn: false,
      email: ''
    })
    this.removeLocalStorageData()
    this.props.history.push('/signin')
    })
    .catch(err => { 
      console.log(err)
    })
  }

  render() {
    return (
      <div className="page">
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Switch>
            <Route exact path="/">
              <Header
                loggedIn={this.state.loggedIn}
                onMenuClick={this.handleOpenNavigationPopupMenu}
                />
              <Main/>
              <Footer/>
              <NavigationPopupMenu
              onClose={this.handleCloseNavigationPopupMenu}
              isOpen={this.state.isNavigationPopupMenuOpen}
              />
            </Route>
            <ProtectedRoute
              loggedIn={this.state.loggedIn}
              path="/movies">
              <Header
                loggedIn={this.state.loggedIn}
                onMenuClick={this.handleOpenNavigationPopupMenu}
                />
                <Movies
                  isMovieSearchFailed={this.state.isMovieSearchFailed}
                  onHandleComponentMount={this.handleMoviesListMount}
                  onResetSearchInitializer={this.resetSearchInitializer}
                  onResetMovieSearchFailure={this.resetMovieSearchFailure}
                  onShortFilmSwitchChange={this.handleChangeShortSwitchState}
                  isSearchInitialized={this.state.isSearchInitialized}
                  isShortFilmSwitchActive={this.state.isShortFilmSwitchActive}
                  keyWord={this.state.keyWord}
                  onFindMovies={this.handleFindMovies}
                  renderLoader={this.state.renderLoader}
                  cardCounter={this.state.cardCounter}
                  movies={this.state.movies}
                  savedMovies={this.state.savedMovies}
                  onLoadMore={this.loadMoreMovies}
                  onBookmarkIconClick={this.handleBookmarkMovie}
                  path='/movies'/>
              <Footer/>
              <NavigationPopupMenu
                onClose={this.handleCloseNavigationPopupMenu}
                isOpen={this.state.isNavigationPopupMenuOpen}
                />
            </ProtectedRoute>
            <ProtectedRoute 
              loggedIn={this.state.loggedIn}
              path="/saved-movies">
              <Header
                loggedIn={this.state.loggedIn}
                onMenuClick={this.handleOpenNavigationPopupMenu}
                />
              <SavedMovies
                isMovieSearchFailed={this.state.isMovieSearchFailed}
                onHandleComponentMount={this.handleSavedMoviesListMount}
                onResetSearchInitializer={this.resetSearchInitializer}
                onResetMovieSearchFailure={this.resetMovieSearchFailure}
                onShortFilmSwitchChange={this.handleChangeShortSwitchState}
                isSearchInitialized={this.state.isSearchInitialized}
                isShortFilmSwitchActive={this.state.isShortFilmSwitchActive}
                keyWord={this.state.keyWord}
                onFindSavedMovies={this.handleFindSavedMovies}
                renderLoader={this.state.renderLoader}
                cardCounter={this.state.cardCounter}
                movies={this.state.movies}
                savedMovies={this.state.savedMovies}
                foundedSavedMovies={this.state.foundedSavedMovies}
                onLoadMore={this.loadMoreMovies}
                onDeleteIconClick={this.handleDeleteIconClick}
                path='/saved-movies'/>
              <Footer/>
              <NavigationPopupMenu
                onClose={this.handleCloseNavigationPopupMenu}
                isOpen={this.state.isNavigationPopupMenuOpen}
                />
            </ProtectedRoute>
            <ProtectedRoute
              loggedIn={this.state.loggedIn}
              path="/profile">
              <Header
                loggedIn={this.state.loggedIn}
              />
              <Profile
                onEditProfile={this.handleUpdateProfile}
                onLogoutClick={this.handleLogout}
              />
            </ProtectedRoute>
            <Route path="/signup">
              <Register
                isNotificationSent={this.state.isNotificationSent}
                authMessage={this.state.authMessage}
                onRegister={this.handleRegister}
                onResetNotification={this.resetNotification}
                />
            </Route>
            <Route path="/signin">
              <Login
                authMessage={this.state.authMessage}
                onLogin={this.handleLogin}
                onResetNotification={this.resetNotification}
              />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
            <Route exact path="/">
              {this.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    )
  }
}

export default withRouter(App)
