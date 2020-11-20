import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row } from '../Grid';

import { paragraph, paragraphResponsive } from './Markdown.module.scss';

const P = ({ children, className, fullWidth, ...rest }) => {
  const paragraphClasses = cx(className, paragraph, {
    [paragraphResponsive]: !fullWidth,
  });

  return (
    <Row>
      <p className={paragraphClasses} {...rest}>
        {children}
      </p>
    </Row>
  );
};

export default P;

P.propTypes = {
  /**
   * Set to full width
   */
  fullWidth: PropTypes.bool,
};
