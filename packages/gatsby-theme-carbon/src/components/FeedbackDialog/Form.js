import React, { useRef, useEffect } from 'react';
import { Button } from 'carbon-components-react';

import { useOnClickOutside } from '../../util/hooks';

import Experience from './Experience';
import Comment from './Comment';

import styles from './Form.module.scss';

const Form = ({ visible, setVisible, launchButtonRef }) => {
  const formRef = useRef();
  const wrapperRef = useRef();
  const experienceRef = useRef();

  useOnClickOutside(wrapperRef, e => {
    // let button determine visibility
    if (!launchButtonRef.current.contains(e.target)) {
      setVisible(false);
    }
  });

  const onSubmit = () => {
    const form = new FormData(formRef.current);
    // const data = {
    //   experience: form.get('feedback-form-experience'),
    //   comment: form.get('feedback-form-comment'),
    //   path: window.location.href,
    // };

    // fetch('http://localhost:34567/.netlify/functions/survey', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });

    alert(`
    experience: ${form.get('feedback-form-experience')}
    comment: ${form.get('feedback-form-comment')}
    path: ${window.location.href}
    `);
  };

  useEffect(() => {
    if (visible && experienceRef.current) {
      experienceRef.current.focus();
    }
  }, [visible]);

  return (
    <div ref={wrapperRef} className={styles.dialog} hidden={!visible}>
      <div
        className={styles.formContainer}
        role="dialog"
        aria-labelledby="feedback-dialog-label"
      >
        <h2 id="feedback-dialog-label">Was this page helpful to you?</h2>
        <form ref={formRef}>
          <Experience ref={experienceRef} />
          <Comment />
        </form>
      </div>
      <div className={styles.buttonRow}>
        <Button
          className={styles.button}
          onClick={() => setVisible(false)}
          kind="secondary"
        >
          Cancel
        </Button>
        <Button className={styles.button} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
