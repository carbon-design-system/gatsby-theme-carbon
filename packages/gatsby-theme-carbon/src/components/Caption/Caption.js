import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { caption, captionResponsive } from './Caption.module.scss';

export default class Caption extends React.Component {
  render() {
    const { children, className, fullWidth } = this.props;

    const captionClasses = cx(caption, {
      [className]: className,
      [captionResponsive]: !fullWidth,
    });

    return <p className={captionClasses}>{children}</p>;
  }
}

Caption.propTypes = {
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
