import React from 'react';
import cx from 'classnames';
import { listItem } from './Markdown.module.scss';

const Li = ({ children, ...rest }) => (
  <li className={cx('bx--list__item', listItem)} {...rest}>
    {React.Children.map(children, child => {
      if (child.props) {
        if (
          (child.props.originalType === 'ul' ||
            child.props.originalType === 'ol') &&
          child.props.parentName === 'li'
        ) {
          return React.cloneElement(child, {
            className: cx(child.props.className, 'bx--list--nested'),
          });
        }
        return child;
      }
      return child;
    })}
  </li>
);

export default Li;
