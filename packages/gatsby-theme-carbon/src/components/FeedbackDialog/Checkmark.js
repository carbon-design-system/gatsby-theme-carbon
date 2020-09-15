import React from 'react';
import styles from './Checkmark.module.scss';

const Checkmark = () => (
  <svg
    className={styles.svg}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    width="32"
    height="32">
    <circle
      className={styles.circle}
      cx="26"
      cy="26"
      r="25"
      strokeWidth="5"
      fill="none"
    />
    <path
      className={styles.checkmark}
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
      strokeWidth="4"
      stroke="#0f62fe"
    />
  </svg>
);

export default Checkmark;
