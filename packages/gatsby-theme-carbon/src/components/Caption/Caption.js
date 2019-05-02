import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Caption extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    const captionClasses = classnames([`${prefix}--caption`], {
      [className]: className,
    });

    return (
      <div className={`${prefix}--row`}>
        <div className={`${prefix}--col-lg-4 ${prefix}--col-md-4`}>
          <p className={captionClasses}>{children}</p>
        </div>
      </div>
    );
  }
}
