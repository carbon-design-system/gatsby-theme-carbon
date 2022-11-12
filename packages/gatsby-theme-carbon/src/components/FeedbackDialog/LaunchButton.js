import React from 'react';
import { button } from './LaunchButton.module.scss';

function LaunchButton({ onClick, icon: RegularIcon }) {
  return (
    <button
      type="button"
      aria-haspopup
      className={button}
      onClick={onClick}
      aria-label="This launches a modal form to give website feedback.">
      <RegularIcon size={20} />
    </button>
  );
}

export default LaunchButton;
