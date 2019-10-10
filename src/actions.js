import { url } from './constants'
import request from 'superagent'

export const EMPTY_STORE = 'EMPTY_STORE'
export function emptyStore(){
  //console.log('ACTION CREATER EMPTY STORE')
  return{
    type: EMPTY_STORE,
    payload: []
  }
}

export const ALL_API_MOVIES = 'ALL_API_MOVIES'
export function allApiMovies(movies){
  return{
    type: ALL_API_MOVIES,
    payload: movies
  }
}
export const getApiMovies = () => (dispatch, getState) => {
  request(`https://swapi.co/api/films/`)
      .then(res => {
        const action = allApiMovies(res.body)
        dispatch(action)
        // console.log(res.body)
      })
      .catch(console.error)
}

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
      .then(res => {
        const action = allMovies(res.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

export const ALL_CHARS = 'ALL_CHARS'

export function allChars(chars) {
  return {
    type: ALL_CHARS,
    payload: chars
  }
}
// export async function asyncGetChars(){
export const getChars = (page=1) => (dispatch, getState) => {
  // dispatch(emptyStore())
  request(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        const action = allChars(res.body)
        dispatch(action)
        //console.log(res.body)

        if(res.body.next){
          //console.log('fetch next')
          getChars(page + 1)(dispatch, getState)
        }
      })
      .catch(console.error)
  } 
// } 

export const ALL_PLANETS = 'ALL_PLANETS'

export function allPlanets(planets) {
  return {
    type: ALL_PLANETS,
    payload: planets
  }
}

export const getPlanets = (page=1) => (dispatch, getState) => {
 
    request(`https://swapi.co/api/planets/?page=${page}`)
      .then(res => {
        const action = allPlanets(res.body)
        dispatch(action)
        //console.log('ACTIONPLANET',res.body)
        if(res.body.next){
          //console.log('fetch next')
          getPlanets(page + 1)(dispatch, getState)
        }
      })
      .catch(console.error)
  } 
  export const ALL_SPACESHIPS = 'ALL_SPACESHIPS'

  export function allSpaceships(spaceships) {
    return {
      type: ALL_SPACESHIPS,
      payload: spaceships
    }
  }
  
  export const getSpaceships = (page=1) => (dispatch, getState) => {
   
      request(`https://swapi.co/api/starships/?page=${page}`)
        .then(res => {
          const action = allSpaceships(res.body)
          dispatch(action)
          //console.log('ACTIONPLANET',res.body)
          if(res.body.next){
            //console.log('fetch next')
            getSpaceships(page + 1)(dispatch, getState)
          }
        })
        .catch(console.error)
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

