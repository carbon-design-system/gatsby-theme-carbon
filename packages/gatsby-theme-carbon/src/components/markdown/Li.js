import React from 'react';
import cx from 'classnames';
import { listItem } from './Markdown.module.scss';
// import usePrefix from '../../util/hooks/usePrefix';

// const prefix = usePrefix();

const Li = ({ children, className, ...rest }) => (
  <li className={cx(className, `cds--list__item`, listItem)} {...rest}>
    {children}
  </li>
);

export default Li;
