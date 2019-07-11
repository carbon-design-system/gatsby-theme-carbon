import React from 'react';
import cx from 'classnames';

const Li = ({ children, ...rest }) => (
  <li className="bx--list__item" {...rest}>
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
