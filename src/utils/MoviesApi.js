class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }


  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
    headers: this._headers
  })
  .then(this._checkResponse)
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
})
