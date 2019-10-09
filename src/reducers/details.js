import { ALL_CHARS, EMPTY_STORE } from '../actions'

export default function (state = [], action = {}) {
// console.log('EMPTY',action.type)
  switch(action.type) {
    case ALL_CHARS: 
      return [...action.payload.results, ...state]
    case EMPTY_STORE:
      return action.payload
    default:
      return state
  }
}





// const chars = [5,6,7,8]
// const state = [0,1,2,3]

// // States
// const base = []
// const base = [...state]
// const base = [0,1,2,3]

// const base = [0,1,2,3]
// concat()
