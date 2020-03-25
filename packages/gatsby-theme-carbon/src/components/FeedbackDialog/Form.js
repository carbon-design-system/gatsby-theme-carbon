import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'carbon-components-react';
import { CSSTransition } from 'react-transition-group';

import Checkmark from './Checkmark';

import Experience from './Experience';
import Comment from './Comment';

import styles from './Form.module.scss';

const { enter, enterActive, enterDone, exit, exitActive, exitDone } = styles;

const classNames = {
  enter,
  enterActive,
  enterDone,
  exit,
  exitActive,
  exitDone,
};

const Form = ({ visible, setVisible, onSubmit: submitHandler }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();
  const experienceRef = useRef();
  const previouslyFocusedElement = useRef();

  const resetForm = () => {
    setFormSubmitted(false);
    formRef.current['feedback-form-comment'].value = '';
    formRef.current['feedback-form-experience'].value = 'Neutral';
  };

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
    }, 1200);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setVisible]);

  return (
    <CSSTransition
      in={visible}
      classNames={classNames}
      unmountOnExit
      mountOnEnter
      onEnter={() => {
        previouslyFocusedElement.current = document.activeElement;
        experienceRef.current.focus();
      }}
      onExited={() => {
        previouslyFocusedElement.current.focus();
        resetForm();
      }}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
    >
      <div className={styles.dialog}>
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
            {formSubmitted ? 'Thanks!' : 'Submit'}
            {formSubmitted && <Checkmark />}
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Form;
