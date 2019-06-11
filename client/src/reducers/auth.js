import {
  REG_SUCCESS,
  REG_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: null,
  user: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REG_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case REG_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    case USER_LOADED:
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    default:
      return state;
  }
}
