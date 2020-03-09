import React from 'react';
import FeedbackDialog from '../FeedbackDialog';
import BackToTopBtn from '../BackToTopBtn';

import styles from './Utils.module.scss';

const Utils = () => (
  <div className={styles.container}>
    <FeedbackDialog />
    <BackToTopBtn />
  </div>
);

export default Utils;
