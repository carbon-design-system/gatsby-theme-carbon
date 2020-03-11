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
      aria-label="This launches a modal form to give website feedback."
    >
      <ChatBot20 />
    </button>
  );
});

export default LaunchButton;
