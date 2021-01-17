import { NUM_MIN_CHANGE, NUM_MAX_CHANGE } from "../actions/actionTypes";

const initialState = {
  min:1,
  max:10
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUM_MIN_CHANGE:
      return {
        ...state,
        min: action.payload
      }
    case NUM_MAX_CHANGE:
      return {
        ...state,
        max: action.payload
      }    
    default:
      return state
  }
}