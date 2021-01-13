import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { aside, asideNoRule } from './Aside.module.scss';

const Aside = ({ children, className, hideRule, ...rest }) => {
  const captionClasses = cx(aside, className, {
    [asideNoRule]: !!hideRule,
  });

  return (
    <aside className={captionClasses} {...rest}>
      {children}
    </aside>
  );
};

export default Aside;

Aside.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a custom class
   */
  className: PropTypes.string,

  /**
   * Hide the hanging rule
   */
  hideRule: PropTypes.bool,
};
