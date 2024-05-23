import React, { useState } from 'react';
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';
import cx from 'classnames';
import { Layer } from '@carbon/react';
import FeedbackDialog from '../FeedbackDialog';
import BackToTopBtn from '../BackToTopBtn';

import * as styles from './Utils.module.scss';

const Utils = () => {
  const [hidden, setHidden] = useState(true);
  const onScroll = useWindowScroll();

  onScroll(() => {
    if (hidden && window.scrollY > 300) {
      setHidden(false);
    }
    if (!hidden && window.scrollY < 300) {
      setHidden(true);
    }
  });

  return (
    <div
      aria-label="This section contains utilities"
      className={cx(styles.container, { [styles.hidden]: hidden })}>
      <Layer>
        <FeedbackDialog />
      </Layer>
      <BackToTopBtn />
    </div>
  );
};

export default Utils;
