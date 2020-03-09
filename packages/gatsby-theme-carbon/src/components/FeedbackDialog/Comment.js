import React, { useRef } from 'react';
import styles from './Comment.module.scss';

const Comment = () => {
  const handleBlur = e => {
    e.target.scrollTop = 0;
  };

  return (
    <label className={styles.commentContainer} htmlFor="feedback-form-comment">
      Comments (optional):
      <textarea
        value="Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
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
