import { ALL_MOVIES } from '../actions'

export default function (state = [], action = {}) {
  switch(action.type) {
    case ALL_MOVIES: 
      return action.payload
    default:
      return state
  }
}