import React, { useState } from 'react';
import cx from 'classnames';
import { landmarksWrapper, landmarksActive } from './LandmarksBeta.module.scss';

const LandmarksBeta = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cx(landmarksWrapper, { landmarksActive: active })}>
      {children}
    </div>
  );
};

export default LandmarksBeta;
