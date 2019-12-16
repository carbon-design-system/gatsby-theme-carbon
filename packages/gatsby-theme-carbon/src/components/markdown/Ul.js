import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ul = ({ children, nested, ...rest }) => {
  const className = cx('bx--list--unordered', list, {
    'bx--list--nested': nested,
  });
  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  );
};

export default Ul;
