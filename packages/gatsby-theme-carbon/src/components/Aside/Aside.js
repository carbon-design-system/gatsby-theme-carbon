import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { aside } from './Aside.module.scss';

export default class Aside extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,

    /**
     * Specify an `aria-label` value to provide a label to the inner aside element.
     */
    ariaLabel: PropTypes.string,

    /**
     * Specify an `aria-labelledby` value that references the id of an existing
     * element to serve as a label for the inner aside element.
     */
    ariaLabelledBy: PropTypes.string,
  };

  render() {
    const {
      ariaLabel,
      ariaLabelledBy,
      children,
      className,
      ...rest
    } = this.props;

    const captionClasses = classnames(aside, {
      [className]: className,
    });

    const accessibilityLabel = {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
    };

    return (
      <aside className={captionClasses} {...accessibilityLabel} {...rest}>
        {children}
      </aside>
    );
  }
}
