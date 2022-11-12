import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ul = ({ children, nested, className, ...rest }) => {
  const classNames = cx(className, `cds--list--unordered`, list, {
    [`cds--list--nested`]: nested,
  });
  return (
    <ul className={classNames} {...rest}>
      {children}
    </ul>
  );
};

export default Ul;
