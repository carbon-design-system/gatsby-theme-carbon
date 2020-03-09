import React from 'react';
import Experience from './Experience';

import styles from './Form.module.scss';

const Form = ({ hidden }) => (
  // const onSubmit = e => {
  //   console.log(e);
  // };

  <div
    hidden={hidden}
    className={styles.formContainer}
    role="dialog"
    aria-labelledby="feedback-dialog-label"
  >
    <h2 id="feedback-dialog-label">Was this page helpful to you?</h2>
    <form>
      <Experience />
    </form>
  </div>
);
export default Form;
