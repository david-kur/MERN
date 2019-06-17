import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, DELETE_POST } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/post/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    dispatch(setAlert('Post deleted', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
