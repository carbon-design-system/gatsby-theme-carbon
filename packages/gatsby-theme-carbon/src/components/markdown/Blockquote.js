import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Blockquote extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    const classNames = classnames([`${prefix}--blockquote`], {
      [className]: className,
    });

    return <blockquote className={classNames}>{children}</blockquote>;
  }
}
