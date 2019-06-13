import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return { ...state, loading: false, profile: payload };
    case GET_PROFILES:
      return { ...state, loading: false, profiles: payload };
    case PROFILE_ERROR:
      return { ...state, profile: null, loading: false, error: payload };
    case CLEAR_PROFILE:
      return { ...state, profile: null, repos: [], loading: false, error: {} };
    default:
      return state;
  }
}
