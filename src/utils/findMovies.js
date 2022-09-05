export const findMovies = (movies, keyWord, switchState) => {
  const result = movies.filter((movie) => {
    return JSON.stringify(Object.values(movie)).toLowerCase().includes(keyWord.toLowerCase())
  })
  return switchState ? result.filter((movie) => movie.duration <= 40) : result
}
