import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';
import usePrefix from '../../util/hooks/usePrefix';

const prefix = usePrefix();

const Ul = ({ children, nested, className, ...rest }) => {
  const classNames = cx(className, `${prefix}--list--unordered`, list, {
    [`${prefix}--list--nested`]: nested,
  });
  return (
    <ul className={classNames} {...rest}>
      {children}
    </ul>
  );
};

export default Ul;
