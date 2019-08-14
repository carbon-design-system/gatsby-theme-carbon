import React from 'react';
import { UpToTop20 } from '@carbon/icons-react';
import ScrollToTop from 'react-scroll-up';

import { button } from './BackToTopBtn.module.scss';

const BackToTopBtn = () => (
  <ScrollToTop showUnder={300} style={{ zIndex: 9999 }}>
    <button className={button} type="button" aria-label="Back to Top">
      <UpToTop20 />
    </button>
  </ScrollToTop>
);

export default BackToTopBtn;
