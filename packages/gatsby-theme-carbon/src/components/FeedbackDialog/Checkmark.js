import React from 'react';
import styles from './Checkmark.module.scss';

const Checkmark = () => (
  <svg className={styles.svg} width="24" viewBox="0 0 32 32">
    <circle
      cx="16"
      cy="16"
      r="12"
      stroke="white"
      fill="white"
      strokeWidth="2.5"
    />
    <polygon
      className="checkmark"
      points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"
    />
  </svg>
);

export default Checkmark;
