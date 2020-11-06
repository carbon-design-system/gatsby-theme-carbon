import React from 'react';
import cx from 'classnames';
import { h4 } from './Markdown.module.scss';

const H4 = ({ children, className, ...rest }) => (
  <h4 className={cx(className, h4)} {...rest}>
    {children}
  </h4>
);

export default H4;
