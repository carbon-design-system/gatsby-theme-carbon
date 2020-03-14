import React from 'react';
import cx from 'classnames';
import styles from './LaunchButton.module.scss';

function LaunchButton({
  onClick,
  visible,
  icon: Icon,
  filledIcon: FilledIcon,
}) {
  const classNames = cx(styles.button, {
    [styles.selected]: visible,
  });

  return (
    <button
      type="button"
      aria-haspopup
      className={classNames}
      onClick={onClick}
      aria-label="This launches a modal form to give website feedback."
    >
      {visible ? <FilledIcon /> : <Icon />}
    </button>
  );
}

export default LaunchButton;
