import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';
const { prefix } = settings;

export default class AnchorLinks extends React.Component {
  render() {
    const { children, small } = this.props;
    const isColumn = React.Children.toArray(children.props.children).length > 6;

    const classNames = classnames({
      [`${prefix}--anchor-links`]: true,
      [`${prefix}--anchor-links--small`]: small,
      [`${prefix}--anchor-links--column`]: isColumn,
    });
    return <div className={classNames}>{children}</div>;
  }
}

AnchorLinks.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
};
