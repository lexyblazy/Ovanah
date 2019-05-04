import {
  DEFAULT_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INCORRECT_PASSWORD,
} from '../actions/constants';

const INITIAL_STATE = { isAuthenticated: false, password: DEFAULT_PASSWORD };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: INCORRECT_PASSWORD,
      };
    default:
      return state;
  }
}
