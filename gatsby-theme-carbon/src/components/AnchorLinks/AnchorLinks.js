import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class AnchorLinks extends React.Component {
  render() {
    const { children, small } = this.props;
    console.log('child', children);
    const isColumn = React.Children.count(children) > 6;
    const classNames = classnames({
      [`${prefix}--anchor-links__list`]: true,
      [`${prefix}--anchor-links__list--small`]: small,
      [`${prefix}--anchor-links__list--column`]: isColumn,
    });
    return (
      <ul className={classNames}>
        {children.map(item => (
          <li className={`${prefix}--anchor-links__item`}>{item}</li>
        ))}
      </ul>
    );
  }
}

AnchorLinks.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
};
