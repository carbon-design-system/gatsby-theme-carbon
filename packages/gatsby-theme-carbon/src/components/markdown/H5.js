import React from 'react';
import cx from 'classnames';
import { h5 } from './Markdown.module.scss';

const H5 = ({ children, className, ...rest }) => (
  <h5 className={cx(className, h5)} {...rest}>
    {children}
  </h5>
);

export default H5;
