import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { aside } from './Aside.module.scss';

export default class Aside extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;

    const captionClasses = classnames(aside, {
      [className]: className,
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
};
