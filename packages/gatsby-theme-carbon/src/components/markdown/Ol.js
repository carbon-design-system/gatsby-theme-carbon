import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ol = ({ children, ...rest }) => (
  <ol className={cx('bx--list--ordered', list)} {...rest}>
    {children}
  </ol>
);

export default Ol;
