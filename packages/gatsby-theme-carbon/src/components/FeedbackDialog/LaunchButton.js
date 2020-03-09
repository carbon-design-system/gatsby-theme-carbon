import React from 'react';
import { ChatBot20 } from '@carbon/icons-react';
import styles from './LaunchButton.module.scss';

const LaunchButton = ({ onClick }) => (
  <button
    type="button"
    aria-haspopup
    className={styles.button}
    onClick={onClick}
  >
    <ChatBot20 />
  </button>
);

export default LaunchButton;
