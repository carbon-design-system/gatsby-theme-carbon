import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ul = ({ children, ...rest }) => (
  <ul className={cx('bx--list--unordered', list)} {...rest}>
    {children}
  </ul>
);

export default Ul;
