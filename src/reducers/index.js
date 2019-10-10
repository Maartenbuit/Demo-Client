import { combineReducers } from 'redux'
import movies from './movies'
import details from './details'
import apiMovies from './apiMovies'
import planets from './planets'
import spaceships from './spaceships'

export default combineReducers({
  movies, details, apiMovies, planets, spaceships
  
})