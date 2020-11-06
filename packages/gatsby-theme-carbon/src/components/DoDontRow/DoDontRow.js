import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row } from '../Grid';
import { doDontRow } from './DoDontRow.module.scss';

export default class DoDontRow extends React.Component {
  render() {
    const { children, className } = this.props;

    return <Row className={cx(className, doDontRow)}>{children}</Row>;
  }
}

DoDontRow.propTypes = {
  children: PropTypes.node.isRequired,
};
