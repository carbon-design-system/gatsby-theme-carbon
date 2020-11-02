import React from 'react';
import cx from 'classnames';
import { listItem } from './Markdown.module.scss';

const Li = ({ children, className, ...rest }) => (
  <li className={cx(className, 'bx--list__item', listItem)} {...rest}>
    {children}
  </li>
);

export default Li;
