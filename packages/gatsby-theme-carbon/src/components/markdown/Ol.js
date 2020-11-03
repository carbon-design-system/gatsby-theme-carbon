import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ol = ({ children, nested, start, className, ...rest }) => {
  const classNames = cx(className, 'bx--list--ordered--native', list, {
    'bx--list--nested': nested,
  });

  return (
    <ol className={classNames} {...rest} start={`${start}`}>
      {children}
    </ol>
  );
};

export default Ol;
