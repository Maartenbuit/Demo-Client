import { url } from './constants'
import request from 'superagent'

export const ALL_MOVIES = 'ALL_MOVIES'

export function allMovies(movies) {
  return {
    type: ALL_MOVIES,
    payload: movies
  }
}

export const getMovies = () => (dispatch, getState) => {
  const state = getState()
  const { movies } = state

  if (!movies.length) {
    request(`${url}/crawls`)
      .then(response => {
        const action = allMovies(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

// export const JWT = 'JWT'

// function jwt(payload) {
//   return {
//     type: JWT,
//     payload
//   }
// }

// export const login = (email, password) => dispatch => {
//   request
//     .post(`${url}/login`)
//     .send({ email, password })
//     .then(res => {
//       const action = jwt(res.body)
//       dispatch(action)
//     })
//     .catch(console.error)
// }

