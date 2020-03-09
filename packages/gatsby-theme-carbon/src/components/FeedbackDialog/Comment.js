import React from 'react';
import styles from './Comment.module.scss';

const Comment = () => (
  <label className={styles.commentContainer} htmlFor="feedback-form-comment">
    Comments (optional):
    <textarea
      rows={5}
      name="feedback-form-comment"
      id="feedback-form-comment"
    />
  </label>
);

export default Comment;
