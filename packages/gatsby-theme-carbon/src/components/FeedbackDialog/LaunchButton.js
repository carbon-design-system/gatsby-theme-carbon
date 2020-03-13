import React, { useState } from 'react';
import styles from './LaunchButton.module.scss';

const LaunchButton = React.forwardRef(function LaunchButton(
  { onClick, icon: Icon, filledIcon: FilledIcon },
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
      {hovering ? <FilledIcon /> : <Icon />}
    </button>
  );
});

export default LaunchButton;
