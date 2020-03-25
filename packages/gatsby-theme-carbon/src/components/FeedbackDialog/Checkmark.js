import React from 'react';
import styles from './Checkmark.module.scss';

const Checkmark = () => (
  <svg className={styles.svg} width="20" viewBox="0 0 28 28">
    <circle r="14" cx="14" cy="14" fill="#fff" />
    <polyline
      className={styles.path}
      points="7.8 13.75 12 17.95 20.2 9.8"
      fill="white"
      stroke="#0f62fe"
      strokeMiterlimit="10"
      strokeWidth="2.5"
    />
  </svg>
);

export default Checkmark;
