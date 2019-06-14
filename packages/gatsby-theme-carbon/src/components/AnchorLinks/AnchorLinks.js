import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  list,
  listSmall,
  multipleColumns,
  item,
} from './AnchorLinks.module.scss';

export default class AnchorLinks extends React.Component {
  render() {
    const { children, small } = this.props;
    const isColumn = React.Children.count(children) > 6;
    const classNames = classnames(list, {
      [listSmall]: small,
      [multipleColumns]: isColumn,
    });

    return (
      <ul className={classNames}>
        {children.map((link, i) => (
          <li key={i} className={item}>
            {link}
          </li>
        ))}
      </ul>
    );
  }
}

AnchorLinks.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};
