import { ALL_API_MOVIES } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_API_MOVIES:
      return action.payload
    default:
      return state
  }
}