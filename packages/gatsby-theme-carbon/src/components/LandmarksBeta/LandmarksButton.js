import React from 'react';
import cx from 'classnames';
import { AccessibilityAlt32 } from '@carbon/icons-react';
import styles from '../FeedbackDialog/LaunchButton.module.scss';
import { landmarksButton } from './LandmarksBeta.module.scss';

// function LandmarksButton({ onClick, visible, icon: AccessibilityAlt32 }) {
//   const classNames = cx(styles.button, {
//     [styles.selected]: visible,
//   });

//   return (
//     <button
//       type="button"
//       aria-haspopup
//       className={classNames}
//       onClick={onClick}
//       aria-label="This launches a modal to activate or deactivate landmark highlighting">
//       {visible ? <AccessibilityAlt32 /> : <AccessibilityAlt32 />}
//     </button>
//   );
// }

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
