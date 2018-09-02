import { GET_ERRORS, SET_CURRENT_USER } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return initialState;
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
