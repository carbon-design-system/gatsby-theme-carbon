import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class P extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Set to full width
     */
    fullWidth: PropTypes.bool,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className, fullWidth, ...rest } = this.props;

    const paragraphClasses = classnames([`${prefix}--paragraph`], {
      [className]: className,
      [`${prefix}--paragraph--responsive`]: !fullWidth,
    });

    return (
      <p className={paragraphClasses} {...rest}>
        {children}
      </p>
    );
  }
}
