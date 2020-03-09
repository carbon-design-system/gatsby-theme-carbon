import React from 'react';
import { ChatBot20 } from '@carbon/icons-react';
import styles from './LaunchButton.module.scss';

const LaunchButton = React.forwardRef(function LaunchButton({ onClick }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      aria-haspopup
      className={styles.button}
      onClick={onClick}
    >
      <ChatBot20 />
    </button>
  );
});

export default LaunchButton;
