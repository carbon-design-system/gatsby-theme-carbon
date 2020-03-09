import React, { useRef } from 'react';
import { Button } from 'carbon-components-react';

import { useOnClickOutside } from '../../util/hooks';

import Experience from './Experience';
import Comment from './Comment';

import styles from './Form.module.scss';

const Form = ({ hidden, setVisible }) => {
  const formRef = useRef();
  const wrapperRef = useRef();

  useOnClickOutside(wrapperRef, () => {
    setVisible(false);
  });

  const onSubmit = () => {
    const data = new FormData(formRef.current);
    alert(`
    experience: ${data.get('feedback-form-experience')}
    comment: ${data.get('feedback-form-comment')}
    path: ${window.location}
    `);
  };

  return (
    <div ref={wrapperRef} className={styles.dialog} hidden={hidden}>
      <div
        className={styles.formContainer}
        role="dialog"
        aria-labelledby="feedback-dialog-label"
      >
        <h2 id="feedback-dialog-label">Was this page helpful to you?</h2>
        <form ref={formRef}>
          <Experience />
          <Comment />
        </form>
      </div>
      <div className={styles.buttonRow}>
        <Button onClick={() => setVisible(false)} kind="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Form;
