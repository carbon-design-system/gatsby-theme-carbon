import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Aside extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    const captionClasses = classnames([`${prefix}--aside`], {
      [className]: className,
    });

    return <aside className={captionClasses}>{children}</aside>;
  }
}
