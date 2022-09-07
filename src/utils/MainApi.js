class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  removeMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
    .then(this._checkResponse)
  }
  
  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._checkResponse)
  }

  postNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      })
    })
    .then(this._checkResponse)
  }
}

export const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.m0viesexpl0rer.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
})
