import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';

import Checkmark from './Checkmark';
import Experience from './Experience';
import Comment from './Comment';

import styles from './Form.module.scss';

const Form = ({
  visible,
  setVisible,
  animateButtonRow,
  setAnimateButtonRow,
  onSubmit: submitHandler,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();
  const experienceRef = useRef();
  const previouslyFocusedElement = useRef();
  const resetForm = () => {
    setFormSubmitted(false);
    formRef.current['feedback-form-comment'].value = '';
    formRef.current['feedback-form-experience'].value = 'Neutral';
  };

  useEffect(() => {
    if (visible) {
      previouslyFocusedElement.current = document.activeElement;
      experienceRef.current.focus();
    }
  }, [visible, setVisible]);

  const onSubmit = () => {
    const form = new FormData(formRef.current);
    const data = {
      experience: form.get('feedback-form-experience'),
      comment: form.get('feedback-form-comment'),
      path: window.location.href,
    };

    if (submitHandler) {
      submitHandler(data);
    }

    setFormSubmitted(true);

    setTimeout(() => {
      setVisible(false);
      setAnimateButtonRow(false);
      previouslyFocusedElement.current.focus();
      resetForm();
    }, 1000);
  };

  const onCancel = () => {
    setVisible(false);
    setAnimateButtonRow(false);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        setVisible(false);
        setAnimateButtonRow(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setVisible, setAnimateButtonRow]);

  return (
    <div className={cx(styles.dialog, { [styles.dialogActive]: visible })}>
      <div>
        <div
          className={styles.formContainer}
          role="dialog"
          aria-labelledby="feedback-dialog-label">
          <h2 id="feedback-dialog-label">Was this page helpful to you?</h2>
          <form ref={formRef}>
            <Experience ref={experienceRef} />
            <Comment />
          </form>
        </div>
        <div
          className={cx(styles.buttonRow, {
            [styles.buttonRowActive]: animateButtonRow,
          })}>
          <Button className={styles.button} onClick={onCancel} kind="secondary">
            Cancel
          </Button>
          <Button className={styles.button} onClick={onSubmit}>
            {formSubmitted ? 'Thank you' : 'Submit'}
            {formSubmitted && <Checkmark />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
