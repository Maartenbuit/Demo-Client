import { ALL_SPACESHIPS, EMPTY_STORE } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
       case ALL_SPACESHIPS:
      return [...action.payload.results, ...state]
      case EMPTY_STORE:
      return action.payload
    default:
      return state
  }
}