import React from 'react';
import { AccessibilityAlt32 } from '@carbon/icons-react';
import { landmarksButton } from './LandmarksBeta.module.scss';

function LandmarksButton({ onClick }) {
  return (
    <button
      type="button"
      aria-haspopup
      className={landmarksButton}
      onClick={onClick}
      aria-label="This launches a modal to activate or deactivate landmark highlighting">
      <AccessibilityAlt32 />
    </button>
  );
}

export default LandmarksButton;
