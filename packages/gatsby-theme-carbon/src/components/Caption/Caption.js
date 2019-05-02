import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Caption extends React.Component {
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
    const { children, className, fullWidth } = this.props;

    const captionClasses = classnames([`${prefix}--caption`], {
      [className]: className,
      [`${prefix}--caption--full`]: fullWidth,
    });

    return <p className={captionClasses}>{children}</p>;
  }
}
