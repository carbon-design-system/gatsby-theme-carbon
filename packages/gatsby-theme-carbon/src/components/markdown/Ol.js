import React from 'react';
import cx from 'classnames';
import { ordered } from './Markdown.module.scss';

const Ol = ({ children, ...rest }) => (
  <ol className={cx('bx--list--ordered', ordered)} {...rest}>
    {children}
  </ol>
);

export default Ol;
