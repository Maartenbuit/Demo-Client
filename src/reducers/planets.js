import { ALL_PLANETS, EMPTY_STORE } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_PLANETS:
      return [...action.payload.results, ...state]
    case EMPTY_STORE:
      return action.payload
    default:
      return state
  }
}