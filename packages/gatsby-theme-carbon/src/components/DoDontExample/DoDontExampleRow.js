import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Grid';
import { doDontRow } from './DoDontExampleRow.module.scss';

function DoDontExampleRow({ children }) {
  return <Row className={doDontRow}>{children}</Row>;
}

DoDontExampleRow.propTypes = {
  children: PropTypes.node,
};

export default DoDontExampleRow;
