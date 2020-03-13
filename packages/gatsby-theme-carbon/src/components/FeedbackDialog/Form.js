import React, { useRef } from 'react';
import { Button } from 'carbon-components-react';
import { CSSTransition } from 'react-transition-group';

import { useOnClickOutside } from '../../util/hooks';

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

const Form = ({
  visible,
  setVisible,
  launchButtonRef,
  onSubmit: submitHandler,
}) => {
  const formRef = useRef();
  const wrapperRef = useRef();
  const experienceRef = useRef();
  const previouslyFocusedElement = useRef();

  useOnClickOutside(wrapperRef, e => {
    // let button determine visibility
    if (!launchButtonRef.current.contains(e.target)) {
      setVisible(false);
    }
  });

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

    setVisible(false);
  };

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
      }}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
    >
      <div ref={wrapperRef} className={styles.dialog}>
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
    </CSSTransition>
  );
};

export default Form;
