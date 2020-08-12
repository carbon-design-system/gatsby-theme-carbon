import React, { useState } from 'react';
import cx from 'classnames';
import { Toggle } from 'carbon-components-react';
import {
  landmarksWrapper,
  landmarksActive,
  landmarksModal,
} from './LandmarksBeta.module.scss';
import LandmarksButton from './LandmarksButton';

const LandmarksBeta = ({ children }) => {
  const [active, setActive] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  const handleToggle = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div className={cx(landmarksWrapper, { [landmarksActive]: highlighted })}>
      {children}
      {active && (
        <div className={landmarksModal}>
          {' '}
          <Toggle onToggle={handleToggle} />
        </div>
      )}
      <LandmarksButton onClick={onClick} />
    </div>
  );
};

export default LandmarksBeta;
