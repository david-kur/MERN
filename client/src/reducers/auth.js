import { REG_SUCCESS, REG_FAIL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: null,
  user: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REG_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case REG_FAIL:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}
