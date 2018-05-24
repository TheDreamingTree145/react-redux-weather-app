import { FETCH_CITY } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case `${FETCH_CITY}_FULFILLED`:
      return [...state, action.payload.data]
    case `${FETCH_CITY}_PENDING`:
      return state;
    case `${FETCH_CITY}_REJECTED`:
      error: action.payload
  }
  return state;
}
