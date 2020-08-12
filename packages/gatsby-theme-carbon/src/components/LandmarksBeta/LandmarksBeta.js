import React, { useState } from 'react';
import cx from 'classnames';
import { landmarksWrapper, landmarksActive } from './LandmarksBeta.module.scss';
import LandmarksButton from './LandmarksButton';

const LandmarksBeta = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cx(landmarksWrapper, { landmarksActive: active })}>
      {children}
      <LandmarksButton />
    </div>
  );
};

export default LandmarksBeta;
