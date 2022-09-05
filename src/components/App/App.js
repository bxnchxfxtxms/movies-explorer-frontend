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
import Preloader from '../Movies/Preloader/Preloader'
import NavigationPopupMenu from '../NavigationPopupMenu/NavigationPopupMenu'
import { Route, Switch, withRouter } from 'react-router-dom'
import movie1 from '../../images/movie-1.jpg'
import movie2 from '../../images/movie-2.jpg'
import movie3 from '../../images/movie-3.jpg'
import movie4 from '../../images/movie-4.jpg'
import movie5 from '../../images/movie-5.jpg'
import movie6 from '../../images/movie-6.jpg'
import movie7 from '../../images/movie-7.jpg'
import movie8 from '../../images/movie-8.jpg'
import movie9 from '../../images/movie-9.jpg'
import movie10 from '../../images/movie-10.jpg'
import movie11 from '../../images/movie-11.jpg'
import movie12 from '../../images/movie-12.jpg'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      isNavigationPopupMenuOpen: false,
      movies: [
        {
          id: 1,
          image: movie1,
          isBookmarked: false
        },
        {
          id: 2,
          image: movie2,
          isBookmarked: false
        },
        {
          id: 3,
          image: movie3,
          isBookmarked: true
        },
        {
          id: 4,
          image: movie4,
          isBookmarked: false
        },
        {
          id: 5,
          image: movie5,
          isBookmarked: true
        },
        {
          id: 6,
          image: movie6,
          isBookmarked: false
        },
        {
          id: 7,
          image: movie7,
          isBookmarked: false
        },
        {
          id: 8,
          image: movie8,
          isBookmarked: false
        },
        {
          id: 9,
          image: movie9,
          isBookmarked: false
        },
        {
          id: 10,
          image: movie10,
          isBookmarked: true
        },
        {
          id: 11,
          image: movie11,
          isBookmarked: false
        },
        {
          id: 12,
          image: movie12,
          isBookmarked: false
        }
      ],
      savedMovies: [
        {
          id: 1,
          image: movie1,
          isBookmarked: false
        },
        {
          id: 2,
          image: movie2,
          isBookmarked: false
        },
        {
          id: 3,
          image: movie3,
          isBookmarked: true
        }
      ]
    }
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

  render() {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Main/>
            <Footer/>
          </Route>
          <Route path="/movies">
            <Header
              onMenuClick={this.handleOpenNavigationPopupMenu}
            />
            <Movies
              movies={this.state.movies}
            />
            <Footer/>
            <NavigationPopupMenu
              onClose={this.handleCloseNavigationPopupMenu}
              isOpen={this.state.isNavigationPopupMenuOpen}
            />
          </Route>
          <Route path="/saved-movies">
            <Header
              onMenuClick={this.handleOpenNavigationPopupMenu}
            />
            <SavedMovies
              movies={this.state.savedMovies}
              path='/saved-movies'
            />
            <Footer/>
            <NavigationPopupMenu
              onClose={this.handleCloseNavigationPopupMenu}
              isOpen={this.state.isNavigationPopupMenuOpen}
            />
          </Route>
          <Route path="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path="/signup">
            <Register/>
          </Route>
          <Route path="/signin">
            <Login/>
          </Route>
          <Route path="/preloader">
            <Preloader/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)