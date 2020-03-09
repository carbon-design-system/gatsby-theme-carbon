import React from 'react';
import styles from './Comment.module.scss';

const Comment = () => {
  const handleBlur = e => {
    e.target.scrollTop = 0;
  };

  return (
    <label className={styles.commentContainer} htmlFor="feedback-form-comment">
      Comments (optional):
      <textarea
        onBlur={handleBlur}
        rows={5}
        name="feedback-form-comment"
        id="feedback-form-comment"
      />
      <div className={styles.fadeout} />
    </label>
  );
};

export default Comment;
