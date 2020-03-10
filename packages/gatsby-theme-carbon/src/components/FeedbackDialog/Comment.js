/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint doesn't know about TextArea labeling
import React from 'react';
import { TextArea } from 'carbon-components-react';
import styles from './Comment.module.scss';

const Comment = () => {
  const handleBlur = e => {
    e.target.scrollTop = 0;
  };

  return (
    <div className={styles.container}>
      <TextArea
        labelText="Comments (optional):"
        onBlur={handleBlur}
        rows={5}
        name="feedback-form-comment"
        id="feedback-form-comment"
      />
      <div className={styles.fadeout} />
    </div>
  );
};

export default Comment;
