import React from 'react';
import { UpToTop20 } from '@carbon/icons-react';
import { button } from './BackToTopBtn.module.scss';

const BackToTopBtn = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    className={button}
    type="button"
    aria-label="Back to Top"
  >
    <UpToTop20 />
  </button>
);

export default BackToTopBtn;
