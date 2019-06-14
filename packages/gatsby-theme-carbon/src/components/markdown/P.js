import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { paragraph, paragraphResponsive } from './Markdown.module.scss';

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

    const paragraphClasses = classnames(paragraph, {
      [className]: className,
      [paragraphResponsive]: !fullWidth,
    });

    return (
      <p className={paragraphClasses} {...rest}>
        {children}
      </p>
    );
  }
}
