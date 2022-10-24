import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ol = ({ children, nested, start, className, ...rest }) => {
  const classNames = cx(className, `cds--list--ordered--native`, list, {
    [`cds--list--nested`]: nested,
  });

  return (
    <ol className={classNames} {...rest} start={`${start}`}>
      {children}
    </ol>
  );
};

export default Ol;
