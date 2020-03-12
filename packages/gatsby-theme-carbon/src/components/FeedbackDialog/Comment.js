/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint doesn't know about TextArea labeling
import React, { useState } from 'react';
import { TextArea } from 'carbon-components-react';
import cx from 'classnames';
import styles from './Comment.module.scss';

const Comment = () => {
  const [focused, setFocused] = useState(false);
  const handleBlur = e => {
    e.target.scrollTop = 0;
    setFocused(false);
  };

  return (
    <div className={styles.container}>
      <TextArea
        className={styles.textarea}
        labelText="Comments (optional):"
        onBlur={handleBlur}
        onFocus={() => setFocused(true)}
        rows={5}
        name="feedback-form-comment"
        id="feedback-form-comment"
      />
      <div
        className={cx(styles.fadeout, {
          [styles.focused]: focused,
        })}
      />
    </div>
  );
};

export default Comment;
