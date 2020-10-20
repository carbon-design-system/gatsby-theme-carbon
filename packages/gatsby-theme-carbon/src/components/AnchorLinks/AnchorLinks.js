import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { list, listSmall, multipleColumns } from './AnchorLinks.module.scss';

export default class AnchorLinks extends React.Component {
  render() {
    const { children, small, className } = this.props;
    const isColumn = React.Children.count(children) > 6;
    const classNames = cx(list, className, {
      [listSmall]: small,
      [multipleColumns]: isColumn,
    });

    return (
      <ul className={classNames}>
        {React.Children.map(children, (link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    );
  }
}

AnchorLinks.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};
