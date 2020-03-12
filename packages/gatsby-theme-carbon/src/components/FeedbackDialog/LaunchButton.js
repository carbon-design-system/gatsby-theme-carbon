import React, { useState } from 'react';
import { FaceWink20, FaceWinkFilled20 } from '@carbon/icons-react';
import styles from './LaunchButton.module.scss';

const LaunchButton = React.forwardRef(function LaunchButton(
  { onClick, visible },
  ref
) {
  const [hovering, setHovering] = useState(false);

  // TODO: hover && visible for both background change and inversion effects?
  // action on submit?
  return (
    <button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      ref={ref}
      type="button"
      aria-haspopup
      className={styles.button}
      onClick={onClick}
      aria-label="This launches a modal form to give website feedback."
    >
      {hovering ? <FaceWinkFilled20 /> : <FaceWink20 />}
    </button>
  );
});

export default LaunchButton;
