import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const AddComment = ({ addComment, postId }) => {
  const [text, setText] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, { text });
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Add a comment...</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Leave a comment"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(AddComment);
