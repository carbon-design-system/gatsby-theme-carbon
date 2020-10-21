import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { aside, asideNoRule } from './Aside.module.scss';

export default class Aside extends React.Component {
  render() {
    const { children, className, hideRule, ...rest } = this.props;

    const captionClasses = classnames(aside, {
      [className]: className,
      [asideNoRule]: !!hideRule,
    });

    return (
      <aside className={captionClasses} {...rest}>
        {children}
      </aside>
    );
  }
}

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
