import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';

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
      return { ...state, loading: false, profile: payload };
    case PROFILE_ERROR:
      return { ...state, profile: null, loading: false, error: payload };
    case CLEAR_PROFILE:
      return { ...state, profile: null, repos: [], loading: false, error: {} };
    default:
      return state;
  }
}
