import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Grid';
import { doDontRow } from './DoDontRow.module.scss';

export default class DoDontRow extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return <Row className={doDontRow}>{children}</Row>;
  }
}
